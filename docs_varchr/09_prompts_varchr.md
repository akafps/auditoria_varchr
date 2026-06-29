# Bitácora de Uso de Inteligencia Artificial

## Herramientas Utilizada

**ChatGPT (OpenAI)** / **Gemini IA** / **Claude**

---

## <span style="color:#dc2626;">BLOQUE 1</span>

### <span style="color:#dc2626;">Sección 1</span>

### Objetivo

Redactar el resumen de la auditoría.

### Prompt utilizado

"Redacta un resumen profesional para una auditoría de seguridad de un hotel llamado Hotel Costa Brava, considerando que administra reservas, datos personales y tarjetas bancarias."

### Resultado

Se obtuvo un resumen base que posteriormente fue revisado y adaptado al contexto de la evaluación.

---

### <span style="color:#dc2626;">Sección 2</span>

### Objetivo

Explicar técnicamente la vulnerabilidad SQL Injection.

### Prompt utilizado

"Explica técnicamente una vulnerabilidad SQL Injection indicando funcionamiento, impacto, prevención y mitigación para un hotel."

### Resultado

Se ajustó el contenido incorporando información específica sobre reservas y datos de pasajeros.

---

### <span style="color:#dc2626;">Sección 3</span>

### Objetivo

Explicar XSS Reflected.

### Prompt utilizado

"Explica la vulnerabilidad Cross Site Scripting (XSS Reflected) indicando impacto, prevención y controles."

---

### <span style="color:#dc2626;">Sección 4</span>

### Objetivo

Explicar Inyección de Comandos.

### Prompt utilizado

"Explica técnicamente Command Injection indicando CVSS, impacto empresarial, controles de mitigación y prevención."

---

### <span style="color:#dc2626;">Sección 5</span>

### Objetivo

Construir la matriz de riesgo.

### Prompt utilizado

"Genera una matriz de riesgo considerando SQL Injection, XSS y Command Injection para una empresa del rubro hotelero."

---

### <span style="color:#dc2626;">Sección 6</span>

### Objetivo

Redactar políticas de seguridad y plan de recuperación.

### Prompt utilizado

"Redacta controles de seguridad, medidas preventivas y un plan de recuperación para un hotel que administra datos personales y financieros."

---

## <span style="color:#dc2626;">BLOQUE 2 / PROMPTS GENERAL</span>

1. "Actúa como un desarrollador Frontend experto en React. Necesito crear una barra lateral de navegación (Sidebar) fija a la izquierda para un informe de auditoría. Debe incluir enlaces para: Resumen, Inyección SQL, XSS, Inyección de Comandos, Activos, Matriz, Controles, Recuperación y Prompts. Al hacer clic, debe cambiar el componente renderizado en el área principal."

2. "Tengo una aplicación de React + Vite. ¿Cómo puedo usar la librería react-markdown para leer un archivo local .md (por ejemplo, 01_resumen_varchar.md) e inyectar su contenido dinámicamente dentro de un componente llamado Resumen.jsx? Muéstrame la configuración del archivo y el código del componente."

3. "En mi proyecto React, necesito un componente base que cargue imágenes de la ruta docs_rodcam/img_varchar/sqli_varchar.png. ¿Cómo configuro Vite o las rutas relativas en React para que las imágenes incrustadas en los archivos Markdown se muestren correctamente tanto en el entorno local (npm run dev) como al desplegar en Vercel?"

4. "Explícame cómo estructurar el archivo src/App.jsx para importar dinámicamente 9 componentes distintos (Resumen, InyeccionSQL, XSS, Comandos, Activos, Matriz, Controles, Recuperacion, Prompts) de manera limpia y eficiente."

5. "Necesito que el mapa de calor de mi matriz de riesgo en React sea interactivo. Al hacer clic en una celda de la matriz (por ejemplo, fila de Probabilidad Alta e Impacto Crítico), se debe desplegar un cuadro modal abajo con el detalle de los riesgos asociados a esa categoría para nuestra empresa asignada."

6. "Actúa como un auditor de seguridad web. Explícame detalladamente, a nivel de código fuente (backend en PHP), por qué ocurre la vulnerabilidad de Inyección SQL en el nivel 'Low' de DVWA al usar el payload ' OR '1'='1'. Necesito entender el concepto de la falta de sanitización para redactar mi archivo."

7. "Actúa como un auditor de seguridad web para el Hotel Costa Brava. Logré explotar una vulnerabilidad de Inyección SQL en el portal de clientes que expone toda la base de datos. Ayúdame a calcular el vector CVSS v3.1 considerando que esta base de datos contiene nombres de huéspedes, fechas de hospedaje, números de habitaciones y registros de tarjetas de crédito. ¿Cómo impacta esto a la reputación del hotel y la confianza del negocio?"

8. "Para el informe de la matriz de riesgo del Hotel Costa Brava: ¿Por qué un ataque de XSS Reflejado en el portal de reservas de clientes es un riesgo crítico de negocio? Explica cómo un atacante podría usar este script malicioso para redirigir a los huéspedes a una página de pago falsa (phishing) y robar sus credenciales de reserva."

9. "Diseña un plan de recuperación ante desastres (DRP) para el archivo 08_recuperacion_<aaa><nnn>.md enfocado en el Hotel Costa Brava. El escenario es que el servidor del portal de clientes sufrió una Inyección de Comandos que alteró el inventario de habitaciones disponibles. ¿Cuáles son los pasos inmediatos para aislar el sistema, restaurar la última copia de seguridad limpia y verificar que no haya reservas duplicadas mientras el sitio web estuvo abajo?"

10. "Hazme un menú lateral izquierdo fijo en la pantalla. Ponle un color azul marino oscuro de fondo, que el texto de los botones sea de distintos colores, rojo para SQL Injection, XSS y Comandos, verde para Activos y Matriz, y azul para Controles y Recuperación, y el botón final de Prompts que sea rojo para que al pasar el mouse cambie de color."

---

## Reflexión Final

La Inteligencia Artificial fue utilizada como herramienta de apoyo para investigar conceptos técnicos, estructurar la documentación y mejorar la redacción del informe.

Esta auditoría de seguridad para el Hotel Costa Brava demostró que la Inteligencia Artificial es un excelente copiloto técnico, pero que requiere un rol crítico del estudiante para no quedarse en prompts genéricos. En la parte técnica de los ataques en DVWA (SQLi, XSS y Command Injection), la IA me ayudó a entender el código de fondo , pero mi tarea fundamental fue conectar esos fallos con el riesgo del negocio, viendo cómo una base de datos filtrada arruina la confianza de los huéspedes al exponer sus datos de reserva y tarjetas de crédito. En cuanto al desarrollo en React, la asistencia de la IA fue clave para maquetar el menú de navegación y estructurar con CSS puro la lógica del mapa de calor de la matriz de riesgo , logrando un sitio interactivo y responsive sin desviarme del foco principal que era la calidad del análisis de ciberseguridad