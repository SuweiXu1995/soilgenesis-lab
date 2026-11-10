
import { Link } from "react-router-dom";

const factors = [
  {
    letter: "CL",
    name: "Climate",
    subtitle: "Temperature and precipitation",
    description:
      "Climate influences soil formation through temperature and water availability. These conditions regulate mineral weathering, leaching, biological activity, organic matter decomposition, and redox reactions.",
    examples: [
      "High precipitation can promote leaching and clay translocation.",
      "Warm temperatures generally accelerate chemical weathering.",
      "Seasonal waterlogging can create reducing conditions and gley features.",
    ],
  },
  {
    letter: "O",
    name: "Organisms",
    subtitle: "Plants, animals, microorganisms, and humans",
    description:
      "Organisms contribute organic matter, cycle nutrients, alter soil structure, and influence chemical and biological transformations. Vegetation type and microbial communities can strongly affect horizon development.",
    examples: [
      "Grassland roots contribute organic matter and promote melanization.",
      "Forest vegetation can produce acidic litter and influence podzolization.",
      "Earthworms and other soil fauna mix organic and mineral materials.",
    ],
  },
  {
    letter: "R",
    name: "Relief",
    subtitle: "Topography and landscape position",
    description:
      "Relief controls how water moves through and across a landscape. Slope, elevation, and landscape position influence drainage, erosion, deposition, and the distribution of soil moisture.",
    examples: [
      "Steep slopes commonly experience greater erosion.",
      "Depressions may accumulate water and develop hydric conditions.",
      "Lower landscape positions can receive sediment and dissolved materials.",
    ],
  },
  {
    letter: "P",
    name: "Parent material",
    subtitle: "The geological material from which soil develops",
    description:
      "Parent material provides the initial mineral and chemical composition of a developing soil. Its texture, mineralogy, and weathering characteristics influence soil properties and the pathways of pedogenesis.",
    examples: [
      "Glacial till can produce soils with diverse mineral compositions.",
      "Limestone-derived materials can contribute calcium carbonate.",
      "Sandy parent materials often have limited water and nutrient retention.",
    ],
  },
  {
    letter: "T",
    name: "Time",
    subtitle: "Duration of soil-forming processes",
    description:
      "Time represents how long soil-forming processes have operated under a particular set of environmental conditions. With time, weathering, organic matter accumulation, translocation, and other processes can produce increasingly differentiated soil horizons.",
    examples: [
      "Young soils may show limited horizon differentiation.",
      "Long-term weathering can alter primary minerals and form secondary minerals.",
      "Soil development does not necessarily proceed at a constant rate.",
    ],
  },
];

export default function ClorptPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "30px 20px 70px",
        color: "#7f997f",
        fontFamily: "Arial, sans-serif",
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
    <Link
      to="/"
      style={{
        color: "#4e8f5a",
        fontWeight: 700,
        textDecoration: "none"
      }}
    >
      Simulator
    </Link>

    <Link
      to="/learn/clorpt"
      style={{
        color: "#4e8f5a",
        fontWeight: 700,
        textDecoration: "none"
      }}
    >
      Learn CLORPT
    </Link>

    <Link
      to="/learn/pedogenic-processes"
      style={{
        color: "#4e8f5a",
        fontWeight: 700,
        textDecoration: "none"
      }}
    >
      Pedogenic Processes
    </Link>

  </nav>
