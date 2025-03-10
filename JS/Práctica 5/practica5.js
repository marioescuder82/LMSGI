// Escribe un programa para la consola que le pida al usuario un número y sume todos los números desde 1 hasta ese número.

// Por ejemplo, si el usuario ingresa el número 5, el programa debe imprimir 15 (1+2+3+4+5). Si el usuario ingresa el número 10, el programa debe imprimir 55.

let numero = prompt("Escribe un número: ")

let res = 1

for (let i = 2; i <= numero; i++) {
    res += i
}

console.log(res)