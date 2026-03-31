import type { Tarea } from "./models/tarea.ts";
import { tareaRepository } from "./repository/tareaRepository.ts";
import { tareaService } from "./service/tareaService.ts";

let tarea1: Tarea = {
    id: 1,
    nombre: "hola",
    descripcion: "hola",
    pendiente: true
}
let lista: Tarea[] = [];
lista.push(tarea1)
// tareaService.crearTarea(lista, "Cepillarme", "Debo cepillarme despues de comer")
tareaService.eliminarTarea(lista, "s")