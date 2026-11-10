import ComparisonPanel from "./components/ComparisonPanel";
import { useState } from "react";
import { Link } from "react-router-dom";
import SoilProfile from "./components/SoilProfile";
import ProcessPanel from "./components/ProcessPanel";

import type { ClorptInputs, SoilHorizon } from "./engine/types";
import type { PedogenicDrivers } from "./engine/soilFormation";

import { calculatePedogenicDrivers } from "./engine/soilFormation";
import { generateSoilHorizons } from "./engine/horizons";

const defaultInputs: ClorptInputs = {
  climate: "temperate humid",
  organisms: "deciduous forest",
  relief: "summit",
  parentMaterial: "loess",
  timeYears: 100000
};

const initialDrivers = calculatePedogenicDrivers(defaultInputs);

export default function App() {
  const [inputs, setInputs] = useState<ClorptInputs>(defaultInputs);
  const [generatedInputs, setGeneratedInputs] =
  useState<ClorptInputs>(defaultInputs);

  const [drivers, setDrivers] =
    useState<PedogenicDrivers>(initialDrivers);

  const [horizons, setHorizons] = useState<SoilHorizon[]>(() => {
    return generateSoilHorizons(defaultInputs, initialDrivers);
  });

  const [error, setError] = useState("");

  function updateInput<K extends keyof ClorptInputs>(
    key: K,
    value: ClorptInputs[K]
  ) {
    setInputs(previous => ({
      ...previous,
      [key]: value
    }));
  }

  function handleGenerate() {
    try {
      setError("");

      const newDrivers = calculatePedogenicDrivers(inputs);
      const newHorizons = generateSoilHorizons(inputs, newDrivers);

      setGeneratedInputs({ ...inputs });
      setDrivers(newDrivers);
      setHorizons(newHorizons);

    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
    }
  }

  return (
    <main style={{
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "30px 20px",
      fontFamily: "Arial, sans-serif",
      color: "#29251F"
    }}>

      
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
        fontWeight: 600,
        textDecoration: "none"
      }}
    >
      Learn CLORPT
    </Link>
  </nav>
</header>


      {/* Educational introduction for visitors and search engines */}
      <section
        aria-labelledby="soil-genesis-introduction"
        style={{
          marginBottom: "28px",
          lineHeight: "1.7",
          color: "#a4b2a1"
        }}
      >
        <h2
          id="soil-genesis-introduction"
          style={{
            fontSize: "23px",
            color: "#4e8f5a",
            marginBottom: "12px"
          }}
        >
          Explore the Science of Soil Formation
        </h2>

        <p>
          SoilGenesis Lab is an interactive soil formation simulator
          designed to explore the processes of soil genesis and
          pedogenesis through the five soil-forming factors described
          by the CLORPT model: climate, organisms, relief, parent
          material, and time.
        </p>

        <p>
          Experiment with different environmental conditions to
          investigate how soil-forming factors interact to influence
          weathering, organic matter accumulation, translocation,
          horizon differentiation, and soil profile development.
        </p>

        <p>
          Whether you are a soil science student, educator, or
          researcher, SoilGenesis Lab provides an interactive
          educational environment for understanding soil genesis,
          pedogenic processes, and the development of diverse soil
          profiles.
        </p>
      </section>

      <section style={{
        background: "#F7F5F0",
        color: "#4a5348",
        padding: "24px",
        borderRadius: "12px",
        marginBottom: "28px"
      }}>

        <h2 style={{ marginTop: 0 }}>Define Your Environment</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "18px"
        }}>

          <label>
            <strong>Climate</strong>
            <select
              value={inputs.climate}
              onChange={e => updateInput("climate", e.target.value)}
              style={selectStyle}
            >
              <option value="humid tropical">Humid tropical</option>
              <option value="temperate humid">Temperate humid</option>
              <option value="cool humid continental">Cool humid continental</option>
              <option value="arid/semi-arid">Arid / semi-arid</option>
              <option value="wetland/poorly drained">Wetland / poorly drained</option>
              <option value="cool humid volcanic upland">Cool humid volcanic upland</option>
            </select>
          </label>

          <label>
            <strong>Organisms / Vegetation</strong>
            <select
              value={inputs.organisms}
              onChange={e => updateInput("organisms", e.target.value)}
              style={selectStyle}
            >
              <option value="deciduous forest">Deciduous forest</option>
              <option value="grassland">Grassland</option>
              <option value="coniferous forest">Coniferous forest</option>
              <option value="tropical rainforest">Tropical rainforest</option>
              <option value="shrubland">Shrubland</option>
              <option value="wetland vegetation">Wetland vegetation</option>
              <option value="cultivated cropland">Cultivated cropland</option>
            </select>
          </label>

          <label>
            <strong>Relief / Topography</strong>
            <select
              value={inputs.relief}
              onChange={e => updateInput("relief", e.target.value)}
              style={selectStyle}
            >
              <option value="summit">Summit</option>
              <option value="backslope">Backslope</option>
              <option value="footslope">Footslope</option>
              <option value="depression">Depression</option>
              <option value="alluvial terrace">Alluvial terrace</option>
            </select>
          </label>

          <label>
            <strong>Parent Material</strong>
            <select
              value={inputs.parentMaterial}
              onChange={e => updateInput("parentMaterial", e.target.value)}
              style={selectStyle}
            >
              <option value="andesite">Andesite</option>
              <option value="basalt">Basalt</option>
              <option value="granite">Granite</option>
              <option value="loess">Loess</option>
              <option value="alluvium">Alluvium</option>
              <option value="volcanic ash">Volcanic ash</option>
              <option value="glacial till">Glacial till</option>
            </select>
          </label>

          <label>
            <strong>Soil Formation Time</strong>
            <select
              value={inputs.timeYears}
              onChange={e => updateInput("timeYears", Number(e.target.value))}
              style={selectStyle}
            >
              <option value={1000}>1,000 years</option>
              <option value={10000}>10,000 years</option>
              <option value={100000}>100,000 years</option>
              <option value={1000000}>1 million years</option>
              <option value={10000000}>10 million years</option>
            </select>
          </label>

        </div>

        <button
          onClick={handleGenerate}
          style={{
            marginTop: "24px",
            padding: "12px 24px",
            background: "#426B45",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Generate Soil
        </button>

        {error && (
          <p style={{ color: "red", marginTop: "12px" }}>
            {error}
          </p>
        )}

      </section>

      <SoilProfile horizons={horizons} />

      <ProcessPanel drivers={drivers} />
      <ComparisonPanel
  inputs={generatedInputs}
  drivers={drivers}
  horizons={horizons}
/>

      <footer style={{
        marginTop: "30px",
        padding: "16px",
        borderTop: "1px solid #DDD",
        color: "#777",
        fontSize: "13px"
      }}>
        Educational simulation only. Generated soil properties are
        illustrative estimates, not validated field predictions.
      </footer>

    </main>
  );
}

const selectStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "10px",
  marginTop: "8px",
  border: "1px solid #CCC",
  borderRadius: "6px",
  background: "white",
  fontSize: "14px",
  color: "#29251F",
  backgroundColor: "#FFFFFF"
};
