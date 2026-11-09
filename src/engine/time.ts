
export interface TimeEffects {
  timeYears: number;
  developmentalProgress: number;
  description: string;
}

// Educational time-response model.
// Progress is a conceptual index from 0 to 1,
// not a measured degree of soil development.

export function getTimeEffects(timeYears: number): TimeEffects {
  if (!Number.isFinite(timeYears) || timeYears <= 0) {
    throw new Error("Soil formation time must be a positive number.");
  }

  // Logarithmic response prevents development from
  // increasing linearly without limit.
  const referenceTime = 10000000;

  const developmentalProgress =
    Math.min(
      1,
      Math.log10(1 + timeYears) /
      Math.log10(1 + referenceTime)
    );

  let description: string;

  if (timeYears <= 1000) {
    description =
      "Very young soil: weak horizon differentiation and limited alteration of parent material.";
  } else if (timeYears <= 10000) {
    description =
      "Young soil: initial horizon development and measurable mineral weathering.";
  } else if (timeYears <= 100000) {
    description =
      "Developing soil: increasing horizon differentiation and accumulation or redistribution of soil constituents.";
  } else if (timeYears <= 1000000) {
    description =
      "Mature soil: substantial pedogenic alteration, potentially including clay translocation and strong mineral transformations.";
  } else {
    description =
      "Very old soil: potentially advanced weathering and horizon development, depending on environmental stability and landscape history.";
  }

  return {
    timeYears,
    developmentalProgress,
    description
  };
}
