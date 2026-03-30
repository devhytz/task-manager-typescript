import type { Tarea } from "./models/tarea.ts";
import { TareaRepository } from "./repository/tareaRepository.ts";


const tarea1: Tarea = {
    id: 1,
    nombre: "Estudiar TypeScript",
    descripcion: "Practicar repositorios",
    pendiente: true
};

const tarea2: Tarea = {
    id: 2,
    nombre: "Estudiar Backtracking",
    descripcion: "Practicar ejercicios",
    pendiente: true
};

TareaRepository.añadirTarea(tarea1);
TareaRepository.añadirTarea(tarea2);

TareaRepository.eliminarTarea(1)
console.log(TareaRepository.mostrarTareas())