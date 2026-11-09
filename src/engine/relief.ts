
export interface ReliefEffects {
  drainage: number;
  erosionPotential: number;
  depositionPotential: number;
  runoffPotential: number;
  waterTableInfluence: number;
  description: string;
}

// Educational coefficients scaled from 0 to 1.
// These are conceptual landscape tendencies, not calibrated measurements.

const reliefDatabase: Record<string, ReliefEffects> = {
  "summit": {
    drainage: 0.9,
    erosionPotential: 0.25,
    depositionPotential: 0.05,
    runoffPotential: 0.2,
    waterTableInfluence: 0.1,
    description: "Relatively stable upland position with generally good drainage and limited sediment accumulation."
  },

  "backslope": {
    drainage: 0.85,
    erosionPotential: 0.95,
    depositionPotential: 0.05,
    runoffPotential: 0.9,
    waterTableInfluence: 0.1,
    description: "Steep or inclined landscape position with substantial runoff and potential soil erosion."
  },

  "footslope": {
    drainage: 0.5,
    erosionPotential: 0.15,
    depositionPotential: 0.8,
    runoffPotential: 0.35,
    waterTableInfluence: 0.6,
    description: "Lower slope position receiving water and sediment from upslope areas."
  },

  "depression": {
    drainage: 0.1,
    erosionPotential: 0.05,
    depositionPotential: 0.7,
    runoffPotential: 0.05,
    waterTableInfluence: 1.0,
    description: "Low-lying landscape position where water can accumulate and prolonged saturation may develop."
  },

  "alluvial terrace": {
    drainage: 0.75,
    erosionPotential: 0.15,
    depositionPotential: 0.25,
    runoffPotential: 0.2,
    waterTableInfluence: 0.35,
    description: "Former floodplain or river terrace with variable drainage and potentially stratified sediment deposits."
  }
};

export function getReliefEffects(relief: string): ReliefEffects {
  const key = relief.trim().toLowerCase();

  const effects = reliefDatabase[key];

  if (!effects) {
    throw new Error(`Relief not recognized: ${relief}`);
  }

  return effects;
}
