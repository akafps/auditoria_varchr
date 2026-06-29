# Bitácora de Uso de Inteligencia Artificial

## <span style="color:#dc2626;">Herramientas Utilizadas</span>
**Gemini IA** / **ChatGPT (OpenAI)**

---

## <span style="color:#dc2626;">BLOQUE 1: PROMPTS INICIALES DE INVESTIGACIÓN</span>

### <span style="color:#dc2626;">Sección 1: Resumen Ejecutivo</span>
* **Objetivo:** Redactar el resumen de la auditoría.
* **Prompt utilizado:** "Redacta un resumen profesional para una auditoría de seguridad de un hotel llamado Hotel Costa Brava, considerando que administra reservas, datos personales y tarjetas bancarias."
* **Resultado:** Se obtuvo un resumen base que posteriormente fue revisado y adaptado manualmente al contexto técnico y objetivos de la evaluación en INACAP.

### <span style="color:#dc2626;">Sección 2: Análisis de Inyección SQL</span>
* **Objetivo:** Explicar técnicamente la vulnerabilidad SQL Injection.
* **Prompt utilizado:** "Explica técnicamente una vulnerabilidad SQL Injection indicando funcionamiento, impacto, prevención y mitigación para un hotel."
* **Resultado:** Se ajustó el contenido incorporando información específica sobre bases de datos de reservas y datos críticos de los pasajeros del hotel.

### <span style="color:#dc2626;">Sección 3: Análisis de XSS Reflejado</span>
* **Objetivo:** Explicar XSS Reflected.
* **Prompt utilizado:** "Explica la vulnerabilidad Cross Site Scripting (XSS Reflected) indicando impacto, prevención y controles."
* **Resultado:** La respuesta inicial era muy general. Se complementó analizando críticamente cómo afectaría el robo de sesiones en el portal web del Hotel.

### <span style="color:#dc2626;">Sección 4: Análisis de Inyección de Comandos</span>
* **Objetivo:** Explicar Inyección de Comandos.
* **Prompt utilizado:** "Explica técnicamente Command Injection indicando CVSS, impacto empresarial, controles de mitigación y prevención."
* **Resultado:** Se utilizó la información técnica base para estructurar las amenazas del sistema operativo, enfocándolo en el entorno controlado de pruebas (DVWA).

### <span style="color:#dc2626;">Sección 5: Identificación de Riesgos y Matriz</span>
* **Objetivo:** Construir la matriz de riesgo.
* **Prompt utilizado:** "Genera una matriz de riesgo considerando SQL Injection, XSS y Command Injection para una empresa del rubro hotelero."
* **Resultado:** Sirvió para entender la relación probabilidad/impacto, separando conceptualmente el hallazgo técnico del riesgo de negocio hotelero.

### <span style="color:#dc2626;">Sección 6: Mitigación y Continuidad</span>
* **Objetivo:** Redactar políticas de seguridad y plan de recuperación.
* **Prompt utilizado:** "Redacta controles de seguridad, medidas preventivas y un plan de recuperación para un hotel que administra datos personales y financieros."
* **Resultado:** Se extrajeron los lineamientos principales para diseñar los controles de mitigación exigidos en la rúbrica.

---

## <span style="color:#dc2626;">BLOQUE 2: PROMPTS ESPECÍFICOS Y DESARROLLO (USO CRÍTICO)</span>

1. "Actúa como un desarrollador Frontend experto en React. Necesito crear una barra lateral de navegación (Sidebar) fija a la izquierda para un informe de auditoría. Debe incluir enlaces para: Resumen, Inyección SQL, XSS, Inyección de Comandos, Activos, Matriz, Controles, Recuperación y Prompts. Al hacer clic, debe cambiar el componente renderizado en el área principal."

2. "Tengo una aplicación de React + Vite. ¿Cómo puedo usar la librería react-markdown para leer un archivo local .md (por ejemplo, 01_resumen_varchar.md) e inyectar su contenido dinámicamente dentro de un componente llamado Resumen.jsx? Muéstrame la configuración del archivo y el código del componente."

3. "En mi proyecto React, necesito un componente base que cargue imágenes de la ruta docs_varchar/img_varchar/sqli_varchar.png. ¿Cómo configuro Vite o las rutas relativas en React para que las imágenes incrustadas en los archivos Markdown se muestren correctamente tanto en el entorno local (npm run dev) como al desplegar en Vercel?"

4. "Explícame cómo estructurar el archivo src/App.jsx para importar dinámicamente 9 componentes distintos (Resumen, InyeccionSQL, XSS, Comandos, Activos, Matriz, Controles, Recuperacion, Prompts) de manera limpia y eficiente."

5. "Necesito que el mapa de calor de mi matriz de riesgo en React sea interactivo. Al hacer clic en una celda de la matriz (por ejemplo, fila de Probabilidad Alta e Impacto Crítico), se debe desplegar un cuadro modal abajo con el detalle de los riesgos asociados a esa categoría para nuestra empresa asignada."

