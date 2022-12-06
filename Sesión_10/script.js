class Alumno {
    constructor(codigo, nombre, nota1, nota2, nota3,nota4){
    this.codigo = codigo;
    this.nombre = nombre;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.nota4 = nota4;
    }

    promedio (){
        return (this.nota1*0.15)+(this.nota2*0.20)+(this.nota3*0.25)+(this.nota4*0.40)
    }

    condicion (){
        const promedio =this.promedio()
        if (promedio >=12) return 'APROBADO'
        return 'DESAPROBADO'
    }

    obsequio (){
        const promedio = this.promedio()
        if (promedio > 17) return 'Haz sido acreedor de una Mochila'
        return 'Haz sido acreedor de una Mochila'
    }

}

const alumno = new Alumno('01','Pedro', 17,15,14,16)
console.log(alumno.nombre)
console.log(alumno.promedio())
console.log(alumno.condicion())
console.log(alumno.obsequio())
