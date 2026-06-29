# Resumen de la Auditoría de Seguridad

## Empresa Auditada

**Hotel Costa Brava**

El Hotel Costa Brava pertenece al rubro de hotelería y turismo, ofreciendo servicios de reservas de habitaciones, alojamiento y atención a pasajeros nacionales e internacionales mediante un portal web.

## Objetivo de la Auditoría

El objetivo de esta auditoría consiste en identificar vulnerabilidades presentes en un entorno controlado (DVWA), analizar el impacto que podrían generar sobre el negocio del Hotel Costa Brava y proponer medidas de prevención, mitigación y recuperación que permitan fortalecer la seguridad de la información.

## Datos Custodiados

El portal administra información crítica para el funcionamiento del hotel, entre ella:

- Datos personales de los pasajeros.
- Reservas de habitaciones.
- Información de tarjetas bancarias.
- Historial de hospedajes.
- Datos de empleados.
- Base de datos de clientes.

## Vulnerabilidades Analizadas

Durante la auditoría se evaluaron tres vulnerabilidades ampliamente conocidas:

1. Inyección SQL (SQL Injection)
2. Cross Site Scripting (XSS Reflected)
3. Inyección de Comandos (Command Injection)

Cada una fue explotada en un laboratorio controlado para demostrar su impacto y evaluar el riesgo para la organización.

## Impacto para el Negocio

Si estas vulnerabilidades existieran en el portal del Hotel Costa Brava, un atacante podría acceder a información confidencial de clientes, modificar reservas, ejecutar código malicioso en los navegadores de los usuarios e incluso obtener control parcial del servidor.

Las consecuencias incluirían pérdidas económicas, daño reputacional, incumplimiento de la Ley N° 19.628 sobre Protección de Datos Personales y disminución de la confianza de los clientes.

## Objetivo Final

La finalidad del informe es proponer medidas de seguridad que reduzcan la probabilidad de explotación de estas vulnerabilidades y permitan una adecuada recuperación ante incidentes de ciberseguridad.