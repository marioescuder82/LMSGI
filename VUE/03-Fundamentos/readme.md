# Fundamentos de Vue.js

## 2. Interpolación de Texto
La interpolación de texto en Vue.js se realiza utilizando las llaves dobles `{{ }}`. Permite mostrar datos dinámicamente en el HTML.

```html
<script setup>
	const mensaje = "Hola, mundo"
</script>

<template>
	<div id="app">
	  <p>{{ mensaje }}</p>
	</div>
</template>
```

## 3. v-bind
v-bind se utiliza para enlazar atributos de HTML a propiedades del modelo de datos. Se puede usar de forma abreviada con `:`

```html
<script setup>
	const imagenUrl = "imagen.jpg"
</script>

<template>
	<img v-bind:src="imagenUrl">
	<img :src="imagenUrl">
</template>
```

## 4. v-if, v-else y v-show

- **v-if**: Renderiza un bloque solo si la expresión es verdadera.
- **v-else**: Se usa junto con `v-if` y se renderiza si `v-if` es falso.
- **v-show**: Muestra u oculta el elemento basado en la expresión, pero no lo elimina del DOM.

```html
<div v-if="true">Este texto es visible.</div>
<div v-else>Este texto no lo es.</div>
<div v-show="true">Este texto se muestra.</div>
```

## 5. v-for

`v-for` se utiliza para renderizar listas. Se puede iterar sobre arrays o objetos.

```html
<script setup>
  const items = [
    {id: 0, nombre: "lapiz"},
    {id: 1, nombre: "raton"},
    {id: 2, nombre: "pizarra"}
  ]
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.nombre }}</li>
  </ul>
</template>
```

## 6. Eventos

Vue.js permite manejar eventos de manera sencilla usando la directiva `v-on`, que se puede abreviar como `@`.

```html
<script setup>
  const saludar = () => alert("Hola")
</script>

<template>
  <button @click="saludar">Saludar</button>
</template>
```

## 7. Ref

*   **ref** es una forma de trabajar con la reactividad de Vue 3.
*   **ref** toma el argumento y lo devuelve envuelto dentro de un objeto con una propiedad value, que luego puede usarse para acceder o cambiar el valor de la variable reactiva.
*   DOM: Cuando muta el estado reactivo, **el DOM se actualiza automaticamente.**
*   En el template no es necesario acceder al **.value**, ya que el valor de la variable reactiva se puede acceder directamente.

```html
<script setup>
  import { ref } from 'vue'

  const contador = ref(0)

  const incrementa = () => contador.value++
</script>

<template>
  <h2>{{ contador }}</h2>
  <button @click="incrementa">Incrementa</button>
</template>
```

## 8. Computed Properties

 Las propiedades computadas sirven para generar cálculos en nuestros componentes

```html
<script setup>
  import { ref, computed } from 'vue'

  const contador = ref(0)

  const incrementa = () => contador.value++

  const decrementa = () => contador.value--
  
  const estiloContador = computed(() => {
	if (contador.value > 0)
		return "text-success"
	else if (contador.value == 0)
		return "text-warning"
	else
		return "text-danger"
	})
</script>

<template>
  <h2 :class="estiloContador">{{ contador }}</h2>
  <button @click="incrementa">Incrementa</button>
  <button @click="decrementa">Incrementa</button>
</template>
```

