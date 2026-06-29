# Matriz de Riesgo

La siguiente matriz representa la probabilidad de ocurrencia y el impacto que tendría cada vulnerabilidad sobre el Hotel Costa Brava.

| Vulnerabilidad | Probabilidad | Impacto | Nivel de Riesgo |
|---------------|--------------|---------|-----------------|
| SQL Injection | Alta | Muy Alto | Crítico |
| Cross Site Scripting (XSS) | Media | Alto | Alto |
| Inyección de Comandos | Alta | Muy Alto | Crítico |

## Mapa de Calor

| Impacto / Probabilidad | Baja | Media | Alta |
|-------------------------|------|-------|------|
| Muy Alto | | | 🟥 SQLi / Command Injection |
| Alto | | 🟧 XSS | |
| Medio | | | |
| Bajo | | | |

## Priorización

### 1. SQL Injection

Prioridad máxima debido a que compromete la base de datos completa del hotel, incluyendo información de clientes, reservas y pagos.

### 2. Inyección de Comandos

Representa un riesgo extremadamente alto al permitir el control del servidor y afectar directamente la disponibilidad del portal.

### 3. Cross Site Scripting

Aunque su impacto es menor respecto a las otras vulnerabilidades, continúa siendo un riesgo importante debido al posible robo de sesiones y credenciales de usuarios.

## Conclusión

Las vulnerabilidades identificadas presentan un nivel de riesgo elevado para el Hotel Costa Brava, por lo que resulta indispensable implementar controles de seguridad, monitoreo continuo y políticas de desarrollo seguro que reduzcan la probabilidad de explotación y minimicen el impacto sobre el negocio.