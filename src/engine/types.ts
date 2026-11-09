
// Environmental inputs based on CLORPT

export interface ClorptInputs {
  climate: string;
  organisms: string;
  relief: string;
  parentMaterial: string;
  timeYears: number;
}

// Properties of an individual soil horizon

export interface SoilHorizon {
  name: string;
  topCm: number;
  bottomCm: number;

  texture: string;
  clayPercent: number;

  pH: number;
  organicCarbon: number;

  mineralogy: string[];

  structure: string;
  color: string;

  processes: string[];
}

// Overall simulation results

export interface SoilSimulation {
  inputs: ClorptInputs;

  horizons: SoilHorizon[];

  weatheringIntensity: number;
  leachingIntensity: number;
  profileDifferentiation: number;

  dominantProcesses: string[];

  modelDisclaimer: string;
}
