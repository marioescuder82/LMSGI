let nombre = "Mario"
let edad = 18

if (edad >= 18) {
    console.log(`Hola, soy ${nombre} y soy mayor de edad.`)
}
else {
    console.log(`Hola, soy ${nombre} y soy menor de edad.`)
}

let mensaje = edad < 18 ? "menor" : "mayor";
console.log(`Hola, soy ${nombre} y soy ${mensaje} de edad.`)

for (let i = 1; i <= edad; i++) {
    console.log(i)
}

let i=1
while (i <= edad) {
    console.log(i)
    i++
}