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

function App() {
  const [activeSection, setActiveSection] = useState("resumen");
  const activeContent = sections.find((section) => section.id === activeSection)?.component;

  return (
    <div className="App">
      <aside className="sidebar">
        <div className="sidebar__brand">
          <div className="sidebar__badge">Auditoría</div>
          <h1>Seguridad Web</h1>
          <p>Hotel Costa Brava</p>
        </div>

        <nav className="sidebar__nav" aria-label="Secciones de auditoría">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`sidebar__item ${activeSection === section.id ? "active" : ""}`}
              onClick={() => setActiveSection(section.id)}
            >
              <span className="sidebar__item-title">{section.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="content-shell">
        <header className="hero">
          <div className="hero__badge">Informe técnico</div>
          <h2>Exploración de hallazgos y controles</h2>
          <p>Seleccione una sección del panel lateral para consultar el contenido correspondiente.</p>
        </header>

        <section className="content-card" aria-live="polite">
          {activeContent}
        </section>
      </main>
    </div>
  );
}

export default App;