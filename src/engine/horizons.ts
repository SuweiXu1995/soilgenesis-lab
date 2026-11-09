
import type { ClorptInputs, SoilHorizon } from "./types";
import type { PedogenicDrivers } from "./soilFormation";

import { getParentMaterialEffects } from "./parentMaterial";
import { getVegetationEffects } from "./vegetation";

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function generateSoilHorizons(
  inputs: ClorptInputs,
  drivers: PedogenicDrivers
): SoilHorizon[] {

  const parent = getParentMaterialEffects(inputs.parentMaterial);
  const vegetation = getVegetationEffects(inputs.organisms);

  const horizons: SoilHorizon[] = [];

  let depth = 0;
  const totalDepth = 100;

  // Preliminary threshold for simulated clay translocation.
  const hasClayTranslocation =
    drivers.clayTranslocationIndex > 0.35;

  // Determine whether an organic surface horizon is likely.
  const hasOrganicHorizon =
    drivers.organicMatterAccumulation > 0.55 &&
    !inputs.organisms.toLowerCase().includes("cropland");

  if (hasOrganicHorizon) {
    const thickness = 3;

    horizons.push({
      name: "O",
      topCm: depth,
      bottomCm: depth + thickness,
      texture: "Organic material",
      clayPercent: 0,
      pH: 5.0,
      organicCarbon: 20,
      mineralogy: [],
      structure: "Fibrous or granular organic material",
      color: "Very dark brown to black",
      processes: ["Organic matter accumulation", "Decomposition"]
    });

    depth += thickness;
  }

  // Generate A horizon.
  const aThickness = 18 + Math.round(
    6 * vegetation.rootingDepth
  );

  const aProcesses = [
    "Organic matter incorporation",
    "Mineral weathering"
  ];

  if (hasClayTranslocation) {
    aProcesses.push("Clay eluviation (simulated)");
  }

  horizons.push({
    name: "A",
    topCm: depth,
    bottomCm: depth + aThickness,
    texture: getTexture(inputs.parentMaterial, "A"),
    clayPercent: clamp(
      18 + 10 * drivers.weatheringIndex -
      (hasClayTranslocation ? 8 * drivers.clayTranslocationIndex : 0),
      10,
      35
    ),
    pH: clamp(
      6.5 - 1.5 * drivers.leachingIndex + 0.8 * parent.baseStatus,
      4.0,
      8.0
    ),
    organicCarbon: 1.5 + 3 * drivers.organicMatterAccumulation,
    mineralogy: parent.initialMinerals,
    structure: "Granular or subangular blocky",
    color: "Dark brown",
    processes: aProcesses
  });

  depth += aThickness;

  // E horizon: use a conservative heuristic.
  const hasEHorizon =
    drivers.leachingIndex > 0.4 &&
    vegetation.acidityPotential > 0.65 &&
    inputs.organisms.toLowerCase().includes("coniferous");

  if (hasEHorizon) {
    const thickness = 12;

    horizons.push({
      name: "E",
      topCm: depth,
      bottomCm: depth + thickness,
      texture: "Sandy loam to loam",
      clayPercent: 10,
      pH: 4.5,
      organicCarbon: 0.3,
      mineralogy: ["Quartz", "Residual primary minerals"],
      structure: "Weak platy or structureless",
      color: "Pale gray or light brown",
      processes: ["Eluviation", "Organic complexation"]
    });

    depth += thickness;
  }

  // Determine the dominant subsurface horizon type.
  let bHorizonName = "Bw";

  let bProcesses: string[] = [
    "Mineral weathering",
    "Subsurface alteration"
  ];

  let bColor = "Brown";
  let bStructure = "Subangular blocky";

  let bClayPercent = clamp(
    20 + 12 * drivers.weatheringIndex,
    10,
    40
  );

  if (drivers.redoxIndex > 0.6) {
    // Redoximorphic conditions take priority.
    bHorizonName = "Bg";
    bProcesses = [
      "Reduction and oxidation",
      "Redoximorphic redistribution"
    ];
    bColor = "Gray with redox features";
    bStructure = "Weak or massive";

  } else if (
    parent.carbonatePotential > 0.5 &&
    drivers.leachingIndex < 0.2
  ) {
    // Carbonate accumulation takes priority over clay translocation.
    bHorizonName = "Bk";
    bProcesses = [
      "Carbonate accumulation",
      "Limited leaching"
    ];
    bColor = "Light brown";
    bStructure = "Blocky or massive";

  } else if (hasClayTranslocation) {
    // Simulated clay-illuviation horizon.
    bHorizonName = "Bt";
    bProcesses = [
      "Clay illuviation (simulated)",
      "Potential clay film development",
      "Subsurface clay accumulation"
    ];
    bColor = "Brown to reddish brown";
    bStructure = "Moderate subangular blocky";

    bClayPercent = clamp(
      bClayPercent + 18 * drivers.clayTranslocationIndex,
      10,
      50
    );
  }

  const bThickness = 35 + Math.round(
    10 * drivers.developmentalProgress
  );

  const secondaryMinerals: string[] = [];

  if (parent.volcanicGlassContent > 0.5) {
    secondaryMinerals.push("Allophane", "Imogolite");
  }

  if (drivers.weatheringIndex > 0.35) {
    secondaryMinerals.push("Kaolinite", "Goethite");
  }

  if (drivers.weatheringIndex > 0.65) {
    secondaryMinerals.push("Hematite");
  }

  horizons.push({
    name: bHorizonName,
    topCm: depth,
    bottomCm: depth + bThickness,
    texture: getTexture(inputs.parentMaterial, "B"),
    clayPercent: bClayPercent,
    pH: clamp(
      6.5 - 1.5 * drivers.leachingIndex + 0.8 * parent.baseStatus,
      4.0,
      8.0
    ),
    organicCarbon: 0.3,
    mineralogy: [
      ...parent.initialMinerals,
      ...secondaryMinerals
    ],
    structure: bStructure,
    color: bColor,
    processes: bProcesses
  });

  depth += bThickness;

  // C horizon: remaining profile depth.
  if (depth < totalDepth) {
    horizons.push({
      name: "C",
      topCm: depth,
      bottomCm: totalDepth,
      texture: getTexture(inputs.parentMaterial, "C"),
      clayPercent: 15,
      pH: 6.5,
      organicCarbon: 0.1,
      mineralogy: parent.initialMinerals,
      structure: "Massive or weakly structured",
      color: "Parent-material color",
      processes: ["Limited pedogenic alteration"]
    });
  }

  return horizons;
}

// Preliminary texture estimates based on parent material.
// These are not particle-size measurements.

function getTexture(
  parentMaterial: string,
  horizon: string
): string {

  const material = parentMaterial.toLowerCase();

  if (material === "loess") return "Silt loam";

  if (material === "granite") {
    return horizon === "B" ? "Loam" : "Sandy loam";
  }

  if (material === "basalt") return "Clay loam";

  if (material === "andesite") return "Loam";

  if (material === "volcanic ash") return "Silt loam";

  if (material === "alluvium") return "Variable: loam";

  if (material === "glacial till") return "Loam";

  return "Unknown";
}
