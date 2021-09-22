// funciones que se DECLARAN con la palabra reservada function
function Fn(){
    //{this.prop = 'propiedad'}
    // Asigna valores que tengan prop
    this.prop = 'propiedad'
    // return 'chanchito feliz';
}

Fn.prototype.lala = function FuncionDePrototipo(){}
//Si se define con new, no hace caso de ningún return
//return this es lo que hace.
const r = new Fn();
// console.log(r.__proto__);

// fat arrow function
console.log(this);
const fatFn = () => { //NO TIENEN CONTEXTO DE THIS!!!!
    this.prop = 'lala';
}

const r1 = fatFn();
console.log(r1);

//RETURN IMPLÍCITO
const fnR = () => 2

console.log(fnR());

