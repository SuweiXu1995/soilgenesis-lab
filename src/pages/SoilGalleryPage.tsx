
import { Link } from "react-router-dom";

interface SoilExample {
  name: string;
  environment: string;
  description: string;
  processes: string[];
  horizons: string;
  climate: string;
  organisms: string;
  relief: string;
  parentMaterial: string;
  timeYears: number;
  accent: string;
}

const examples: SoilExample[] = [
  {
    name: "Mollisol",
    environment: "Prairie grassland",
    description:
      "Grassland ecosystems promote substantial root biomass and organic matter incorporation, favoring the development of a dark, organic-rich surface horizon.",
    processes: ["Melanization", "Bioturbation", "Base cycling"],
    horizons: "A – AB – Bw – C",
    climate: "cool humid continental",
    organisms: "grassland",
    relief: "summit",
    parentMaterial: "loess",
    timeYears: 100000,
    accent: "#6B4932"
  },
  {
    name: "Alfisol",
    environment: "Temperate deciduous forest",
    description:
      "Moderate to strong leaching and clay translocation can produce an argillic horizon beneath an eluvial or surface horizon.",
    processes: ["Lessivage", "Eluviation", "Clay illuviation"],
    horizons: "A – E – Bt – C",
    climate: "temperate humid",
    organisms: "deciduous forest",
    relief: "summit",
    parentMaterial: "loess",
    timeYears: 100000,
    accent: "#8B6847"
  },
  {
    name: "Spodosol",
    environment: "Cool humid coniferous forest",
    description:
      "Acidic forest litter and organic ligands promote the mobilization and downward translocation of organic matter and Al, with Fe also involved in many profiles.",
    processes: ["Podzolization", "Eluviation", "Spodic accumulation"],
    horizons: "O – E – Bh/Bs – C",
    climate: "cool humid continental",
    organisms: "coniferous forest",
    relief: "summit",
    parentMaterial: "glacial till",
    timeYears: 100000,
    accent: "#76513C"
  },
  {
    name: "Oxisol",
    environment: "Tropical rainforest",
    description:
      "Long-term warm, humid conditions favor intense mineral weathering, desilication, and residual accumulation of Fe and Al oxides.",
    processes: ["Ferralitization", "Desilication", "Oxide accumulation"],
    horizons: "A – Bo – C",
    climate: "humid tropical",
    organisms: "tropical rainforest",
    relief: "summit",
    parentMaterial: "basalt",
    timeYears: 1000000,
    accent: "#A64F32"
  },
  {
    name: "Aridisol",
    environment: "Semiarid shrubland",
    description:
      "Limited effective leaching and high evapotranspiration can promote secondary carbonate accumulation and other salt-related features.",
    processes: ["Calcification", "Salinization", "Limited leaching"],
    horizons: "A – Bk – C",
    climate: "arid/semi-arid",
    organisms: "shrubland",
    relief: "footslope",
    parentMaterial: "alluvium",
    timeYears: 100000,
    accent: "#B58A4D"
  },
  {
    name: "Histosol",
    environment: "Organic-rich wetland",
    description:
      "Persistent saturation slows aerobic decomposition and allows organic soil materials to accumulate over time.",
    processes: ["Paludization", "Organic matter accumulation", "Gleying"],
    horizons: "Oa – Oe – Oi – C",
    climate: "wetland/poorly drained",
    organisms: "wetland vegetation",
    relief: "depression",
    parentMaterial: "alluvium",
    timeYears: 10000,
    accent: "#536B50"
  }
];

function getSimulatorUrl(example: SoilExample) {
  const params = new URLSearchParams({
    climate: example.climate,
    organisms: example.organisms,
    relief: example.relief,
    parentMaterial: example.parentMaterial,
    timeYears: String(example.timeYears)
  });

  return `/?${params.toString()}`;
}

export default function SoilGalleryPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "30px 20px",
        fontFamily: "Arial, sans-serif",
        color: "#29251F"
      }}
    >