</header>

      <header style={{ marginBottom: "38px" }}>
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
          Understanding Soil Formation: The CLORPT Model
        </h1>

        <p style={{ fontSize: "18px", color: "#7f997f" }}>
          Why do soils differ from one landscape to another? The CLORPT
          model provides a framework for understanding how climate,
          organisms, relief, parent material, and time interact to
          influence soil formation and development.
        </p>
      </header>

      <section style={{ marginBottom: "42px" }}>
        <h2 style={{ color: "#4e8f5a", fontSize: "25px" }}>
          What is the CLORPT model?
        </h2>

        <p>
          The CLORPT model is a conceptual framework associated with
          Hans Jenny's work on the factors of soil formation. It
          describes soil properties as a function of five major
          environmental factors: climate, organisms, relief, parent
          material, and time.
        </p>

        <p>
          The framework is often expressed as:
        </p>

        <div
          style={{
            background: "#F0F5ED",
            borderLeft: "5px solid #62815C",
            borderRadius: "6px",
            padding: "20px 24px",
            margin: "22px 0",
            textAlign: "center",
            fontSize: "22px",
            fontWeight: 700,
            color: "#315B38",
          }}
        >
          Soil = f (cl, o, r, p, t, ...)
        </div>

        <p>
          Here, soil properties are represented as a function of
          these factors and potentially other influences. CLORPT
          is a framework for understanding soil variation, not a
          simple equation that predicts every soil property.
        </p>
      </section>

      <section style={{ marginBottom: "42px" }}>
        <h2 style={{ color: "#4e8f5a", fontSize: "25px" }}>
          The five soil-forming factors
        </h2>

        <p>
          Each factor influences soil development through different
          mechanisms. In natural landscapes, these factors interact
          rather than operate independently.
        </p>

        <div style={{ display: "grid", gap: "20px", marginTop: "24px" }}>
          {factors.map((factor) => (
            <article
              key={factor.name}
              style={{
                border: "1px solid #DCE5D8",
                borderRadius: "10px",
                padding: "22px",
                background: "#fafff6",
                boxShadow: "0 2px 8px rgba(40, 70, 40, 0.05)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    flexShrink: 0,
                    borderRadius: "10px",
                    background: "#EAF1E6",
                    color: "#315B38",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: 800,
                  }}
                >
                  {factor.letter}
                </div>

                <div>
                  <h3
                    style={{
                      margin: 0,
                      color: "#315B38",
                      fontSize: "21px",
                    }}
                  >
                    {factor.name}
                  </h3>
                  <p style={{ margin: 0, color: "#718071", fontSize: "14px" }}>
                    {factor.subtitle}
                  </p>
                </div>
              </div>

              <p>{factor.description}</p>

              <strong style={{ color: "#426B45" }}>
                Examples of influence:
              </strong>

              <ul style={{ paddingLeft: "22px", marginBottom: 0 }}>
                {factor.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "42px" }}>
        <h2 style={{ color: "#4e8f5a", fontSize: "25px" }}>
          How do the five factors interact?
        </h2>

        <p>
          Consider two landscapes with the same parent material but
          different vegetation and drainage conditions. A well-drained
          upland under forest vegetation may develop differently from
          a poorly drained depression under wetland vegetation.
        </p>

        <p>
          Differences in water movement, organic matter inputs, redox
          conditions, and material transport can lead to contrasting
          soil horizons, even when the underlying geological material
          is similar.
        </p>

        <p>
          This interaction is central to pedology: soil profiles
          reflect the combined effects of environmental conditions
          and soil-forming processes over time.
        </p>
      </section>

      <section
        style={{
          background: "#F0F5ED",
          borderRadius: "12px",
          padding: "28px",
          marginTop: "45px",
        }}
      >
        <h2 style={{ color: "#315B38", marginTop: 0 }}>
          Explore CLORPT through simulation
        </h2>

        <p>
          Change climate, organisms, relief, parent material, and
          time in SoilGenesis Lab to explore how different
          environmental combinations influence simulated soil
          profiles and pedogenic processes.
        </p>

        <Link
          to="/"
          style={{
            display: "inline-block",
            background: "#426B45",
            color: "#FFFFFF",
            padding: "11px 20px",
            borderRadius: "7px",
            fontWeight: 600,
            textDecoration: "none",
            marginTop: "8px",
          }}
        >
          Open the Soil Formation Simulator →
        </Link>
      </section>

      <footer
        style={{
          marginTop: "45px",
          paddingTop: "20px",
          borderTop: "1px solid #DCE5D8",
          color: "#718071",
          fontSize: "14px",
        }}
      >
        SoilGenesis Lab · Educational resource on soil genesis and
        pedogenesis.
      </footer>
    </main>
  );
}
