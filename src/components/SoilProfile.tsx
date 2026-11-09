
import { useState } from "react";
import type { CSSProperties } from "react";
import type { SoilHorizon } from "../engine/types";

interface SoilProfileProps {
  horizons: SoilHorizon[];
}

const horizonStyles: Record<string, CSSProperties> = {
  O: {
    background: "linear-gradient(90deg, #302019, #493024, #38251D)"
  },
  A: {
    background: "linear-gradient(90deg, #513727, #79543A, #60432E)"
  },
  E: {
    background: "linear-gradient(90deg, #B5A58A, #D5C6A8, #C1B18F)"
  },
  Bw: {
    background: "linear-gradient(90deg, #765037, #A07850, #896344)"
  },
  Bt: {
    background: "linear-gradient(90deg, #683C2A, #965D3F, #794832)"
  },
  Bg: {
    background: "linear-gradient(90deg, #686B64, #89877A, #74766C)"
  },
  Bk: {
    background: "linear-gradient(90deg, #9E8059, #C4A77B, #AE9067)"
  },
  C: {
    background: "linear-gradient(90deg, #A78A66, #D0B28A, #B99B73)"
  }
};

export default function SoilProfile({ horizons }: SoilProfileProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedHorizon =
    horizons[selectedIndex] ?? horizons[0] ?? null;

  if (horizons.length === 0) {
    return <p>No soil horizons have been generated yet.</p>;
  }

  const totalDepth = Math.max(
    ...horizons.map(h => h.bottomCm),
    1
  );

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "30px",
      padding: "24px",
      background: "#F5F2EB",
      borderRadius: "12px",
      color: "#29251F"
    }}>

      {/* Soil profile */}

      <div>
        <h2>Soil Profile</h2>

        <p style={{ color: "#666", fontSize: "13px" }}>
          Select a horizon to explore its properties.
        </p>

        <div style={{
          display: "flex",
          alignItems: "stretch",
          gap: "8px",
          maxWidth: "340px"
        }}>

          {/* Depth scale */}

          <div style={{
            width: "42px",
            height: "360px",
            position: "relative",
            fontSize: "11px",
            color: "#62594D"
          }}>
            {Array.from(
              { length: Math.floor(totalDepth / 10) + 1 },
              (_, i) => i * 10
            ).map(depth => (
              <div
                key={depth}
                style={{
                  position: "absolute",
                  top: `${(depth / totalDepth) * 360}px`,
                  right: 0,
                  transform: "translateY(-50%)",
                  borderTop: "1px solid #8C8172",
                  width: "100%",
                  textAlign: "right",
                  paddingTop: "2px"
                }}
              >
                {depth}
              </div>
            ))}
            <span style={{
              position: "absolute",
              bottom: "-20px",
              right: 0
            }}>
              cm
            </span>
          </div>

          {/* Soil column */}

          <div style={{
            flex: 1,
            height: "360px",
            display: "flex",
            flexDirection: "column",
            border: "2px solid #594735",
            borderRadius: "4px",
            overflow: "hidden",
            background: "#D0B28A"
          }}>

            {/* Ground surface */}

            <div style={{
              height: "12px",
              flexShrink: 0,
              background: "linear-gradient(#536B38, #89945B)",
              borderBottom: "2px solid #594735"
            }} />

            {horizons.map((horizon, index) => {
              const thickness =
                horizon.bottomCm - horizon.topCm;

              const isSelected = selectedIndex === index;

              return (
                <button
                  key={`${horizon.name}-${horizon.topCm}-${index}`}
                  onClick={() => setSelectedIndex(index)}
                  aria-pressed={isSelected}
                  title={`Inspect ${horizon.name} horizon`}
                  style={{
                    flex: `${thickness} 1 0`,
                    minHeight: "25px",
                    ...horizonStyles[horizon.name],
                    color: horizon.name === "E" || horizon.name === "C"
                      ? "#33291E"
                      : "#FFFFFF",
                    border: "none",
                    borderBottom: "1px solid rgba(60,40,20,0.3)",
                    outline: isSelected
                      ? "3px solid #F5C542"
                      : "none",
                    outlineOffset: "-3px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "6px 10px",
                    fontSize: "15px",
                    fontWeight: "bold",
                    textShadow: horizon.name === "E" || horizon.name === "C"
                      ? "none"
                      : "0 1px 2px rgba(0,0,0,0.4)"
                  }}
                >
                  <span>{horizon.name}</span>
                  <span style={{ fontSize: "11px", fontWeight: "normal" }}>
                    {horizon.topCm}–{horizon.bottomCm}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <p style={{
          fontSize: "12px",
          color: "#666",
          marginTop: "28px"
        }}>
          Total profile depth: {totalDepth} cm
        </p>
      </div>

      {/* Horizon explorer */}

      <div>
        <h2>Horizon Explorer</h2>

        {selectedHorizon && (
          <div style={{
            background: "#FFFFFF",
            borderRadius: "8px",
            padding: "18px",
            border: "1px solid #DDD5C9"
          }}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>
              {selectedHorizon.name} Horizon
            </h3>

            <p>
              <strong>Depth:</strong>{" "}
              {selectedHorizon.topCm}–{selectedHorizon.bottomCm} cm
            </p>

            <p><strong>Texture:</strong> {selectedHorizon.texture}</p>
            <p><strong>Clay:</strong> {selectedHorizon.clayPercent.toFixed(1)}%</p>
            <p><strong>pH:</strong> {selectedHorizon.pH.toFixed(2)}</p>
            <p>
              <strong>Organic carbon:</strong>{" "}
              {selectedHorizon.organicCarbon.toFixed(2)}%
            </p>
            <p><strong>Structure:</strong> {selectedHorizon.structure}</p>
            <p><strong>Color:</strong> {selectedHorizon.color}</p>

            <div>
              <strong>Mineralogy:</strong>
              {selectedHorizon.mineralogy.length > 0 ? (
                <ul>
                  {selectedHorizon.mineralogy.map((mineral, index) => (
                    <li key={index}>{mineral}</li>
                  ))}
                </ul>
              ) : (
                <p>No mineral inventory specified.</p>
              )}
            </div>

            <div>
              <strong>Pedogenic processes:</strong>
              <ul>
                {selectedHorizon.processes.map((process, index) => (
                  <li key={index}>{process}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
