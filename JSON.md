# JSON

## ¿Qué es JSON?

**JSON** (JavaScript Object Notation) es un formato ligero de intercambio de datos que es fácil de leer y escribir tanto para humanos como para máquinas. Se utiliza comúnmente para enviar datos entre un servidor y un cliente.

## Estructura de JSON

JSON se basa en dos estructuras principales:

1. **Objetos**: Son colecciones de pares clave-valor. Se definen usando llaves `{}`.
   - Ejemplo:
     ```json
     {
       "nombre": "Juan",
       "edad": 25
     }
     ```

2. **Vectores**: Son listas ordenadas de valores. Se definen usando corchetes `[]`.
   - Ejemplo:
     ```json
     [
       "manzana",
       "banana",
       "naranja"
     ]
     ```

## Tipos de Datos en JSON

- **Cadenas de texto**: Se encierran entre comillas dobles.
- **Números**: Se representan sin comillas.
- **Booleanos**: `true` o `false`.
- **Nulos**: Representado como `null`.
- **Objetos**: Como se describió anteriormente.
- **Vectores**: Como se describió anteriormente.

## Ejemplo Completo de JSON

```json
{
  "persona": {
    "nombre": "Ana",
    "edad": 30,
    "esEstudiante": false,
    "materias": ["Matemáticas", "Historia", "Programación"]
  }
}
```

## Uso de JSON

- **Intercambio de Datos**: JSON es ampliamente utilizado en aplicaciones web para intercambiar datos con servidores.
- **APIs**: Muchas APIs utilizan JSON para enviar y recibir datos.
- **Configuraciones**: Se usa en archivos de configuración para aplicaciones.

#Ventajas de JSON

- **Ligero**: Menos pesado que otros formatos como XML.
- **Legible**: Fácil de entender para los humanos.
- **Compatible**: Se utiliza en muchos lenguajes de programación, no solo en JavaScript.