<header style={{ marginBottom: "30px" }}>
  <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
    SoilGenesis Lab
  </h1>

  <p style={{ color: "#a4b2a1", fontSize: "16px" }}>
    Explore how climate, organisms, relief, parent material, and time
    interact to shape soil formation.
  </p>

        <nav
          aria-label="Main navigation"
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "18px",
            borderBottom: "1px solid #DCE5D8",
            paddingBottom: "12px"
          }}
        >
          <Link to="/" style={{ color: "#4e8f5a", fontWeight: 700, textDecoration: "none" }}>Simulator</Link>
          <Link to="/learn/clorpt" style={{ color: "#4e8f5a", fontWeight: 700, textDecoration: "none" }}>Learn CLORPT</Link>
          <Link to="/learn/pedogenic-processes" style={{ color: "#4e8f5a", fontWeight: 700, textDecoration: "none" }}>
            Pedogenic Processes
          </Link>
          <Link to="/learn/soil-gallery" style={{ color: "#4e8f5a", fontWeight: 700, textDecoration: "none" }}>
            Soil Profile Gallery
          </Link>
        </nav>
      </header>

      <header style={{ marginBottom: "40px" }}>
        <p
          style={{
            color: "#62815C",
            fontWeight: 700,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            fontSize: "13px",
          }}
        >
          Soil Science Learning Center
        </p>

        <h1
          style={{
            fontSize: "clamp(30px, 5vw, 44px)",
            lineHeight: 1.2,
            color: "#4e8f5a",
            marginBottom: "20px",
          }}
        >
          Soil Profile Gallery
        </h1>

        <p style={{ fontSize: "18px", color: "#7f997f" }}>
          Explore how different soil-forming environments influence
          soil profile development. Compare representative soil
          environments, their dominant pedogenic processes, and
          expected horizon sequences.
        </p>
      </header>

      <section
        style={{
          background: "#F3F5EF",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "28px",
          lineHeight: 1.7
        }}
      >
        <h2 style={{ marginTop: 0, color: "#426B45" }}>
          Six Representative Soil Environments
        </h2>

        <p>
          Each example illustrates a characteristic combination
          of climate, organisms, relief, parent material, and time.
          Select an environment to explore its corresponding
          simulation.
        </p>
      </section>

      <section
        aria-label="Representative soil profiles"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          gap: "22px"
        }}
      >
        {examples.map((example) => (
          <article
            key={example.name}
            style={{
              border: "1px solid #E0E4DC",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#FFFFFF",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
            }}
          >
            <div
              style={{
                height: "8px",
                background: example.accent
              }}
            />

            <div style={{ padding: "22px" }}>
              <p
                style={{
                  color: example.accent,
                  fontWeight: "bold",
                  fontSize: "13px",
                  margin: "0 0 8px"
                }}
              >
                {example.environment.toUpperCase()}
              </p>

              <h2 style={{ color: example.accent, margin: "0 0 12px", fontSize: "23px" }}>
                {example.name}
              </h2>

              <p style={{ lineHeight: 1.65, color: "#596258" }}>
                {example.description}
              </p>

              <h3 style={sectionHeadingStyle}>Representative horizons</h3>
              <p
                style={{
                  background: "#F5F3ED",
                  padding: "10px",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  letterSpacing: "1px"
                }}
              >
                {example.horizons}
              </p>

              <h3 style={sectionHeadingStyle}>Dominant processes</h3>
              <ul style={{ paddingLeft: "20px", lineHeight: 1.8 }}>
                {example.processes.map((process) => (
                  <li key={process}>{process}</li>
                ))}
              </ul>

              <h3 style={sectionHeadingStyle}>CLORPT settings</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.8 }}>
                <strong>Climate:</strong> {example.climate}<br />
                <strong>Organisms:</strong> {example.organisms}<br />
                <strong>Relief:</strong> {example.relief}<br />
                <strong>Parent material:</strong> {example.parentMaterial}<br />
                <strong>Time:</strong> {example.timeYears.toLocaleString()} years
              </p>

              <Link
                to={getSimulatorUrl(example)}
                style={{
                  display: "block",
                  marginTop: "20px",
                  padding: "12px",
                  background: "#426B45",
                  color: "#FFFFFF",
                  textAlign: "center",
                  textDecoration: "none",
                  borderRadius: "6px",
                  fontWeight: "bold"
                }}
              >
                Load into Simulator →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section
        style={{
          marginTop: "30px",
          padding: "20px",
          background: "#F7F5F0",
          borderRadius: "10px",
          lineHeight: 1.7,
          color: "#596258"
        }}
      >
        <h2 style={{ color: "#426B45", marginTop: 0 }}>
          An Important Scientific Note
        </h2>

        <p>
          These examples are conceptual teaching scenarios. Soil
          classification depends on diagnostic horizons, properties,
          and classification criteria, not simply on environmental
          settings. The horizon sequences shown are representative
          possibilities rather than guaranteed outcomes of the
          simulator.
        </p>
      </section>

      <footer
        style={{
          marginTop: "30px",
          padding: "16px",
          borderTop: "1px solid #DDD",
          color: "#777",
          fontSize: "13px"
        }}
      >
        SoilGenesis Lab — Interactive exploration of soil formation.
      </footer>
    </main>
  );
}

const sectionHeadingStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#426B45",
  marginTop: "20px",
  marginBottom: "8px"
};
