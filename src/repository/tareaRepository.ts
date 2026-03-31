import type { Tarea } from "../models/tarea";

const tareaRepository = {
    obtenerTareas,
    guardarTareas,
    añadirTarea,
    eliminarTarea,
    mostrarTareas,
    buscarTarea
};

// Funcionalidad de localStorage

const KEY = "tareas";

function obtenerTareas(): Tarea[] {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
}

function guardarTareas(tareas: Tarea[]): void {
    localStorage.setItem(KEY, JSON.stringify(tareas));
}

// ------------------------------------

let tareas: Tarea[] = [];

function añadirTarea(tarea: Tarea): void {
    const tareas = obtenerTareas();
    tareas.push(tarea);
    guardarTareas(tareas);
}

function eliminarTarea(id: number): void {
    const tareas = obtenerTareas().filter(tarea => tarea.id !== id);
    guardarTareas(tareas);
}

function mostrarTareas(): Tarea[] {
    return obtenerTareas();
}

function buscarTarea(id: number): Tarea | void {
    return obtenerTareas().find(tarea => tarea.id === id);    
}

export {tareaRepository}