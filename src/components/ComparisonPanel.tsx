
import { useState } from "react";
import type { ClorptInputs, SoilHorizon } from "../engine/types";
import type { PedogenicDrivers } from "../engine/soilFormation";
import { calculatePedogenicDrivers } from "../engine/soilFormation";
import { generateSoilHorizons } from "../engine/horizons";

type ComparisonFactor = keyof ClorptInputs;

const choices: Record<
  ComparisonFactor,
  { label: string; value: string }[]
> = {
  climate: [
    { label: "Humid tropical", value: "humid tropical" },
    { label: "Temperate humid", value: "temperate humid" },
    { label: "Cool humid continental", value: "cool humid continental" },
    { label: "Arid / semi-arid", value: "arid/semi-arid" },
    { label: "Wetland / poorly drained", value: "wetland/poorly drained" },
    { label: "Cool humid volcanic upland", value: "cool humid volcanic upland" }
  ],
  organisms: [
    { label: "Deciduous forest", value: "deciduous forest" },
    { label: "Grassland", value: "grassland" },
    { label: "Coniferous forest", value: "coniferous forest" },
    { label: "Tropical rainforest", value: "tropical rainforest" },
    { label: "Shrubland", value: "shrubland" },
    { label: "Wetland vegetation", value: "wetland vegetation" },
    { label: "Cultivated cropland", value: "cultivated cropland" }
  ],
  relief: [
    { label: "Summit", value: "summit" },
    { label: "Backslope", value: "backslope" },
    { label: "Footslope", value: "footslope" },
    { label: "Depression", value: "depression" },
    { label: "Alluvial terrace", value: "alluvial terrace" }
  ],
  parentMaterial: [
    { label: "Andesite", value: "andesite" },
    { label: "Basalt", value: "basalt" },
    { label: "Granite", value: "granite" },
    { label: "Loess", value: "loess" },
    { label: "Alluvium", value: "alluvium" },
    { label: "Volcanic ash", value: "volcanic ash" },
    { label: "Glacial till", value: "glacial till" }
  ],
  timeYears: [
    { label: "1,000 years", value: "1000" },
    { label: "10,000 years", value: "10000" },
    { label: "100,000 years", value: "100000" },
    { label: "1 million years", value: "1000000" },
    { label: "10 million years", value: "10000000" }
  ]
};

const factorNames: Record<ComparisonFactor, string> = {
  climate: "Climate",
  organisms: "Organisms / vegetation",
  relief: "Relief / topography",
  parentMaterial: "Parent material",
  timeYears: "Formation time"
};

const driverMetrics = [
  { key: "weatheringIndex", label: "Weathering" },
  { key: "leachingIndex", label: "Leaching" },
  { key: "clayTranslocationIndex", label: "Clay translocation" },
  { key: "redoxIndex", label: "Redox" },
  { key: "organicMatterAccumulation", label: "Organic matter" },
  { key: "erosionIndex", label: "Erosion" },
  { key: "depositionIndex", label: "Deposition" }
] as const;

interface ComparisonPanelProps {
  inputs: ClorptInputs;
  drivers: PedogenicDrivers;
  horizons: SoilHorizon[];
}

