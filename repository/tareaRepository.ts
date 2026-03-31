import type { Tarea } from "../models/tarea";

const tareaRepository = {
    añadirTarea,
    eliminarTarea,
    mostrarTareas,
    buscarTarea
};



let tareas: Tarea[] = [];

function añadirTarea(tarea: Tarea): void {
    tareas.push(tarea);
}

function eliminarTarea(id: number): void {
   tareas = tareas.filter(tarea => tarea.id != id)
}

function mostrarTareas(): Tarea[] {
    return tareas
}

function buscarTarea(id: number): Tarea | void {
    for (let tarea of tareas) {
        if (tarea.id === id) {
            return tarea
        }
    }
}

export {tareaRepository}