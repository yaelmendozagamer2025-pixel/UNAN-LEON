GESTIÓN ACADÉMICA — v3.0 COMPLETA
=================================

Esta versión reemplaza el prototipo anterior y habilita todos los módulos principales.

INICIO RÁPIDO
1. Extrae la carpeta completa.
2. Abre index.html en Chrome, Edge o Firefox.
3. Verifica que la bienvenida muestre claramente “v3.0 · COMPLETA”.

MÓDULOS FUNCIONALES
- Inicio dinámico con progreso semanal y próximas actividades.
- Horario: alta, edición y eliminación de clases + detección de choque de horario.
- Tareas: alta, edición, completado, filtros, búsqueda, prioridades y vencimientos.
- Calendario mensual: combina tareas, evaluaciones y recordatorios por fecha.
- Evaluaciones y notas: alta, edición, estado, calificación y promedio por materia.
- Alertas: alta, edición, activación/desactivación y notificaciones del navegador cuando están disponibles.
- Materias: alta, edición, eliminación segura, docente, aula, color y métricas.
- Perfil y ajustes: datos del estudiante, modo oscuro, aviso anticipado.
- Respaldo: exportar e importar JSON.
- Persistencia automática en localStorage.

IMPORTANTE SOBRE NOTIFICACIONES
Los navegadores pueden bloquear las notificaciones al abrir index.html directamente como archivo local. Todas las alertas siguen funcionando dentro de la app; para notificaciones del sistema, sirve la carpeta con un servidor local/HTTPS.

PRUEBA RÁPIDA CON SERVIDOR LOCAL
Si tienes Python instalado, abre una terminal dentro de esta carpeta y ejecuta:
  python -m http.server 8000
Luego abre:
  http://localhost:8000

VERSIÓN
3.0.0 — 22/09/2026

MEJORAS DE BORRADO — v3.0.1
- Eliminar una clase: quita solo el bloque del horario, conserva la materia y sus tareas/notas.
- Eliminar una materia: muestra cuántas clases, tareas y evaluaciones se borrarán junto con ella.
- Borrar todos los datos: en Perfil y ajustes > Datos, confirma dos veces para borrar las materias,
  clases, tareas, evaluaciones, calificaciones, alertas, perfil y preferencias de esta aplicación.
- Tras el borrado, el sistema vuelve a Bienvenida con todos los contadores a cero y sin perfil.
- Los datos de demostración NO reaparecen al recargar. Para conservar datos, usa Exportar respaldo antes.
- El borrado elimina los datos locales de la app en este navegador/origen; no borra archivos de respaldo
  descargados, otros navegadores o dispositivos, ni el código de la aplicación.

MEJORAS DE SESIÓN — v3.0.2
- Cerrar sesión (Perfil y ajustes > Cuenta) sin borrar registros del navegador.
- Volver a entrar desde Bienvenida, recuperando los datos existentes.
- Al borrar todos los datos también se cierra la sesión local.
- Revisión del caché offline para no devolver el HTML ante imágenes o scripts no disponibles.
- Nota: sesión local sin contraseña ni autenticación de servidor.