export default function ComparisonPanel({
  inputs,
  drivers,
  horizons
}: ComparisonPanelProps) {
  const [factor, setFactor] = useState<ComparisonFactor>("climate");
  const [alternateValue, setAlternateValue] = useState("humid tropical");

  const alternativeInputs: ClorptInputs = {
    ...inputs,
    [factor]:
      factor === "timeYears"
        ? Number(alternateValue)
        : alternateValue
  };

  const alternativeDrivers =
    calculatePedogenicDrivers(alternativeInputs);

  const alternativeHorizons =
    generateSoilHorizons(alternativeInputs, alternativeDrivers);

  function changeFactor(value: ComparisonFactor) {
    setFactor(value);
    setAlternateValue(choices[value][0].value);
  }

  function displayValue(
    selectedInputs: ClorptInputs,
    selectedFactor: ComparisonFactor
  ) {
    const value = selectedInputs[selectedFactor];

    if (selectedFactor === "timeYears") {
      return Number(value).toLocaleString() + " years";
    }

    const option = choices[selectedFactor].find(
      item => item.value === value
    );

    return option?.label ?? String(value);
  }

  function horizonSequence(items: SoilHorizon[]) {
    return items.map(h => h.name).join(" → ");
  }

  return (
    <section style={{
      marginTop: "28px",
      padding: "24px",
      background: "#F5F2EB",
      borderRadius: "12px",
      color: "#29251F"
    }}>
      <h2 style={{ marginTop: 0 }}>Compare Environments</h2>

      <p style={{ color: "#666", fontSize: "14px" }}>
        Change one CLORPT factor while keeping the other four
        factors constant. Explore how the predicted soil development changes.
      </p>

      <label>
        <strong>Choose a factor to investigate</strong>
        <select
          value={factor}
          onChange={e => changeFactor(e.target.value as ComparisonFactor)}
          style={selectStyle}
        >
          {(Object.keys(factorNames) as ComparisonFactor[]).map(key => (
            <option key={key} value={key}>
              {factorNames[key]}
            </option>
          ))}
        </select>
      </label>

      <label style={{ display: "block", marginTop: "16px" }}>
        <strong>Alternative setting</strong>
        <select
          value={alternateValue}
          onChange={e => setAlternateValue(e.target.value)}
          style={selectStyle}
        >
          {choices[factor].map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "16px",
        marginTop: "24px"
      }}>
        <div style={cardStyle}>
          <h3>Original environment</h3>
          <p>
            <strong>{factorNames[factor]}:</strong>{" "}
            {displayValue(inputs, factor)}
          </p>
          <p>
            <strong>Horizon sequence:</strong>
            <br />
            {horizonSequence(horizons)}
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Alternative environment</h3>
          <p>
            <strong>{factorNames[factor]}:</strong>{" "}
            {displayValue(alternativeInputs, factor)}
          </p>
          <p>
            <strong>Horizon sequence:</strong>
            <br />
            {horizonSequence(alternativeHorizons)}
          </p>
        </div>
      </div>

      <h3 style={{ marginTop: "28px" }}>
        Changes in Pedogenic Driver Indices
      </h3>

      <p style={{ fontSize: "12px", color: "#777" }}>
        Positive values indicate an increase in the alternative
        environment; negative values indicate a decrease.
      </p>

      <div style={{
        overflowX: "auto",
        background: "white",
        borderRadius: "8px",
        padding: "12px"
      }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left"
        }}>
          <thead>
            <tr>
              <th style={cellStyle}>Process</th>
              <th style={cellStyle}>Original</th>
              <th style={cellStyle}>Alternative</th>
              <th style={cellStyle}>Change</th>
            </tr>
          </thead>

          <tbody>
            {driverMetrics.map(metric => {
              const original = drivers[metric.key];
              const alternative = alternativeDrivers[metric.key];
              const difference = alternative - original;

              return (
                <tr key={metric.key}>
                  <td style={cellStyle}>{metric.label}</td>
                  <td style={cellStyle}>{original.toFixed(2)}</td>
                  <td style={cellStyle}>{alternative.toFixed(2)}</td>
                  <td style={{
                    ...cellStyle,
                    color: difference > 0.001
                      ? "#28733C"
                      : difference < -0.001
                        ? "#A13D32"
                        : "#666"
                  }}>
                    {difference > 0 ? "+" : ""}
                    {difference.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p style={{
        fontSize: "12px",
        color: "#777",
        marginTop: "16px"
      }}>
        This is a model-based comparison of relative potentials,
        not a measured or validated prediction of soil change.
      </p>
    </section>
  );
}

const selectStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  maxWidth: "420px",
  padding: "10px",
  marginTop: "8px",
  border: "1px solid #CCC",
  borderRadius: "6px",
  background: "white",
  fontSize: "14px"
};

const cardStyle: React.CSSProperties = {
  background: "white",
  border: "1px solid #DDD5C9",
  borderRadius: "8px",
  padding: "16px"
};

const cellStyle: React.CSSProperties = {
  padding: "10px 8px",
  borderBottom: "1px solid #E5E0D7",
  fontSize: "14px"
};
