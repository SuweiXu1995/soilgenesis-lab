
import { generateSoilHorizons } from "./horizons";
import { calculatePedogenicDrivers } from "./soilFormation";
import type { ClorptInputs } from "./types";

const testCases: ClorptInputs[] = [
  {
    climate: "humid tropical",
    organisms: "tropical rainforest",
    relief: "summit",
    parentMaterial: "basalt",
    timeYears: 1000000
  },
  {
    climate: "arid/semi-arid",
    organisms: "shrubland",
    relief: "summit",
    parentMaterial: "granite",
    timeYears: 100000
  },
  {
    climate: "wetland/poorly drained",
    organisms: "wetland vegetation",
    relief: "depression",
    parentMaterial: "alluvium",
    timeYears: 10000
  }
];

console.log("=== SoilGenesis Lab: CLORPT tests ===");


for (const inputs of testCases) {
  console.log("\nEnvironment:", inputs);

  try {
    const result = calculatePedogenicDrivers(inputs);

    console.log("Pedogenic drivers:");
    console.table({
      Weathering: result.weatheringIndex,
      Leaching: result.leachingIndex,
      Redox: result.redoxIndex,
      "Organic matter": result.organicMatterAccumulation,
      Erosion: result.erosionIndex,
      Deposition: result.depositionIndex,
      Development: result.developmentalProgress
    });

    console.log("Dominant processes:", result.dominantProcesses);

    const horizons = generateSoilHorizons(inputs, result);

    console.log("Generated soil horizons:");
    console.table(
      horizons.map(h => ({
        Horizon: h.name,
        Top_cm: h.topCm,
        Bottom_cm: h.bottomCm,
        Texture: h.texture,
        Clay_percent: h.clayPercent,
        pH: h.pH,
        Organic_C: h.organicCarbon,
        Processes: h.processes.join(", ")
      }))
    );

  } catch (error) {
    console.error("Test failed:", inputs, error);
  }
}

