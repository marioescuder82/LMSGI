# XML

## ¿Qué es XML?
- **Definición**: XML es un lenguaje de marcado que se utiliza para almacenar y transportar datos. Es legible tanto para humanos como para máquinas.
- **Estructura**: Utiliza etiquetas para definir elementos, similar a HTML, pero es más flexible y permite crear etiquetas personalizadas.

## Características Principales
1. **Extensibilidad**: Permite definir tus propias etiquetas y estructuras, lo que lo hace muy versátil.
2. **Legibilidad**: Los documentos XML son fáciles de leer y entender debido a su formato estructurado.
3. **Jerarquía**: Los datos se organizan en una estructura jerárquica (árbol), lo que facilita la representación de relaciones complejas.
4. **Interoperabilidad**: XML es ampliamente utilizado para intercambiar datos entre diferentes sistemas y plataformas.

## Sintaxis Básica
- **Declaración XML**: Cada documento XML debe comenzar con una declaración que define la versión y la codificación.
  
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  ```

- **Etiquetas**: Los elementos se definen con etiquetas de apertura y cierre.
  
  ```xml
  <libro>
      <titulo>Ejemplo de XML</titulo>
      <autor>Autor Ejemplo</autor>
  </libro>
  ```

- **Atributos**: Los elementos pueden tener atributos que proporcionan información adicional.
  
  ```xml
  <libro genero="ficción">
      <titulo>Ejemplo de XML</titulo>
  </libro>
  ```

## Usos Comunes de XML
- **Almacenamiento de Datos**: Utilizado para guardar configuraciones, datos de aplicaciones y contenido multimedia.
- **Intercambio de Datos**: Facilita la comunicación entre diferentes aplicaciones y servicios web.
- **Documentación**: XML se utiliza en la creación de documentos estructurados, como XHTML y SVG.

## Herramientas y Tecnologías Relacionadas
- **XSLT**: Para transformar documentos XML en otros formatos, como HTML.
- **DOM y SAX**: Métodos para procesar y manipular documentos XML en lenguajes de programación.

## Buenas Prácticas
- **Validación**: Utiliza DTD o XML Schema para validar la estructura de los documentos XML.
- **Nombres descriptivos**: Usa nombres de etiquetas que describan claramente el contenido.
