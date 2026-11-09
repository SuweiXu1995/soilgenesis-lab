
export interface ParentMaterialEffects {
  weatherability: number;
  baseStatus: number;
  coarseFragmentPotential: number;
  carbonatePotential: number;
  volcanicGlassContent: number;
  initialMinerals: string[];
  description: string;
}

// Educational coefficients scaled from 0 to 1.
// These are conceptual starting values, not calibrated measurements.

const parentMaterialDatabase: Record<string, ParentMaterialEffects> = {
  "andesite": {
    weatherability: 0.75,
    baseStatus: 0.7,
    coarseFragmentPotential: 0.8,
    carbonatePotential: 0.0,
    volcanicGlassContent: 0.2,
    initialMinerals: ["Plagioclase", "Pyroxene", "Amphibole", "Magnetite"],
    description: "Intermediate volcanic rock containing plagioclase and ferromagnesian minerals."
  },

  "basalt": {
    weatherability: 0.9,
    baseStatus: 0.9,
    coarseFragmentPotential: 0.8,
    carbonatePotential: 0.0,
    volcanicGlassContent: 0.3,
    initialMinerals: ["Plagioclase", "Pyroxene", "Olivine", "Magnetite"],
    description: "Mafic volcanic rock rich in Ca-, Mg-, and Fe-bearing minerals."
  },

  "granite": {
    weatherability: 0.35,
    baseStatus: 0.25,
    coarseFragmentPotential: 0.9,
    carbonatePotential: 0.0,
    volcanicGlassContent: 0.0,
    initialMinerals: ["Quartz", "K-feldspar", "Plagioclase", "Muscovite", "Biotite"],
    description: "Felsic intrusive rock dominated by quartz and feldspars, generally with low base status."
  },

  "loess": {
    weatherability: 0.65,
    baseStatus: 0.65,
    coarseFragmentPotential: 0.05,
    carbonatePotential: 0.7,
    volcanicGlassContent: 0.0,
    initialMinerals: ["Quartz", "Feldspar", "Mica", "Carbonates"],
    description: "Wind-deposited, predominantly silt-sized material that may contain abundant primary minerals and carbonates."
  },

  "alluvium": {
    weatherability: 0.55,
    baseStatus: 0.5,
    coarseFragmentPotential: 0.4,
    carbonatePotential: 0.3,
    volcanicGlassContent: 0.0,
    initialMinerals: ["Quartz", "Feldspar", "Mica", "Clay minerals"],
    description: "River-deposited sediment with variable texture, mineralogy, and stratification."
  },

  "volcanic ash": {
    weatherability: 0.95,
    baseStatus: 0.6,
    coarseFragmentPotential: 0.05,
    carbonatePotential: 0.0,
    volcanicGlassContent: 1.0,
    initialMinerals: ["Volcanic glass", "Plagioclase", "Pyroxene", "Amphibole"],
    description: "Volcanic ejecta rich in glass and other readily weatherable materials, potentially forming short-range-order minerals."
  },

  "glacial till": {
    weatherability: 0.6,
    baseStatus: 0.55,
    coarseFragmentPotential: 0.85,
    carbonatePotential: 0.4,
    volcanicGlassContent: 0.0,
    initialMinerals: ["Quartz", "Feldspar", "Mica", "Carbonates", "Rock fragments"],
    description: "Poorly sorted glacial sediment with highly variable mineralogy, texture, and carbonate content."
  }
};

export function getParentMaterialEffects(
  parentMaterial: string
): ParentMaterialEffects {
  const key = parentMaterial.trim().toLowerCase();

  const effects = parentMaterialDatabase[key];

  if (!effects) {
    throw new Error(`Parent material not recognized: ${parentMaterial}`);
  }

  return effects;
}
