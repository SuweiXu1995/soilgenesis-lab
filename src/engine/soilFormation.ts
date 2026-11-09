
import type { ClorptInputs } from "./types";

import { getClimateEffects } from "./climate";
import { getVegetationEffects } from "./vegetation";
import { getReliefEffects } from "./relief";
import { getParentMaterialEffects } from "./parentMaterial";
import { getTimeEffects } from "./time";

export interface PedogenicDrivers {
  weatheringIndex: number;
  leachingIndex: number;
  clayTranslocationIndex: number;
  redoxIndex: number;
  organicMatterAccumulation: number;
  erosionIndex: number;
  depositionIndex: number;
  developmentalProgress: number;
  dominantProcesses: string[];
  explanations: string[];
}

// Keep all conceptual indices between 0 and 1.
function clamp(value: number): number {
  return Math.max(0, Math.min(1, value));
}

export function calculatePedogenicDrivers(
  inputs: ClorptInputs
): PedogenicDrivers {

  // Retrieve the effects of each CLORPT factor.
  const climate = getClimateEffects(inputs.climate);
  const vegetation = getVegetationEffects(inputs.organisms);
  const relief = getReliefEffects(inputs.relief);
  const parent = getParentMaterialEffects(inputs.parentMaterial);
  const time = getTimeEffects(inputs.timeYears);

  // 1. Weathering: climate, parent material, and time interact.
  const weatheringIndex = clamp(
    climate.weatheringPotential *
    parent.weatherability *
    time.developmentalProgress
  );

  // 2. Leaching requires both water and effective drainage.
  const leachingIndex = clamp(
    climate.leachingPotential *
    climate.moisture *
    relief.drainage *
    time.developmentalProgress
  );

  
  // 3. Redox conditions depend on moisture and restricted drainage.
  const redoxIndex = clamp(
    0.5 * climate.redoxPotential +
    0.5 * climate.moisture * (1 - relief.drainage)
  );

  // 4. Organic matter accumulation reflects inputs and decomposition.
  // Warmer conditions can accelerate decomposition.
  const effectiveDecomposition = clamp(
    vegetation.decompositionRate *
    climate.temperature
  );

  const organicMatterAccumulation = clamp(
    vegetation.organicMatterInput *
    (1 - 0.7 * effectiveDecomposition) *
    time.developmentalProgress
  );

  // 5. Landscape processes are influenced by relief and time.
  const erosionIndex = clamp(
    relief.erosionPotential *
    (0.5 + 0.5 * time.developmentalProgress)
  );

  // 6. Clay translocation depends on leaching, weatherability, and erosion.
  const clayTranslocationIndex = clamp(
    climate.leachingPotential *
    climate.moisture *
    relief.drainage *
    time.developmentalProgress *
    (0.5 + 0.5 * parent.weatherability) *
    (1 - 0.5 * erosionIndex)
);

  const depositionIndex = clamp(
    relief.depositionPotential *
    (0.5 + 0.5 * time.developmentalProgress)
  );

  // Identify potentially important pedogenic processes.
  const dominantProcesses: string[] = [];

  if (weatheringIndex > 0.25) {
    dominantProcesses.push("Mineral weathering");
  }

  if (leachingIndex > 0.25) {
    dominantProcesses.push("Leaching");
  }

  if (clayTranslocationIndex > 0.25) {
    dominantProcesses.push("Clay translocation");
  }

  if (redoxIndex > 0.4) {
    dominantProcesses.push("Redoximorphism");
  }

  if (organicMatterAccumulation > 0.3) {
    dominantProcesses.push("Organic matter accumulation");
  }

  if (erosionIndex > 0.5) {
    dominantProcesses.push("Soil erosion");
  }

  if (depositionIndex > 0.4) {
    dominantProcesses.push("Sediment deposition");
  }

  const explanations = [
    climate.description,
    vegetation.description,
    relief.description,
    parent.description,
    time.description
  ];

  return {
    weatheringIndex,
    leachingIndex,
    clayTranslocationIndex,
    redoxIndex,
    organicMatterAccumulation,
    erosionIndex,
    depositionIndex,
    developmentalProgress: time.developmentalProgress,
    dominantProcesses,
    explanations
  };
}
