# 🗺️ Matriz de Riesgo y Mapa de Calor

---

## 1. Metodología de Evaluación
La evaluación del nivel de riesgo para cada escenario de amenaza se calcula multiplicando los factores de **Probabilidad (P)** y **Impacto (I)**, utilizando una escala numérica del 1 al 5:

* **Probabilidad (P):** 1 (Muy Baja), 2 (Baja), 3 (Media), 4 (Alta), 5 (Muy Alta).
* **Impacto (I):** 1 (Insignificante), 2 (Menor), 3 (Moderado), 4 (Mayor), 5 (Catastrófico).

### Escala de Criticidad del Riesgo
El valor resultante determinará la prioridad de atención en el plan de tratamiento:
* 🟢 **Riesgo Bajo:** 1 a 5
* 🟡 **Riesgo Medio:** 6 to 11
* 🟠 **Riesgo Alto:** 12 to 19
* 🔴 **Riesgo Crítico:** 20 to 25

---

## 2. Cuadro de Evaluación de Riesgos (Línea Base)
A continuación, se priorizan las amenazas explotadas sobre los activos del **Hotel Costa Brava**, calculando el riesgo intrínseco antes de los controles:

| ID Riesgo | Amenaza / Escenario de Ataque | Activo Afectado | Probabilidad (P) | Impacto (I) | Nivel de Riesgo (P × I) | Prioridad |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: |
| **R-01** | Exfiltración masiva de datos mediante **Inyección SQL**. | BD-01 | 4 | 5 | 🔴 **20 (Crítico)** | **1** |
| **R-02** | Ejecución de comandos del sistema (**Command Injection**). | DOC-01 / HW-01 | 4 | 5 | 🔴 **20 (Crítico)** | **2** |
| **R-03** | Secuestro de sesiones de huéspedes a través de **XSS Reflejado**. | DAT-01 | 4 | 3 | 🟠 **12 (Alto)** | **3** |

---

## 3. Justificación de Criterios e Impacto de Negocio

### 3.1 Escenario R-01 (Inyección SQL)
* **Justificación de Matriz:** Al no requerir autenticación previa en el portal de clientes, la probabilidad de descubrimiento es **Alta (4)**. El impacto se evalúa como **Catastrófico (5)** debido a que la filtración de la base de datos de los huéspedes viola de manera directa la **Ley N° 19.628 de Protección de la Vida Privada** en Chile, conllevando demandas legales civiles y la pérdida absoluta de la reputación corporativa del hotel.

### 3.2 Escenario R-02 (Inyección de Comandos)
* **Justificación de Matriz:** El formulario de diagnóstico de red expuesto en el Backend permite una explotación directa con baja complejidad técnica, dándole una probabilidad **Alta (4)**. El impacto es **Catastrófico (5)** porque la vulnerabilidad otorga ejecución de código en el servidor raíz. Esto destruye la continuidad del negocio y compromete la integridad de todo el software web de reservas.

### 3.3 Escenario R-03 (Cross-Site Scripting - XSS)
* **Justificación de Matriz:** Su probabilidad es **Alta (4)** porque se ubica en formularios interactivos sin sanitizar de consulta frecuente. No obstante, su impacto se clasifica como **Moderado (3)** en comparación con los anteriores, ya que no compromete la base de datos directamente de forma masiva ni destruye el sistema operativo del servidor, sino que está supeditado a que un cliente haga clic en un enlace malicioso diseñado por el atacante.