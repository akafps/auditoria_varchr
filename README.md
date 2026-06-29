# 🛡️ Auditoría de Seguridad Web & Dashboard Interactivo — Hotel Costa Brava

Este repositorio contiene el desarrollo completo de una **Auditoría de Seguridad de la Información** aplicada al escenario real del **Hotel Costa Brava**. El proyecto combina el análisis técnico de vulnerabilidades críticas, la evaluación de riesgos empresariales y el desarrollo de un **Dashboard web interactivo en React** para la visualización ejecutiva del informe para la universidad.

El entorno de pruebas y explotación controlada se ejecutó utilizando el laboratorio **DVWA (Damn Vulnerable Web Application)** en su nivel de seguridad *Low*.

---

## 🏬 Contexto del Negocio y Activos Custodiados

El **Hotel Costa Brava** pertenece al rubro de hotelería y turismo. Administra de forma centralizada sus operaciones críticas mediante su **portal de clientes**, el cual procesa y almacena activos de información de alto valor:
*   **Datos Personales:** Información de identificación y registros de huéspedes nacionales e internacionales.
*   **Datos Financieros:** Información y flujos transaccionales de tarjetas bancarias.
*   **Operaciones:** Control de inventario de habitaciones, reservas activas e historial de hospedajes.

El impacto de un incidente de ciberseguridad en esta plataforma no solo genera pérdidas económicas directas, sino que también vulnera la **Ley N° 19.628 sobre Protección de Datos Personales** en Chile, destruyendo la confianza reputacional del negocio.

---

## 🛠️ Tecnologías y Librerías Utilizadas

El sistema de visualización fue desarrollado bajo una arquitectura moderna en el Frontend, priorizando el rendimiento y la carga dinámica de documentos en texto plano:

*   **React 18** & **Vite:** Entorno de desarrollo ágil y empaquetado optimizado.
*   **CSS3 Nativo:** Maquetación responsiva, diseño de barra lateral fija (*Sidebar*) y un mapa de calor dinámico e interactivo.
*   **React-Markdown:** Inyección y renderizado dinámico de archivos Markdown (`.md`) directamente en componentes React sin comprometer la seguridad.
*   **Remark GFM:** Soporte para sintaxis de tablas y listas avanzadas tipo GitHub Flavored Markdown.
*   **Rehype-Raw:** Habilitado específicamente para interpretar etiquetas HTML nativas (como `<span style="...">`) para el estilizado preciso de títulos dentro de los informes técnicos.

---

## 📂 Estructura de Carpetas del Proyecto (`varchr`)

Para cumplir con las directrices de orden, mantenibilidad del código y evitar la ruptura de rutas relativas al desplegar en plataformas cloud como Vercel, el proyecto se organizó bajo la siguiente estructura rígida de nomenclatura:

```text
auditoria_varchr/
├── docs_varchr/                  # Documentación técnica en texto plano (.md)
│   ├── img_varchr/               # Capturas de pantalla y evidencias de explotación
│   │   ├── sqli_varchr.png
│   │   ├── xss_varchr.png
│   │   └── cmd_varchr.png
│   ├── 01_resumen_varchr.md
│   ├── 02_sqli_varchr.md
│   ├── 03_xss_varchr.md
│   ├── 04_comandos_varchr.md
│   ├── 05_activos_varchr.md
│   ├── 06_matriz_varchr.md
│   ├── 07_controles_varchr.md
│   ├── 08_recuperacion_varchr.md
│   └── 09_prompts_varchr.md      # Bitácora de uso crítico de Inteligencia Artificial
├── src/
│   ├── components/               # Módulos y componentes de la interfaz de React
│   │   ├── MarkdownViewer.jsx    # Renderizador dinámico con soporte de imágenes (imageMap)
│   │   ├── Resumen.jsx
│   │   ├── InyeccionSQL.jsx
│   │   ├── XSSReflejado.jsx
│   │   ├── CommandInjection.jsx
│   │   ├── MatrizRiesgo.jsx      # Mapa de calor CSS intermitente/interactivo con modales
│   │   └── Sidebar.jsx           # Navegación lateral fija y estilizada
│   ├── App.jsx                   # Enrutador e importación limpia de componentes
│   └── main.jsx
├── package.json
└── README.md