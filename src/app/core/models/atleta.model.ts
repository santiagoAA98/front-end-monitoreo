
export class Atleta {
    cedulaAtleta: number;
    nombreCompleto: string;
    nombre: string;
    apellidos: string;
    edad: number;
    telefono: number;
    correo: string;
    estatura: number;
    peso: number;
    tallaCamisa: number;
    tipoSangre: string;
    alergias: string;
    operaciones: string;
    lesionesGraves: string;
    fracturas: string;
    sexo: string;

    constructor(atleta: any) {
        this.cedulaAtleta = atleta.cedula;
        this.nombreCompleto = `${atleta.nombre} ${atleta.apellidos}`;
        this.nombre = atleta.nombre;
        this.apellidos = atleta.apellidos;
        this.edad = atleta.edad;
        this.telefono = atleta.telefono;
        this.correo = atleta.correo;
        this.estatura = atleta.estatura;
        this.peso = atleta.peso;
        this.tallaCamisa = atleta.talla_camisa;
        this.tipoSangre = atleta.tipo_sangre;
        this.alergias = atleta.alergias;
        this.operaciones = atleta.operaciones;
        this.lesionesGraves = atleta.lesiones_graves;
        this.fracturas = atleta.fracturas;
        this.sexo = atleta.sexo;
    }
}
