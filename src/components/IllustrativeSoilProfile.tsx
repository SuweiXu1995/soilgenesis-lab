
import { useState } from "react";

interface IllustrativeHorizon {
  name: string;
  description: string;
  thickness: number;
  color: string;
  textColor?: string;
}

interface IllustrativeSoilProfileProps {
  horizons: IllustrativeHorizon[];
}

export default function IllustrativeSoilProfile({
  horizons
}: IllustrativeSoilProfileProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selected = horizons[selectedIndex] ?? horizons[0];

  if (horizons.length === 0) {
    return <p>No illustrative horizons available.</p>;
  }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "minmax(90px, 0.75fr) minmax(110px, 1.25fr)",
      gap: "14px",
      alignItems: "stretch"
    }}>
      {/* Illustrative soil column */}

      <div>
        <div style={{
          height: "12px",
          background: "linear-gradient(#536B38, #89945B)",
          border: "1px solid #594735"
        }} />

        <div style={{
          height: "280px",
          display: "flex",
          flexDirection: "column",
          border: "2px solid #594735",
          overflow: "hidden"
        }}>
          {horizons.map((horizon, index) => (
            <button
              key={`${horizon.name}-${index}`}
              onClick={() => setSelectedIndex(index)}
              aria-pressed={selectedIndex === index}
              title={`Explore ${horizon.name} horizon`}
              style={{
                flex: horizon.thickness,
                minHeight: "28px",
                background: horizon.color,
                color: horizon.textColor ?? "#FFFFFF",
                border: "none",
                borderBottom: "1px solid rgba(50,35,20,0.3)",
                outline: selectedIndex === index
                  ? "3px solid #F5C542"
                  : "none",
                outlineOffset: "-3px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "bold"
              }}
            >
              {horizon.name}
            </button>
          ))}
        </div>
      </div>

      {/* Selected horizon description */}

      <div style={{
        background: "#F5F2EB",
        padding: "12px",
        borderRadius: "7px",
        minWidth: 0
      }}>
        {selected && (
          <>
            <h3 style={{
              marginTop: 0,
              fontSize: "20px",
              color: "#426B45"
            }}>
              {selected.name} Horizon
            </h3>

            <p style={{
              fontSize: "13px",
              lineHeight: 1.6,
              color: "#596258"
            }}>
              {selected.description}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