6. "Actúa como un auditor de seguridad web. Explícame detalladamente, a nivel de código fuente (backend en PHP), por qué ocurre la vulnerabilidad de Inyección SQL en el nivel 'Low' de DVWA al usar el payload ' OR '1'='1'. Necesito entender el concepto de la falta de sanitización para redactar mi archivo."

7. "Actúa como un auditor de seguridad web para el Hotel Costa Brava. Logré explotar una vulnerabilidad de Inyección SQL en el portal de clientes que expone toda la base de datos. Ayúdame a calcular el vector CVSS v3.1 considerando que esta base de datos contiene nombres de huéspedes, fechas de hospedaje, números de habitaciones y registros de tarjetas de crédito. ¿Cómo impacta esto a la reputación del hotel y la confianza del negocio?"

8. "Para el informe de la matriz de riesgo del Hotel Costa Brava: ¿Por qué un ataque de XSS Reflejado en el portal de reservas de clientes es un riesgo crítico de negocio? Explica cómo un atacante podría usar este script malicioso para redirigir a los huéspedes a una página de pago falsa (phishing) y robar sus credenciales de reserva."

9. "Diseña un plan de recuperación ante desastres (DRP) para el archivo 08_recuperacion_<aaa><nnn>.md enfocado en el Hotel Costa Brava. El escenario es que el servidor del portal de clientes sufrió una Inyección de Comandos que alteró el inventario de habitaciones disponibles. ¿Cuáles son los pasos inmediatos para aislar el sistema, restaurar la última copia de seguridad limpia y verificar que no haya reservas duplicadas mientras el sitio web estuvo abajo?"

10. "Hazme un menú lateral izquierdo fijo en la pantalla. Ponle un color azul marino oscuro de fondo, que el texto de los botones sea de distintos colores, rojo para SQL Injection, XSS y Comandos, verde para Activos y Matriz, y azul para Controles y Recuperación, y el botón final de Prompts que sea rojo para que al pasar el mouse cambie de color."

11. "Estoy corriendo mi proyecto de React con Vite usando npm run dev y la pantalla se me fue a negro con un error de compilación. En la consola me sale este mensaje de error exacto: [plugin:vite:import-analysis] Failed to resolve import "rehype-raw" from "src/components/MarkdownViewer.jsx". Does the file exist?. El error apunta directo a la línea donde hago el import rehypeRaw from "rehype-raw";. ¿Cómo lo soluciono desde la terminal de VS Code y por qué me pasa esto si el código parece estar bien escrito?"

12. "Estoy analizando el código de DVWA en nivel 'Low' para la auditoría del Hotel Costa Brava. Vi que el comando que ingresé (127.0.0.1; cat /etc/passwd) funciona porque el backend toma la IP del usuario y la mete directo a una función del sistema operativo (como shell_exec o exec en PHP) sin revisar nada. ¿Cómo puedo arreglar ese código en PHP para que el sitio del hotel sea seguro? Muéstrame cómo validar la entrada del usuario usando una lista blanca (whitelist) o expresiones regulares para que solo deje pasar direcciones IP reales y bloquee caracteres peligrosos como el punto y coma (`;`)."

13. Tengo un problema con el menú lateral (Sidebar): cuando entro a la página desde el celular, el menú me tapa toda la pantalla y no me deja leer los informes de los ataques. Dame un código en CSS nativo que use @media para que en pantallas chicas el menú lateral se esconda automáticamente y se transforme en una barra horizontal arriba (Navbar) con los botones más compactos.

14. Quiero estilizar los títulos de los informes de auditoría (los h1, h2 y h3) usando CSS tradicional. Necesito que el título principal (h1) tenga una tipografía moderna y limpia, un tamaño grande pero que no desarme la página, y un color azul marino elegante que combine. Para los subtítulos (h2 y h3), haz que el tamaño baje jerárquicamente, que tengan un color blanco para que contrasten bien y ponles un margen o espacio abajo para que los párrafos de texto no queden pegados.

---

## <span style="color:#dc2626;">REFLEXIÓN FINAL</span>

Esta auditoría de seguridad para el **Hotel Costa Brava** demostró que la Inteligencia Artificial es un excelente copiloto técnico, pero que requiere un rol crítico del estudiante para no quedarse en prompts genéricos. En la parte técnica de los ataques en DVWA (SQLi, XSS y Command Injection), la IA me ayudó a entender el código de fondo , pero mi tarea fundamental fue conectar esos fallos con el riesgo del negocio, viendo cómo una base de datos filtrada arruina la confianza de los huéspedes al exponer sus datos de reserva y tarjetas de crédito[cite: 28, 30]. En cuanto al desarrollo en React, la asistencia de la IA fue clave para maquetar el menú de navegación y estructurar con **CSS puro** la lógica del mapa de calor de la matriz de riesgo, logrando un sitio interactivo y responsive sin desviarme del foco principal que era la calidad del análisis de ciberseguridad.