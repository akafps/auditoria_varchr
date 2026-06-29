# Políticas de Prevención y Controles de Mitigación

## Objetivo

Implementar medidas de seguridad que reduzcan la probabilidad de explotación de vulnerabilidades y disminuyan el impacto de un incidente de seguridad sobre el portal del Hotel Costa Brava.

---

# Políticas de Prevención

## Desarrollo Seguro

- Utilizar consultas parametrizadas para evitar Inyección SQL.
- Validar y sanitizar todas las entradas de los usuarios.
- Aplicar revisiones de código antes de cada despliegue.
- Seguir las recomendaciones del OWASP Top 10.

## Gestión de Accesos

- Aplicar el principio de mínimo privilegio.
- Utilizar autenticación multifactor (MFA) para administradores.
- Gestionar contraseñas robustas y su renovación periódica.

## Capacitación

- Capacitar al personal sobre ciberseguridad.
- Realizar campañas de concientización frente al phishing.
- Capacitar a desarrolladores en programación segura.

---

# Controles de Mitigación

## SQL Injection

- Prepared Statements.
- ORM seguro.
- Restricción de privilegios en la base de datos.
- Web Application Firewall (WAF).

## Cross Site Scripting (XSS)

- Sanitización de datos.
- Content Security Policy (CSP).
- Cookies HttpOnly y Secure.
- Escape de caracteres especiales.

## Inyección de Comandos

- Validación estricta de entradas.
- Uso de listas blancas.
- Deshabilitar funciones peligrosas.
- Ejecutar procesos con privilegios mínimos.

---

# Monitoreo

- Registro de eventos (Logs).
- Detección de actividad sospechosa.
- Monitoreo continuo del servidor.
- Alertas automáticas ante intentos de ataque.

## Beneficios Esperados

La implementación de estos controles permitirá reducir significativamente la probabilidad de ataques exitosos y mejorar la protección de los datos personales y financieros administrados por el Hotel Costa Brava.