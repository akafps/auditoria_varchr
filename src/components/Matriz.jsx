import { Fragment } from "react";

const vulnerabilities = [
  {
    name: "SQL Injection",
    probability: "Alta",
    impact: "Muy Alto",
    risk: "Crítico",
    color: "#8b1e1e",
  },
  {
    name: "Cross Site Scripting (XSS)",
    probability: "Media",
    impact: "Alto",
    risk: "Alto",
    color: "#7a4f0f",
  },
  {
    name: "Inyección de Comandos",
    probability: "Alta",
    impact: "Muy Alto",
    risk: "Crítico",
    color: "#8b1e1e",
  },
];

const heatmapRows = [
  { level: "Muy Alto", cells: [null, null, "SQL Injection\nCommand Injection"] },
  { level: "Alto", cells: [null, "XSS", null] },
  { level: "Medio", cells: [null, null, null] },
  { level: "Bajo", cells: [null, null, null] },
];

export default function Matriz() {
  return (
    <div className="risk-matrix">
      <div className="risk-matrix__intro">
        <h2>Matriz de Riesgo Visual</h2>
        <p>
          La siguiente vista representa, de forma visual, la relación entre la probabilidad
          de ocurrencia y el impacto potencial sobre el Hotel Costa Brava.
        </p>
      </div>

      <div className="heatmap-card">
        <div className="heatmap-card__legend">
          <span><i className="legend-dot critical" /> Riesgo crítico</span>
          <span><i className="legend-dot high" /> Riesgo alto</span>
          <span><i className="legend-dot medium" /> Riesgo medio</span>
        </div>

        <div className="heatmap-grid" role="img" aria-label="Mapa de calor de riesgos">
          <div className="heatmap-grid__corner" />
          <div className="heatmap-grid__header">Baja</div>
          <div className="heatmap-grid__header">Media</div>
          <div className="heatmap-grid__header">Alta</div>

          {heatmapRows.map((row) => (
            <Fragment key={row.level}>
              <div className="heatmap-grid__label">{row.level}</div>
              {row.cells.map((cell, index) => (
                <div
                  key={`${row.level}-${index}`}
                  className={`heatmap-grid__cell ${cell ? "filled" : "empty"}`}
                >
                  {cell ? cell : ""}
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>

      <div className="risk-cards">
        {vulnerabilities.map((item) => (
          <article key={item.name} className="risk-card">
            <div className="risk-card__header">
              <h3>{item.name}</h3>
              <span className="risk-pill" style={{ backgroundColor: item.color }}>
                {item.risk}
              </span>
            </div>
            <p>
              Probabilidad: <strong>{item.probability}</strong>
            </p>
            <p>
              Impacto: <strong>{item.impact}</strong>
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}