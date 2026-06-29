# Vulnerabilidad: Cross Site Scripting (XSS Reflected)

![XSS](img_varchr/xss_varchr.png)

## Evidencia

Durante la auditoría se ejecutó el siguiente payload:

```html
<script>alert('XSS')</script>
```

El navegador ejecutó correctamente el código JavaScript, demostrando que la aplicación refleja contenido sin validarlo.

## Explicación Técnica

La vulnerabilidad XSS ocurre cuando una aplicación muestra información proporcionada por el usuario sin sanitizar el contenido.

Esto permite ejecutar código JavaScript en el navegador de la víctima.

En un portal de reservas esto podría utilizarse para robar sesiones, credenciales o redirigir usuarios hacia sitios fraudulentos.

## Impacto para Hotel Costa Brava

Un atacante podría:

- Robar cookies de sesión.
- Suplantar usuarios.
- Redireccionar clientes.
- Modificar contenido visible.
- Capturar credenciales de acceso.

Esto afecta directamente la confianza de los clientes y la imagen corporativa del hotel.

## CVSS v3.1

**Puntaje:** 6.1

**Severidad:** Media

## Política de Prevención

- Validación de entradas.
- Sanitización del HTML.
- Implementar Content Security Policy (CSP).
- Escapar caracteres especiales.

## Controles de Mitigación

- Uso de librerías de sanitización.
- Cookies HttpOnly.
- Cookies Secure.
- Monitoreo de actividad anómala.
- Actualización constante del software.