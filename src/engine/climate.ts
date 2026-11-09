
export interface ClimateEffects {
  temperature: number;
  moisture: number;
  weatheringPotential: number;
  leachingPotential: number;
  redoxPotential: number;
  description: string;
}

// Educational coefficients, scaled from 0 to 1.
// These are conceptual starting values, not calibrated field measurements.

const climateDatabase: Record<string, ClimateEffects> = {
  "humid tropical": {
    temperature: 1.0,
    moisture: 1.0,
    weatheringPotential: 1.0,
    leachingPotential: 1.0,
    redoxPotential: 0.2,
    description: "Warm temperatures and abundant rainfall favor rapid chemical weathering and strong leaching."
  },

  "temperate humid": {
    temperature: 0.65,
    moisture: 0.75,
    weatheringPotential: 0.7,
    leachingPotential: 0.75,
    redoxPotential: 0.2,
    description: "Moderate temperatures and sufficient precipitation support chemical weathering and soil development."
  },

  "cool humid continental": {
    temperature: 0.4,
    moisture: 0.7,
    weatheringPotential: 0.5,
    leachingPotential: 0.65,
    redoxPotential: 0.25,
    description: "Cool temperatures slow chemical reactions, while precipitation supports leaching."
  },

  "arid/semi-arid": {
    temperature: 0.8,
    moisture: 0.15,
    weatheringPotential: 0.35,
    leachingPotential: 0.1,
    redoxPotential: 0.05,
    description: "Limited water availability restricts leaching and can favor carbonate or salt accumulation."
  },

  "wetland/poorly drained": {
    temperature: 0.6,
    moisture: 1.0,
    weatheringPotential: 0.55,
    leachingPotential: 0.5,
    redoxPotential: 1.0,
    description: "Persistent saturation limits oxygen availability and promotes reducing conditions and redoximorphic features."
  },

  "cool humid volcanic upland": {
    temperature: 0.4,
    moisture: 0.85,
    weatheringPotential: 0.65,
    leachingPotential: 0.8,
    redoxPotential: 0.2,
    description: "Cool, moist conditions favor leaching and the alteration of volcanic materials."
  }
};

export function getClimateEffects(climate: string): ClimateEffects {
  const key = climate.trim().toLowerCase();

  const effects = climateDatabase[key];

  if (!effects) {
    throw new Error(`Climate not recognized: ${climate}`);
  }

  return effects;
}
