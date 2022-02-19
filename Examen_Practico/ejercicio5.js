class Persona{

    nombre;
    edad;

    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    obtDetalles(){
        console.log(this.nombre);
        console.log(this.edad);
    }
}

class Estudiante extends Persona{
    calificacion;
    
    obtDetalles(){
        console.log(this.nombre);
        console.log(this.edad);
        console.log(this.calificacion);
    }

    set _calificacion(x){
        this.calificacion=x;
    }
}

class Profesor extends Persona{
    asignatura;
    nivel;

    constructor(nombre, edad, asignatura="JS", nivel="basico"){
        this.nombre=nombre;
        this.edad=edad;
        this.asignatura=asignatura;
        this.nivel=nivel;
    }

    obtDetalles(){
        console.log(this.nombre);
        console.log(this.edad);
        console.log(this.asignatura);
        console.log(this.nivel);
    }
}

class Grupo{

    profesor;
    estudiantes;

    constructor(profesor, estudiantes){
        this.profesor=profesor;
        this.estudiantes=estudiantes;
    }

    calificar(){
        for(let i=0 ; i<this.estudiantes.lenght ; i++){
            this.estudiantes[i]._calificacion(Math.random*10);
        }
    }

    promedio(){
        promedio=0;
        for(let i=0 ; i<this.estudiantes.lenght ; i++){
            this.promedio+=this.estudiantes[i].calificacion;
        }
        this.promedio/=this.estudiantes.lenght;
        return this.promedio;
    }

}

let estudiantes = new Array();
estudiantes[0] = new Estudiante("Manuel",21);
estudiantes[1] = new Estudiante("Juan",18);
estudiantes[2] = new Estudiante("Paula",17);
estudiantes[3] = new Estudiante("Jennifer",23);
estudiantes[4] = new Estudiante("Carmen",22);
estudiantes[5] = new Estudiante("Osbaldo",24);

let profesor=new Profesor("Julio",35);

let grupo = new Grupo(profesor,estudiantes);

grupo.calificar();
console.log(grupo.promedio());