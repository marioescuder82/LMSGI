// Escribe una función que reciba un array de números y devuelva solo los números pares
let array = [1,4,2,6,8,19,45,6]

function pares(array) {
    let array_res = []

    array.forEach(function(n) {
        if (n % 2 == 0){
            array_res.push(n)
        }
    });

    return array_res;
}

console.log(pares(array))

///
function remplaza(array, valor) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 6) {
            array[i] = valor
        }
    }
}

remplaza(array, 69)

console.log(array)

///
array = [1, 2, 3, 4]

function rotar(array) {
    n = array[array.length - 1]
    for (let i = array.length - 1; i > 0; i--) {
        array[i] = array[i-1]
    }
    array[0] = n
}

rotar(array)

console.log(array)

///
array = ["manzana", "pera", "manzana"]

function contar(array) {
    let map = new Map()
    for (let i = 0; i < array.length; i++) {
        if (map.has(array[i])) {
            map.set(array[i], map.get(array[i]) + 1)
        }
        else {
            map.set(array[i], 1)
        }
    }
    return(map)
}

console.log(contar(array))