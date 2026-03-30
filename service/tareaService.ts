import type { Tarea } from "../models/tarea";
import { TareaRepository } from "../repository/tareaRepository";

function generarId(lista: Tarea[]): number {
    let id = lista.length + 1;
    return id
}

function crearTarea(lista: Tarea[], nombre: string, descripcion: string): Tarea {
    const id = generarId(lista)
    const pendiente = true // La tarea siempre se inicializará como pendiente

    if (nombre.length > 0 && nombre.length < 50) {
        if (descripcion.length > 0 && descripcion.length < 200) {
            let tareaNueva: Tarea = {
                id: id,
                nombre: nombre,
                descripcion: descripcion,
                pendiente: pendiente
            }

            TareaRepository.añadirTarea(tareaNueva) // Aquí agrego la tarea al repositorio

        } else {
            console.log("La descripcion de la tarea no puede ser mayor a 200 caracteres.")
        }
    } else {
        console.log("El nombre de la tarea no puede ser superior a los 50 caracteres.")
    }


}
