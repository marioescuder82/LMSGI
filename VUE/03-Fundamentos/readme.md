# Fundamentos Vue 3 (composition api) | Vue Udemy
[#](#sintaxis-de-plantilla) Sintaxis de plantilla
-------------------------------------------------

*   Vue utiliza una sintaxis de plantilla basada en HTML que le permite vincular declarativamente el DOM.
*   Todas las plantillas de Vue son HTML sintácticamente válidas.
*   Debajo del capó, Vue compila las plantillas en un código JavaScript altamente optimizado.
*   Combinado con la reactividad, Vue es capaz de calcular la cantidad mínima de componentes a renderizar y aplicar la cantidad mínima de manipulaciones en el DOM.

[#](#interpolacion-de-texto) interpolación de texto
---------------------------------------------------

*   Interpolación de texto (bigote o llaves dobles) es una forma de insertar valores en una plantilla.

[#](#enlaces-de-atributos) Enlaces de atributos
-----------------------------------------------

*   Lo bigotes o llaves dobles no se pueden insertar dentro de los atributos HTML. En su lugar utilice una **`v-bind`** para enlazar el valor de un atributo.

Debido a que **`v-bind`** se usa con tanta frecuencia, tiene una sintaxis abreviada dedicada:

[#](#uso-de-expresiones-de-javascript) Uso de expresiones de JavaScript
-----------------------------------------------------------------------

*   Las expresiones de JavaScript se pueden usar en las plantillas de Vue.

Cada enlace solo puede contener una sola expresión , lo siguiente NO funcionará:

[#](#directivas) Directivas
---------------------------

*   Las directivas son atributos especiales con el prefijo **`v-`** .
*   El trabajo de una directiva es aplicar actualizaciones de forma reactiva al DOM

[#](#v-if) v-if
---------------

*   [doc v-if (opens new window)](https://vuejs.org/guide/essentials/conditional.html)
*   La directiva **`v-if`** se usa para mostrar o ocultar un elemento de la plantilla.

[#](#v-else) v-else
-------------------

*   Un elemento **`v-else`** debe seguir inmediatamente a un `v-if` o un `v-else-if` elemento; de lo contrario, no se reconocerá.

💔 Incorrecto:

[#](#v-show) v-show
-------------------

*   La directiva **`v-show`** se usa para mostrar o ocultar un elemento de la plantilla.
*   **`v-show`** solo cambia la propiedad display CSS del elemento.
*   En términos generales, **v-if** tiene costos de alternancia más altos mientras que **v-show** tiene costos de renderización inicial más altos. Así que prefiera **v-show** si necesita alternar algo con mucha frecuencia, y prefiera **v-if** si es poco probable que la condición cambie en el tiempo de ejecución.

[#](#v-for) v-for
-----------------

*   [doc v-for (opens new window)](https://vuejs.org/guide/essentials/list.html)
*   La directiva **`v-for`** se usa para iterar sobre una lista de elementos.
*   Para darle a Vue una pista para que pueda rastrear la identidad de cada nodo y, por lo tanto, reutilizar y reordenar los elementos existentes, debe proporcionar un atributo **key** único para cada elemento.

Objetos:

[#](#v-for-v-if) v-for v-if
---------------------------

*   [doc v-for v-if (opens new window)](https://vuejs.org/guide/essentials/list.html#v-for-with-v-if)
*   Cuando existen en el mismo nodo, **v-if** tiene una prioridad más alta que **v-for**.
*   Eso significa que la condición **v-if** no tendrá acceso a las variables del alcance de **v-for**:

Solución:

[#](#eventos) Eventos
---------------------

*   [doc eventos (opens new window)](https://vuejs.org/guide/essentials/event-handling.html)
*   Podemos usar la directiva **v-on**, que normalmente acortamos al símbolo **@**, para escuchar eventos DOM y ejecutar JavaScript cuando se activan. El uso sería **`v-on:click="handler"`** o con el atajo, **`@click="handler"`**.

Parámetros:

*   [doc Modificadores (opens new window)](https://vuejs.org/guide/essentials/event-handling.html#event-modifiers)

[#](#variables-reactivas) Variables reactivas
---------------------------------------------

Siguiendo el ejemplo:

[#](#ref) ref()
---------------

*   **ref** es una forma de trabajar con la reactividad de Vue 3.
*   **ref**: Es una referencia reactiva, en nuestro ejemplo necesitamos un entero que sea **"rastreable"**, por ende utilizaremos ref, una forma de trabajar con la reactividad de Vue 3.
*   **ref** toma el argumento y lo devuelve envuelto dentro de un objeto con una value propiedad, que luego puede usarse para acceder o mutar el valor de la variable reactiva.
*   DOM: Cuando muta el estado reactivo, **el DOM se actualiza automaticamente.**
*   En el template no es necesario acceder al **.value**, ya que el valor de la variable reactiva se puede acceder directamente.

[#](#practica) Práctica
-----------------------

*   Agrega un botón para disminuir el contador.
*   Agrega un botón para resetear el contador.
*   Pinta el contador en rojo cuando el valor sea menor a cero.
*   Pinta el contador en verde cuando el valor sea mayor a cero.

[#](#computed) Computed
-----------------------

*   [doc computed (opens new window)](https://vuejs.org/guide/essentials/computed.html)
*   Las propiedades computadas nos sirven para generar calculos en nuestros componentes, por ejemplo no se recomienda colocar demasiada lógica en nuestras plantillas HTML, ya que dificulta la interpretación de nuestros componentes.
*   Por eso, para la lógica compleja que incluye datos reactivos, se recomienda utilizar una propiedad calculada

TIP

*   En lugar de una propiedad calculada, podemos definir la misma función como un método. Para el resultado final, los dos enfoques son exactamente iguales. Sin embargo, **la diferencia es que las propiedades calculadas se almacenan en caché en función de sus dependencias reactivas.**
*   Una propiedad calculada solo se volverá a evaluar cuando algunas de sus dependencias reactivas hayan cambiado.

Es necesario invocar al método

[#](#bootstrap-5) Bootstrap 5:
------------------------------

*   CDN: revísalo en la página oficial: [getbootstrap (opens new window)](https://getbootstrap.com/)
*   Puedes agregarlo en el index.HTML

[#](#practica-2) Practica
-------------------------

*   Agrega un array y su respectivo método y botón add para almacenar los números favoritos del usuario.
*   Pinta ese array utilizando **v-for**.
*   Utiliza **:disabled** en el botón add, para que solo se pueda presionar si el array no contiene números repetidos. (utiliza una propiedad computada).

**:disabled** si es true el botón se bloquea:

Solución:

[#](#con-bootstrap-5) Con Bootstrap 5
-------------------------------------

[#](#deploy) Deploy
-------------------

*   [netlify.com (opens new window)](https://www.netlify.com/)

[#](#archivos-del-curso-2) Archivos del curso
---------------------------------------------

*   [github repo (opens new window)](https://github.com/bluuweb/mi-primer-proyecto-con-vu3)

Last Updated: 12/8/2022, 15:53:28