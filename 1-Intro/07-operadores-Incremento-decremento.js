//Operadores de Incremento / Decremento.
//Video 20.

let a, b, c;
a = 0;

//Pre-Incremento.
++a;
console.log(a);
//Post-Incremento.
a++;
console.log(a);

//Pre-Decremento.
--a;
console.log(a);

//Post-Decremento.
a--;
console.log(a);

// Pruebas
a=5;
b=2;
c= ++a * b--;//Se incrementa el a por lo cual pasa al valor de 6
            // b queda en 2 porque utiliza un postincremento, hasta volverlo a usar cambiará el valor a 1
console.log(c);// ejemplo: c= 6 * 2;
