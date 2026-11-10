import { Link } from "react-router-dom";

const processGroups = [
  {
    category: "Fundamental soil-forming processes",
    introduction:
      "All soil development involves the addition, loss, transformation, and translocation of materials. These fundamental processes provide a framework for understanding more specific pedogenic processes.",
    processes: [
      {
        name: "Additions",
        description:
          "Materials enter the soil system from external sources, including organic matter, atmospheric deposition, sediment, and dissolved substances in irrigation or floodwater.",
        mechanisms: [
          "Accumulation of plant residues and organic matter",
          "Deposition of windblown dust and sediments",
          "Inputs of nutrients and dissolved ions through water",
        ],
        features:
          "Organic-rich surface horizons, buried sediment layers, or accumulation of externally supplied materials.",
      },
      {
        name: "Losses",
        description:
          "Materials are removed from the soil through processes such as leaching, erosion, gaseous emissions, and crop harvest.",
        mechanisms: [
          "Leaching of dissolved ions and organic compounds",
          "Removal of soil particles through erosion",
          "Loss of carbon and nitrogen through gaseous emissions",
        ],
        features:
          "Depletion of soluble constituents, surface soil thinning, or declining nutrient stocks.",
      },
      {
        name: "Transformations",
        description:
          "Materials are chemically, physically, or biologically altered within the soil. Mineral weathering, organic matter decomposition, and mineral formation are important examples.",
        mechanisms: [
          "Weathering of primary minerals",
          "Formation of secondary clay minerals and Fe/Al oxides",
          "Decomposition and humification of organic matter",
          "Microbial transformations of carbon, nitrogen, and phosphorus",
        ],
        features:
          "Formation of secondary minerals, changes in mineral composition, and development of soil structure and color.",
      },
      {
        name: "Translocations",
        description:
          "Materials move from one part of the soil profile to another, vertically or laterally, through water movement, biological activity, or physical transport.",
        mechanisms: [
          "Movement of clay particles and dissolved substances",
          "Transport of dissolved organic matter and metal complexes",
          "Biological mixing by roots and soil fauna",
        ],
        features:
          "Differentiation of horizons and accumulation or depletion of materials at different depths.",
      },
    ],
  },
  {
    category: "Major specific pedogenic processes",
    introduction:
      "Specific pedogenic processes describe recognizable combinations of mechanisms and environmental conditions. Several can occur simultaneously in the same soil profile.",
    processes: [
      {
        name: "Melanization",
        description:
          "Development of dark-colored mineral surface horizons through the incorporation and stabilization of organic matter.",
        mechanisms: [
          "Addition of organic residues from vegetation",
          "Mixing of organic matter with mineral soil",
          "Association of organic compounds with mineral surfaces",
        ],
        features:
          "Dark A horizons, commonly associated with grassland soils and Mollisols.",
      },
      {
        name: "Eluviation and illuviation",
        description:
          "Eluviation is the removal of materials from a soil horizon, while illuviation is their accumulation in another horizon. The two processes are often linked by downward water movement.",
        mechanisms: [
          "Dispersion and transport of clay particles",
          "Leaching of dissolved organic compounds and Fe or Al",
          "Deposition or precipitation of transported materials",
        ],
        features:
          "E horizons may show depletion of clay, iron, or organic matter; Bt horizons may show clay accumulation and clay films.",
      },
      {
        name: "Lessivage (argilluviation)",
        description:
          "Downward translocation of dispersed clay particles from upper horizons and their accumulation in subsurface horizons.",
        mechanisms: [
          "Dispersion of clay particles",
          "Transport through soil pores and cracks",
          "Deposition of clay on ped surfaces and pore walls",
        ],
        features:
          "Clay-enriched Bt horizons and oriented clay coatings, commonly associated with Alfisols and some Ultisols.",
      },
      {
        name: "Podzolization",
        description:
          "Translocation of dissolved organic compounds and associated iron and aluminum from upper horizons, followed by accumulation in subsurface horizons.",
        mechanisms: [
          "Production of soluble organic compounds during litter decomposition",
          "Mobilization and transport of Fe and Al, often associated with organic ligands",
          "Accumulation of organic matter and Fe/Al in spodic horizons",
        ],
        features:
          "A bleached E horizon over a spodic B horizon, characteristic of Spodosols.",
      },
      {
        name: "Calcification and decalcification",
        description:
          "Calcification involves the accumulation of secondary calcium carbonate, whereas decalcification involves carbonate dissolution and removal.",
        mechanisms: [
          "Dissolution of carbonate minerals in soil water",
          "Transport of dissolved calcium and bicarbonate",
          "Precipitation of secondary calcium carbonate during drying or changes in soil CO2 conditions",
        ],
        features:
          "Carbonate accumulation in calcic horizons, nodules, or filaments; common in many dryland soils.",
      },
      {
        name: "Gypsification",
        description:
          "Accumulation of secondary gypsum (calcium sulfate dihydrate) in soil horizons, commonly under arid or semiarid conditions.",
        mechanisms: [
          "Dissolution and transport of calcium and sulfate",
          "Evapoconcentration of soil solutions",
          "Precipitation of gypsum where solution conditions favor saturation",
        ],
        features:
          "Gypsum crystals, nodules, or gypsic horizons.",
      },
      {
        name: "Gleization (gleying)",
        description:
          "Development of soil features under prolonged or recurrent reducing conditions, commonly associated with water saturation and restricted oxygen diffusion.",
        mechanisms: [
          "Microbial consumption of oxygen under saturated conditions",
          "Reduction and mobilization of iron and manganese",
          "Redistribution and reoxidation of iron following changes in water conditions",
        ],
        features:
          "Gray or bluish low-chroma colors and, where redox cycling occurs, reddish or yellowish mottles and concentrations.",
      },
      {
        name: "Ferralitization (laterization)",
        description:
          "Intense chemical weathering and leaching under warm, humid conditions, resulting in relative enrichment of iron and aluminum oxides.",
        mechanisms: [
          "Weathering of primary silicate minerals",
          "Strong leaching of silica and base cations",
          "Formation and accumulation of Fe and Al oxides and hydroxides",
        ],
        features:
          "Highly weathered, oxide-rich subsurface horizons, often associated with Ferralsols and Oxisols.",
      },
      {
        name: "Salinization and sodication",
        description:
          "Salinization involves the accumulation of soluble salts, whereas sodication involves an increase in exchangeable sodium on soil exchange sites.",
        mechanisms: [
          "Evaporation and evapotranspiration concentrating dissolved salts",
          "Poor drainage and upward movement of saline groundwater",
          "Accumulation of exchangeable sodium under suitable chemical conditions",
        ],
        features:
          "Salic horizons or salt crusts in saline soils; sodic soils may show dispersion, poor structure, and reduced infiltration.",
      },
      {
        name: "Melanization, humification, and organic matter accumulation",
        description:
          "Organic matter decomposition and transformation produce a range of compounds and associations that influence soil color, aggregation, nutrient cycling, and carbon storage.",
        mechanisms: [
          "Microbial decomposition of plant and animal residues",
          "Formation and transformation of microbial products",
          "Association of organic matter with minerals and aggregates",
        ],
        features:
          "Organic-rich surface horizons and changes in soil carbon distribution and stabilization.",
      },
    ],
  },
];

