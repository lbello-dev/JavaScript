/*CONCEPTOS: 
 Operadores Relacionales, 
 Operadores de igualdad,
 Operadores de Igualdad Estricta
 String Interpolación*/

//Operadores Relacionales (comparación)
let a=5;
let b="5";

console.log(a);
console.log(b);
console.log(typeof a);
console.log(typeof b);

//console.log( a + Number(b));

//Operadores de igualdad.
//(Solo compara valores, y hace una conversión si es necesario)
console.log("a == b ->", a==b);
//String interpolación.
console.log(`${a} == ${b} ->${a==b}`);

//Operadores de igualdad estricta o exacto.
//(Solo compara valores, y hace una conversión si es necesario)
console.log("a === b ->",a===b);
//String interpolación.
console.log(`${a} === ${b} ->${a===b}`);

//String Interpolación.

//Las comillas permite crear strings y con ${} internamente podremos 
// hacer aritmeticas o llamar valores de variables.

console.log(`${a} === ${b} -> ${a===b}` );

//Operador distinto
//Compara valor y convierte el tipo de dato si es necesario, esta caso es no lo detecta como distinto, ya que es transformado.
console.log(`${a} != ${b} -> ${a != b}`);

//Operador distinto exacto, este casoi detecta que si es distinto por el tipo de dato.
//Compara valor yel tipo de dato
console.log(`${a} !== ${b} -> ${a !== b}`);

//Operador menor que
console.log(`${a} < ${b} -> ${a < b}`);

//Operador menor o igual que
console.log(`${a} <= ${b} -> ${a <= b}`);

//Operador mayor que
console.log(`${a} > ${b} -> ${a > b}`);

//Operador mayor o igual que
console.log(`${a} >= ${b} -> ${a >= b}`);