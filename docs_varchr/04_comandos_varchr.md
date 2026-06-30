# 🔍 Análisis de Vulnerabilidad: Inyección de Comandos (Command Injection)

---

## 1. Evidencia del Ataque
El ataque se ejecutó con éxito aprovechando una falta de validación de caracteres de escape en la sección del portal de clientes diseñada para realizar diagnósticos de red interna (función Ping).

* **Payload utilizado:** `127.0.0.1; cat /etc/passwd`
* **Resultado observado:** La aplicación ejecutó ambos comandos, mostrando el contenido del archivo `/etc/passwd`, lo que demuestra que el servidor interpreta directamente la entrada del usuario como comandos del sistema operativo.

![Evidencia Inyección de Comandos](img_varchr/cmd_varchr.png)

*Figura 3.1: Evidencia de ejecución forzada de comandos arbitrarios en el servidor del portal, exponiendo información confidencial del sistema operativo del Hotel Costa Brava.*

---

## 2. Explicación Técnica
La vulnerabilidad de Inyección de Comandos ocurre cuando una aplicación ejecuta comandos del sistema utilizando información ingresada por el usuario sin realizar validaciones.

El atacante puede concatenar nuevos comandos utilizando caracteres especiales como `;`, `&&` o `|`, logrando ejecutar instrucciones arbitrarias sobre el servidor. En un entorno real, esta vulnerabilidad podría permitir la obtención de archivos sensibles, la instalación de malware, el robo de información o incluso el control total del servidor.

---

## 3. Puntaje y Severidad CVSS
Para evaluar rigurosamente el nivel de riesgo de esta vulnerabilidad, se utilizó la metodología global de FIRST (CVSS v3.1):

| Métrica CVSS 3.1 | Puntuación | Severidad |
| :--- | :---: | :---: |
| **CVSS Base Score** | **9.8** | 🔴 **Crítica** |

* **Vector de ataque:** `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H`
* **Justificación:** Es de severidad crítica porque el vector de ataque es remoto por red (AV:N), requiere baja complejidad técnica (AC:L), no requiere privilegios (PR:N) ni interacción del cliente (UI:N). El impacto es máximo ya que otorga un control total sobre el sistema, comprometiendo la Confidencialidad, Integridad y Disponibilidad por igual (C:H/I:H/A:H).

---

## 4. Impacto para Hotel Costa Brava
Si esta vulnerabilidad estuviera presente en el portal del Hotel Costa Brava, un atacante podría:
* Acceder a archivos internos del servidor.
* Robar bases de datos completas de reservas y clientes.
* Obtener credenciales críticas de administración del sistema.
* Instalar software malicioso (*backdoors*) para mantener persistencia.
* Interrumpir por completo el servicio de reservas.

Las consecuencias afectarían gravemente la disponibilidad del servicio, la confidencialidad de los datos y la continuidad operacional del negocio.

---

## 5. Políticas de Prevención y Mitigación

### Política de Prevención (Causa Raíz)
* **Evitar funciones de ejecución directa:** Rediseñar la lógica del software para eliminar por completo el uso de llamadas al shell del sistema operativo (`shell_exec`, `system`). Si se requiere verificar conectividad, se deben emplear APIs nativas de red del lenguaje de programación.
* **Validación por Listas Blancas (White-listing):** En caso de ser estrictamente necesario procesar texto del usuario en una consola, validar que la entrada coincida única y exclusivamente con un formato predefinido (por ejemplo, una expresión regular que solo admita direcciones IP válidas), rechazando inmediatamente cualquier caracter especial.

### Control de Mitigación (Defensa en Capas bajo Marcos CIS Controls y NIST)
* **Principio de Mínimo Privilegio (CIS Control 4):** Configurar el servicio web del Backend (Apache/Nginx) para ejecutarse bajo una cuenta de usuario con permisos sumamente limitados y aislados (como `www-data`), restringiendo su capacidad de interactuar con comandos del sistema de administración o utilidades críticas (`cat`, `sh`, `bash`).
* **Segmentación de Red y Monitoreo Lineal (NIST SP 800-53):** Aislar el servidor que aloja el portal de clientes dentro de una Zona Desmilitarizada (DMZ) para impedir el movimiento lateral de un atacante hacia la red interna del hotel en caso de una intrusión exitosa.