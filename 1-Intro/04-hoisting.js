'use strict' //Modo estricto en JS.

//concepto Hoisting.
// Las declaraciones de una variable puede estar en cualquier lugar del documento.
// un dato curioso es que podemos usar una variable primero y despúes declararla.
//Con Let no aplica o funciona el concepto de Hosting por lo cual deberá ser inicializada al inicio.
var x;   //1.declarar variable.
x = 13; //2.inicializar variable
console.log(x);

y=77;   //2.inicializar variable
console.log(y);
var y;  //1.declarar variable.

/*
z=98;   //2.inicializar variable
console.log(z);
let z;  //1.declarar variable.
// Esto no es posible con let, ya que mostrará error.
// */

let j;  //1.declarar variable.
j=104;   //2.inicializar variable
console.log(j);