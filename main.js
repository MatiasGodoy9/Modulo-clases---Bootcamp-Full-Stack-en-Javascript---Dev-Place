// PUNTO 1

class Nif {
    constructor (dni) {
        this.dni = dni;
        this.letra = this.calcularLetra();
    }

    calcularLetra() {
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
        'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        return letras [this.dni % 23];
    }

    leer() {
        do {
            this.dni = parseInt(prompt("Ingrese un dni: "));
        } while (this.dni <= 0);
        this.letra = this.calcularLetra();
    }

    getDni() {
        return this.dni;
    }

    setDni(dni) {
        this.dni = dni;
    }

    toString() {
        return "DNI: " + this.dni + "-" + this.letra;
    }
}

const nif = new Nif();
nif.leer();
alert(nif.toString());

// PUNTO 2

class Motor {
    constructor () {

    };
    arrancarMotor()
    apagarMotor()
}

class Rueda {
    constructor () {

    };
    inflarRueda()
    desinflarRueda()
}

class Ventana {
    constructor () {

    }
    abrirVentana()
    cerrarVentana()
}

class Puerta {
    constructor () {
        this.ventana = new Ventana();
    }
    abrirPuerta()
    cerrarPuerta()
}

class Coche {
    constructor () {
        this.motor = new Motor();
        this.rueda1 = new Rueda();
        this.rueda2 = new Rueda();
        this.rueda3 = new Rueda();
        this.rueda4 = new Rueda();
        this.puerta1 = new Puerta();
        this.puerta2 = new Puerta();
    };
    acelerarCoche()
    frenarCoche()
    marchaAtras()
    doblarIzq()
    doblarDer()
}

// .crear una clase llamada Persona. Sus atributos son: nombre, edad y DNI. Construye los siguientes métodos para la clase:
// Un constructor, donde los datos pueden estar vacíos.
// Los setters y getters para cada uno de los atributos. Hay que validar las entradas de datos.
// mostrar(): Muestra los datos de la persona.
// esMayorDeEdad(): Devuelve un valor lógico indicando si es mayor de edad.

class Persona{

    constructor (nombre, edad, dni){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
    }

    get nombre(){
        return this.nombre
    }
    get edad(){
        return this.edad
    }
    get dni(){
        return this.dni
    }

    set nombre(nuevoNombre){
        this.nombre = nuevoNombre
    }

    set edad(nuevaEdad){
        this.edad = nuevaEdad
    }

    set dni(nuevoDni){
        this.dni = nuevoDni
    } 

    mostrar() {
        return console.log(matias)
    }

    esMayorDeEdad() {
        return this.edad >= 18;
    }
}

const matias = new Persona("Matias", 26, 123123123);