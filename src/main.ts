import { tareaService } from "./service/tareaService";

// Crear tarea
tareaService.crearTarea("Probar localStorage", "Test");

// Mostrar tareas
const tareas = tareaService.obtenerTareas();

console.log(tareas);