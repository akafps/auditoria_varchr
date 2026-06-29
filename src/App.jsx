import { useState } from "react";
import "./App.css";

import Resumen from "./components/Resumen";
import InyeccionSQL from "./components/InyeccionSQL";
import XSS from "./components/XSS";
import Comandos from "./components/Comandos";
import Activos from "./components/Activos";
import Matriz from "./components/Matriz";
import Controles from "./components/Controles";
import Recuperacion from "./components/Recuperacion";
import Prompts from "./components/Prompts";

const sections = [
  { id: "resumen", label: "Resumen", component: <Resumen /> },
  { id: "sqli", label: "SQL Injection", component: <InyeccionSQL /> },
  { id: "xss", label: "XSS", component: <XSS /> },
  { id: "cmd", label: "Comandos", component: <Comandos /> },
  { id: "activos", label: "Activos", component: <Activos /> },
  { id: "matriz", label: "Matriz", component: <Matriz /> },
  { id: "controles", label: "Controles", component: <Controles /> },
  { id: "recuperacion", label: "Recuperación", component: <Recuperacion /> },
  { id: "prompts", label: "Prompts IA", component: <Prompts /> },
];

const overviewGroups = [
  {
    title: "",
    description: "",
    tone: "summary",
    cards: [{ id: "resumen", title: "Resumen Ejecutivo", subtitle: "" }],
  },
  {
    title: "Vulnerabilidades críticas",
    description: "Hallazgos de alto riesgo",
    tone: "risk",
    cards: [
      { id: "sqli", title: "SQL Injection", subtitle: "Vulnerabilidad crítica en bases de datos" },
      { id: "xss", title: "XSS", subtitle: "Explotación en navegador y sesión" },
      { id: "cmd", title: "Comandos", subtitle: "Ejecución remota de órdenes del sistema" },
    ],
  },
  {
    title: "Activos y matriz",
    description: "Recursos afectados y evaluación del riesgo",
    tone: "success",
    cards: [
      { id: "activos", title: "Activos afectados", subtitle: "Recursos y servicios comprometidos" },
      { id: "matriz", title: "Matriz de riesgo", subtitle: "Evaluación visual del impacto" },
    ],
  },
  {
    title: "Controles y recuperación",
    description: "Medidas de mitigación y continuidad",
    tone: "info",
    cards: [
      { id: "controles", title: "Controles", subtitle: "Medidas de mitigación" },
      { id: "recuperacion", title: "Plan de recuperación", subtitle: "Respuesta y continuidad operativa" },
    ],
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const activeContent = sections.find((section) => section.id === activeSection)?.component;
  const showOverview = activeSection === "home";

  const getSidebarTone = (id) => {
    if (id === "home" || id === "resumen") return "soft";
    if (["activos", "matriz"].includes(id)) return "success";
    if (["controles", "recuperacion"].includes(id)) return "info";
    return "risk";
  };

  return (
    <div className="App">
      <aside className="sidebar">
        <div className="sidebar__brand">
          <div className="sidebar__badge">Auditoría</div>
          <p>Hotel Costa Brava</p>
        </div>

        <nav className="sidebar__nav" aria-label="Secciones de auditoría">
          <button
            type="button"
            className={`sidebar__item ${activeSection === "home" ? "active" : ""} ${getSidebarTone("home")}`}
            onClick={() => setActiveSection("home")}
          >
            <span className="sidebar__item-title">Inicio</span>
          </button>
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`sidebar__item ${activeSection === section.id ? "active" : ""} ${getSidebarTone(section.id)}`}
              onClick={() => setActiveSection(section.id)}
            >
              <span className="sidebar__item-title">{section.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar__footer">
          <p className="sidebar__footer-line">Auditoría realizada por Christian Vargas</p>
          <p className="sidebar__footer-copy">© 2026 Seguridad Informática</p>
        </div>
      </aside>

      <main className="content-shell">
        <header className="hero">
          <div className="hero__badge">Informe técnico</div>
          <h2>Exploración de hallazgos y controles</h2>
          <p>Seleccione una sección del panel lateral para consultar el contenido correspondiente.</p>
        </header>

        <section className="content-card" aria-live="polite">
          {showOverview ? (
            <div className="overview">
              <div className="overview__header">
                <h2>Vista general del informe</h2>
                <p>Seleccione una sección para ver el contenido detallado de cada hallazgo.</p>
              </div>

              <div className="overview__groups">
                {overviewGroups.map((group) => (
                  <section key={group.title || group.cards[0].id} className={`overview__group ${group.tone}`}>
                    {(group.title || group.description) && (
                      <div className="overview__group-header">
                        <h3>{group.title}</h3>
                        <p>{group.description}</p>
                      </div>
                    )}

                    <div className="overview__group-cards">
                      {group.cards.map((card) => (
                        <button
                          key={card.id}
                          type="button"
                          className="overview__card"
                          onClick={() => setActiveSection(card.id)}
                        >
                          <h4>{card.title}</h4>
                          <p>{card.subtitle}</p>
                        </button>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          ) : (
            activeContent
          )}
        </section>
      </main>
    </div>
  );
}

export default App;