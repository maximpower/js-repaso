// Expresión de clase
// const Rectangulo = class R {

// }

// Declaración de clase
// clases declaradas con class no tienen Hoisting
class Rectangulo {

}
// Hoisting
// Y esto es cuando tomamos variables definidas con var
// y funciones con function
// y las lleva al comienzo del archivo
function Cuadrado(){}

// console.log(Cuadrado, Rectangulo);

const r = new Rectangulo();

// Para declararlas, se requiere la palabra new.
// Se ejecuta inmediatamente el método constructor.
// Se pueden pasar valores para instanciar la clase.
class Chancho {
    propiedad = 'mi propiedad'
    #hambre = false
    static estatico = 42
    constructor(estado = "feliz", hambre = false){
        this.estado = estado;
        this.#hambre = hambre
    }
    hablar(){
        console.log(`Soy un chancho ${this.estado} ${this.hambre ? 'con mucha hambre' : 'satisfecho'}`);
    }

    static comer(){
        console.log(this.estatico,'Estoy comiendo !');
    }
}

Chancho.comer();
const feliz = new Chancho('feliz');
// console.log(feliz.__proto__);
// feliz.hablar();
// console.log(feliz);
const triste = new Chancho('triste');
// triste.hablar();
const nose = new Chancho();
// nose.hablar();