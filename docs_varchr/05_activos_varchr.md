# 📊 Identificación y Clasificación de Activos de Información

---

## 1. Inventario de Activos Críticos
Para evaluar los riesgos del **Hotel Costa Brava**, se han identificado y priorizado los siguientes 5 activos de información esenciales para la continuidad operacional y el cumplimiento legal del negocio:

1. **Base de Datos de Clientes y Huéspedes (BD-01):** Almacena nombres, datos de contacto, registros de hospedaje e historial de transacciones.
2. **Pasarela de Procesamiento de Pagos y Reservas (SW-01):** Sistema de software encargado de procesar las transacciones financieras y gestionar la disponibilidad de habitaciones en tiempo real.
3. **Servidor Web / Portal de Clientes (HW-01):** Infraestructura de hardware y servidor Apache/Nginx que aloja la interfaz pública del hotel.
4. **Ficheros de Configuración y Credenciales del Sistema (DOC-01):** Archivos del sistema operativo del servidor (como `/etc/passwd` y llaves de conexión) que controlan los accesos administrativos.
5. **Cookies y Tokens de Sesión de Usuarios (DAT-01):** Datos temporales de autenticación almacenados en los navegadores de los clientes para mantener sus sesiones activas.

---

## 2. Matriz de Clasificación de Activos (C-I-D)
La clasificación se realiza utilizando una escala de criticidad de **Alto (A), Medio (M) y Bajo (B)**, evaluando el impacto en el negocio ante la pérdida de sus propiedades de seguridad fundamentales:

| ID Activo | Nombre del Activo | Confidencialidad | Integridad | Disponibilidad | Criticidad Global |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **BD-01** | Base de Datos de Clientes | **Alto** | **Alto** | **Medio** | 🔴 **Crítico** |
| **SW-01** | Pasarela de Pagos y Reservas | **Alto** | **Alto** | **Alto** | 🔴 **Crítico** |
| **HW-01** | Servidor Web (Portal) | **Medio** | **Medio** | **Alto** | 🟠 **Alto** |
| **DOC-01** | Ficheros de Configuración y Sistema | **Alto** | **Alto** | **Alto** | 🔴 **Crítico** |
| **DAT-01** | Cookies y Tokens de Sesión | **Alto** | **Medio** | **Bajo** | 🟠 **Alto** |

---

## 3. Justificación de Criticidad y Relación con Vulnerabilidades

### 3.1 Activos Críticos Relacionados con el Negocio y la Ley
* **Base de Datos (BD-01):** Su **Confidencialidad** es Máxima. Una brecha en este activo expone al hotel a multas severas bajo la **Ley N° 19.628 de Protección de la Vida Privada** en Chile. Está directamente expuesto por la vulnerabilidad de **Inyección SQL** analizada.
* **Pasarela de Pagos (SW-01):** Requiere máxima **Integridad y Disponibilidad**. Si los datos de las transacciones se alteran o el sistema cae, el hotel pierde ingresos inmediatos y destruye la confianza comercial de sus huéspedes.

### 3.2 Activos de Infraestructura y Autenticación
* **Ficheros de Configuración (DOC-01):** La filtración de este activo a través de la **Inyección de Comandos** expone la estructura de usuarios locales del servidor, permitiendo que un atacante consiga control total del hardware (**HW-01**).
* **Tokens de Sesión (DAT-01):** Vulnerables al robo mediante **XSS Reflejado**. Su compromiso permite el secuestro de cuentas de clientes legítimos, impactando la reputación corporativa de la marca.