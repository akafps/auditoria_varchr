# Análisis de Vulnerabilidad: Inyección SQL (SQL Injection)

## 1. Evidencia del Ataque
El ataque se ejecutó con éxito en el formulario de consulta de ID de usuario del portal de clientes.

![Evidencia de Inyección SQL](./img_varchr/sqli_varchr.png)

* **Payload utilizado:** `' OR '1'='1`
* **Resultado observado:** El sistema ignoró la restricción del ID original y expuso la totalidad de la base de datos de los clientes registrados (nombres, apellidos y datos asociados).

---

## 2. Explicación Técnica
La vulnerabilidad existe porque la aplicación concatena directamente la entrada del usuario en la consulta SQL sin realizar ningún tipo de sanitización o parametrización. 

La consulta interna en el servidor es similar a:
`SELECT first_name, last_name FROM users WHERE user_id = '$USER_INPUT';`

Al ingresar el payload `' OR '1'='1`, la consulta se transforma en:
`SELECT first_name, last_name FROM users WHERE user_id = '' OR '1'='1';`

Como la condición `'1'='1'` siempre es verdadera (True), el motor de la base de datos anula la validación del ID y retorna todos los registros existentes en la tabla, rompiendo el principio de confidencialidad de la información.

---

## 3. Puntaje y Severidad CVSS
Para evaluar la gravedad de este hallazgo, se utilizó la calculadora oficial de FIRST (CVSS v3.1):

* **Vector CVSS v3.1:** `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N`
* **Puntaje Base:** 7.5
* **Severidad:** Alta (High)

*Justificación:* El ataque se realiza de forma remota a través de la red (AV:N), requiere baja complejidad técnica (AC:L) y no necesita privilegios previos (PR:N) ni interacción del usuario (UI:N). El impacto principal es una pérdida de confidencialidad de los datos de los clientes (C:H).

---

## 4. Políticas de Prevención y Mitigación

### Política de Prevención (Control en el Desarrollo)
* **Uso de Consultas Parametrizadas (Prepared Statements):** Se debe obligar a los desarrolladores a utilizar sentencias preparadas con PDO o MySQLi. Esto asegura que el motor de la base de datos trate la entrada del usuario estrictamente como un dato (un string plano) y nunca como código ejecutable.

### Control de Mitigación (Defensa en Capas)
* **Implementación de un WAF (Web Application Firewall):** Configurar reglas en el cortafuegos de aplicaciones web para detectar y bloquear caracteres sospechosos o patrones de inyección SQL comunes antes de que toquen el servidor web.
* **Principio de Menores Privilegios:** Asegurar que el usuario de la base de datos que utiliza la aplicación web solo tenga permisos de lectura/escritura en las tablas necesarias, denegando comandos administrativos o acceso a otras bases de datos del sistema.