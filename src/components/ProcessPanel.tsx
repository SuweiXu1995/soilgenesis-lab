
import type { PedogenicDrivers } from "../engine/soilFormation";

interface ProcessPanelProps {
  drivers: PedogenicDrivers;
}

const driverLabels: {
  key: keyof Pick<
    PedogenicDrivers,
    | "weatheringIndex"
    | "leachingIndex"
    | "clayTranslocationIndex"
    | "redoxIndex"
    | "organicMatterAccumulation"
    | "erosionIndex"
    | "depositionIndex"
  >;
  label: string;
  description: string;
}[] = [
  {
    key: "weatheringIndex",
    label: "Mineral weathering",
    description: "Potential for alteration of primary minerals."
  },
  {
    key: "leachingIndex",
    label: "Leaching",
    description: "Potential for downward removal of soluble constituents."
  },
  {
    key: "clayTranslocationIndex",
    label: "Clay Translocation",
    description: "Potential for downward movement of clay particles."
  },
  {
    key: "redoxIndex",
    label: "Redox conditions",
    description: "Potential for reducing conditions and redoximorphic processes."
  },
  {
    key: "organicMatterAccumulation",
    label: "Organic matter accumulation",
    description: "Relative potential for organic matter accumulation."
  },
  {
    key: "erosionIndex",
    label: "Erosion",
    description: "Relative potential for soil removal."
  },
  {
    key: "depositionIndex",
    label: "Deposition",
    description: "Relative potential for sediment accumulation."
  }
];

export default function ProcessPanel({ drivers }: ProcessPanelProps) {
  return (
    <section style={{
      marginTop: "28px",
      padding: "24px",
      background: "#F5F2EB",
      borderRadius: "12px",
      color: "#29251F"
    }}>

      <h2 style={{ marginTop: 0 }}>Pedogenic Processes</h2>

      <p style={{ color: "#666", fontSize: "14px" }}>
        Explore the environmental controls influencing soil development.
      </p>

      {/* Pedogenic driver indices */}

      <h3>Pedogenic Driver Indices</h3>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "18px"
      }}>

        {driverLabels.map(driver => {
          const value = drivers[driver.key];

          return (
            <div key={driver.key} style={{
              background: "white",
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #DDD5C9"
            }}>

              <div style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "8px"
              }}>
                <strong>{driver.label}</strong>
                <strong>{value.toFixed(2)}</strong>
              </div>

              <div style={{
                height: "10px",
                background: "#E4DED3",
                borderRadius: "5px",
                overflow: "hidden",
                marginTop: "10px"
              }}>
                <div style={{
                  height: "100%",
                  width: `${value * 100}%`,
                  background: "#64865B",
                  borderRadius: "5px"
                }} />
              </div>

              <p style={{
                fontSize: "12px",
                color: "#777",
                marginBottom: 0
              }}>
                {driver.description}
              </p>
            </div>
          );
        })}

      </div>

      {/* Dominant processes */}

      <div style={{ marginTop: "28px" }}>
        <h3>Dominant Processes</h3>

        {drivers.dominantProcesses.length > 0 ? (
          <ul>
            {drivers.dominantProcesses.map((process, index) => (
              <li key={index}>{process}</li>
            ))}
          </ul>
        ) : (
          <p>No strongly expressed pedogenic processes were identified.</p>
        )}
      </div>

      {/* Environmental explanations */}

      <div style={{ marginTop: "24px" }}>
        <h3>Environmental Controls</h3>

        {drivers.explanations.map((explanation, index) => (
          <p key={index} style={{
            padding: "10px 14px",
            background: "white",
            borderLeft: "3px solid #64865B",
            borderRadius: "4px",
            fontSize: "14px",
            lineHeight: 1.5
          }}>
            {explanation}
          </p>
        ))}
      </div>

      <p style={{
        fontSize: "12px",
        color: "#777",
        marginTop: "20px"
      }}>
        Note: Indices range from 0 to 1 and represent conceptual,
        rule-based relative potentials. They are not measured rates
        or calibrated field predictions.
      </p>

    </section>
  );
}