export default function PedogenicProcessesPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "30px 20px",
        color: "#303830",
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
          Major Pedogenic Processes: How Soils Develop
        </h1>

        <p style={{ fontSize: "18px", color: "#7f997f" }}>
          Soil horizons develop through the combined effects of
          physical, chemical, and biological processes. Explore
          how materials enter, leave, transform within, and move
          through soil profiles.
        </p>
      </header>

      <section style={{ marginBottom: "42px" }}>
        <h2 style={{ color: "#4e8f5a", fontSize: "25px" }}>
          How do pedogenic processes form soil horizons?
        </h2>

        <p style={{ fontSize: "18px", color: "#7f997f" }}>
          Pedogenesis is the development of soil through interactions
          among environmental factors and soil-forming processes.
          These processes alter the composition, structure, and
          organization of materials within a soil profile.
        </p>

        <p style={{ fontSize: "18px", color: "#7f997f" }}>
          A useful starting point is to distinguish four fundamental
          processes: additions, losses, transformations, and
          translocations. Specific processes such as podzolization,
          lessivage, and calcification involve combinations of these
          fundamental mechanisms.
        </p>
      </section>

      {processGroups.map((group, groupIndex) => (
        <section key={group.category} style={{ marginBottom: "48px" }}>
          <h2
            style={{
              color: "#4e8f5a",
              fontSize: "26px",
              borderBottom: "2px solid #DCE5D8",
              paddingBottom: "10px",
            }}
          >
            {groupIndex + 1}. {group.category}
          </h2>

          <p style={{ color: "#7f997f" }}>{group.introduction}</p>

          <div style={{ display: "grid", gap: "18px", marginTop: "22px" }}>
            {group.processes.map((process, index) => (
              <article
                key={process.name}
                style={{
                  border: "1px solid #DCE5D8",
                  borderRadius: "10px",
                  padding: "22px",
                  background: "#fafff8",
                  boxShadow: "0 2px 8px rgba(40, 70, 40, 0.05)",
                }}
              >
                <h3
                  style={{
                    color: "#315B38",
                    fontSize: "21px",
                    marginTop: 0,
                    marginBottom: "10px",
                  }}
                >
                  {index + 1}. {process.name}
                </h3>

                <p>{process.description}</p>

                <strong style={{ color: "#426B45" }}>
                  Main mechanisms:
                </strong>

                <ul style={{ paddingLeft: "22px" }}>
                  {process.mechanisms.map((mechanism) => (
                    <li key={mechanism}>{mechanism}</li>
                  ))}
                </ul>

                <div
                  style={{
                    background: "#e7eee3",
                    padding: "13px 16px",
                    borderRadius: "7px",
                  }}
                >
                  <strong style={{ color: "#315B38" }}>
                    Typical soil features:
                  </strong>
                  <p style={{ margin: "5px 0 0" }}>{process.features}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section style={{ marginBottom: "42px" }}>
        <h2 style={{ color: "#4e8f5a", fontSize: "25px" }}>
          Connecting processes to soil horizons
        </h2>

        <p style={{ fontSize: "18px", color: "#7f997f" }}>
          Soil horizons are the observable results of multiple
          pedogenic processes. For example, an E horizon may reflect
          eluviation, while a Bt horizon may indicate clay
          illuviation. A spodic horizon reflects the accumulation
          of organic matter and iron and aluminum compounds.
        </p>

        <p style={{ fontSize: "18px", color: "#7f997f" }}>
          However, horizon characteristics are not always produced
          by a single process. Multiple mechanisms may operate
          together, and similar features can sometimes have
          different origins. Interpretation therefore requires
          considering the entire soil profile and its environmental
          setting.
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
          Explore pedogenesis through simulation
        </h2>

        <p>
          Experiment with different combinations of climate,
          organisms, relief, parent material, and time. Observe
          how the simulator represents changes in soil horizons
          and pedogenic processes.
        </p>

        <Link
          to="/"
          style={{
            display: "inline-block",
            background: "#4e8f5a",
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
