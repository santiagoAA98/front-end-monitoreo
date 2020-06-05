
export class Administrador {
    cedula: number;
    nombre: string;
    apellidos: string;
    telefono: number;
    correo: string;

    constructor(infoAdministrador: any) {
        this.cedula = infoAdministrador.cedula;
        this.nombre = infoAdministrador.nombre;
        this.apellidos = infoAdministrador.apellidos;
        this.telefono = infoAdministrador.telefono;
        this.correo = infoAdministrador.correo;
    }
}
