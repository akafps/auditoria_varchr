# 🛡️ Plan de Recuperación ante Desastres (DRP)

---

## 1. Objetivos del Plan (RPO y RTO)
Este documento establece las directrices técnicas y operacionales del **Hotel Costa Brava** para garantizar la resiliencia y continuidad del negocio ante incidentes críticos de ciberseguridad, como la destrucción del servidor debido a una Inyección de Comandos o la corrupción de bases de datos.

* **Objetivo de Punto de Recuperación (RPO):** Máximo **24 horas**. Se tolera una pérdida máxima de un día de transacciones de reservas web.
* **Objetivo de Tiempo de Recuperación (RTO):** Máximo **4 horas**. El portal de clientes y la pasarela de pagos deben estar en línea y operativos antes de este límite tras declararse el desastre.

---

## 2. Política de Respaldos (Backup Policy)
Para cumplir con el RPO, se implementa una estrategia de respaldo automatizada bajo el principio de redundancia:

* **Frecuencia:** * **Base de Datos (BD-01):** Respaldos incrementales cada 4 horas y respaldo completo (Full Backup) cada 24 horas a las 02:00 AM.
  * **Código Fuente y Configuración (HW-01/DOC-01):** Respaldo completo semanal y ante cada actualización o despliegue en producción.
* **Retención:** Los respaldos completos se retendrán de forma segura por un periodo mínimo de **30 días**.
* **Almacenamiento:** Copias cifradas (AES-256) almacenadas localmente en un almacenamiento aislado del servidor y una réplica en la nube (AWS S3) georredundante para mitigar el compromiso total del entorno local.

---

## 3. Estrategia de Restauración de Servicios
En caso de un incidente crítico que comprometa la integridad del sistema operativo por inyección de código:

1. **Aislamiento Inmediato:** Apagado o desconexión de red de la instancia comprometida para evitar movimientos laterales en la infraestructura del hotel.
2. **Aprovisionamiento:** Despliegue automatizado de una nueva instancia limpia del servidor utilizando el pipeline de integración continua desde el repositorio Git controlado.
3. **Inyección de Respaldos:** Descarga y montaje del último respaldo de base de datos verificado y libre de anomalías.
4. **Validación de Seguridad:** Ejecución de un escaneo rápido de vulnerabilidades en el entorno de staging antes de desviar el tráfico real de producción.

---

## 4. Protocolo de Notificación de Incidentes Técnicos
Ante la confirmación de una brecha de seguridad (ej. exfiltración masiva de datos mediante SQLi), se activará el siguiente flujo de comunicación en un plazo máximo de **1 hora**: