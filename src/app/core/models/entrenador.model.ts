
export class Entrenador {
    cedulaEntrenador: number;
    nombreCompleto: string;
    nombre: string;
    apellidos: string;
    telefono: number;
    correo: string;

    constructor(infoEntrenador: any) {
        this.cedulaEntrenador = infoEntrenador.cedula;
        this.nombreCompleto = `${infoEntrenador.nombre} ${infoEntrenador.apellidos}`;
        this.apellidos = infoEntrenador.apellidos;
        this.nombre = infoEntrenador.nombre;
        this.telefono = infoEntrenador.telefono;
        this.correo = infoEntrenador.correo;
    }
}
