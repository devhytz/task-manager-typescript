import type { Tarea } from "../models/tarea";
import { tareaRepository } from "../repository/tareaRepository.ts";

function generarId(lista: Tarea[]): number {
    let id = lista.length + 1;
    return id
}

function crearTarea(nombre: string, descripcion: string): void {
    const tareas = tareaRepository.obtenerTareas();
    const id = generarId(tareas);
    const pendiente = true // La tarea siempre se inicializará como pendiente

    if (nombre.length > 0 && nombre.length < 50) {
        if (descripcion.length > 0 && descripcion.length < 200) {
            let tareaNueva: Tarea = {
                id: id,
                nombre: nombre,
                descripcion: descripcion,
                pendiente: pendiente
            }

            tareaRepository.añadirTarea(tareaNueva) // Aquí agrego la tarea al repositorio

            // El emoji se lo agrego para tener un debuggin más rápido
            console.log(`La tarea ${nombre} ha sido agregada correctamente. ✅`)

        } else {
            console.log("La descripcion de la tarea debe contener entre 1 y 200 caracteres. ❌")
        }
    } else {
        console.log("El nombre de la tarea debe contener entre 1 y 50 caracteres. ❌")
    }
}

function eliminarTarea(tareas: Tarea[], nombre: string): void {
    
    if (tareas.length > 0) { 
        for (let tarea of tareas) {
            if (tarea.nombre.trim().toLowerCase() === nombre.trim().toLowerCase()) {
                tareaRepository.eliminarTarea(tarea.id)
                console.log(`La tarea: ${nombre} ha sido eliminada correctamente. ✅`)
                return
            } else {
                console.log(`La tarea: ${nombre} no ha sido encontrada. ❌`)
            }
        
        }
    } else {
        console.log("La lista de tareas se encuentra vacia. ❌")
    }
}

function obtenerTareas() {
    if (tareaRepository.obtenerTareas().length > 0) {
        return tareaRepository.obtenerTareas()
    } else {
        console.log("La lista de traeas se encuentra vacia. ❌")
    }
}

const tareaService = {
    crearTarea,
    eliminarTarea,
    obtenerTareas
};

export { tareaService };

