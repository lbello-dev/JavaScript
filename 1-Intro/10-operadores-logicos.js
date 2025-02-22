//OPERADORES LOGICOS
// && and
// || or
// ! not


let a = true;
let b = false;

console.log(a);
console.log(b);

//Operadores Lógicos  && (and)
//Regresa verdadero si ambos operados son verdaderos.
console.log(`${a} && ${b} -> ${a && b}`);

//Operador Lógicos  || (or)
//Regresa verdadero si cualquiera de los operando es verdadero
console.log(`${a} || ${b} -> ${a || b}`);

//Operador Lógicos  ! (not)
//Operador unario, solo requiere un valor y no compara.
// Invierte el valor evaluado. (booleano)
console.log(`!${a} -> ${!a}`);


//Ejemplo vara valorar RangeError.
let minimo = 0, maximo = 5;
let dato = 3;
let dentroRango = dato >= minimo && dato <= maximo;

console.log(dentroRango);
