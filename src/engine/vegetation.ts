
export interface VegetationEffects {
  organicMatterInput: number;
  decompositionRate: number;
  bioturbation: number;
  acidityPotential: number;
  rootingDepth: number;
  description: string;
}

// Educational coefficients scaled from 0 to 1.
// These represent conceptual tendencies, not measured field values.

const vegetationDatabase: Record<string, VegetationEffects> = {
  "deciduous forest": {
    organicMatterInput: 0.8,
    decompositionRate: 0.7,
    bioturbation: 0.7,
    acidityPotential: 0.45,
    rootingDepth: 0.75,
    description: "Leaf litter inputs and active biological mixing support organic matter accumulation and soil structure development."
  },

  "grassland": {
    organicMatterInput: 1.0,
    decompositionRate: 0.65,
    bioturbation: 0.85,
    acidityPotential: 0.2,
    rootingDepth: 1.0,
    description: "Dense, deep root systems contribute substantial belowground organic matter and promote aggregate formation."
  },

  "coniferous forest": {
    organicMatterInput: 0.75,
    decompositionRate: 0.4,
    bioturbation: 0.45,
    acidityPotential: 0.85,
    rootingDepth: 0.65,
    description: "Acidic litter and relatively slow decomposition can favor organic matter accumulation and podzolization under suitable conditions."
  },

  "tropical rainforest": {
    organicMatterInput: 0.9,
    decompositionRate: 1.0,
    bioturbation: 0.9,
    acidityPotential: 0.35,
    rootingDepth: 0.85,
    description: "High biological productivity and rapid decomposition promote intense nutrient cycling and substantial biological activity."
  },

  "shrubland": {
    organicMatterInput: 0.55,
    decompositionRate: 0.55,
    bioturbation: 0.5,
    acidityPotential: 0.3,
    rootingDepth: 0.7,
    description: "Patchy vegetation and variable rooting patterns create spatially heterogeneous organic matter inputs."
  },

  "wetland vegetation": {
    organicMatterInput: 0.9,
    decompositionRate: 0.2,
    bioturbation: 0.25,
    acidityPotential: 0.4,
    rootingDepth: 0.5,
    description: "Waterlogged conditions often slow organic matter decomposition and promote organic matter accumulation."
  },

  "cultivated cropland": {
    organicMatterInput: 0.5,
    decompositionRate: 0.75,
    bioturbation: 0.4,
    acidityPotential: 0.3,
    rootingDepth: 0.7,
    description: "Crop residues and root inputs interact with tillage, fertilization, and management to influence soil organic matter and structure."
  }
};

export function getVegetationEffects(
  vegetation: string
): VegetationEffects {
  const key = vegetation.trim().toLowerCase();

  const effects = vegetationDatabase[key];

  if (!effects) {
    throw new Error(`Vegetation not recognized: ${vegetation}`);
  }

  return effects;
}
