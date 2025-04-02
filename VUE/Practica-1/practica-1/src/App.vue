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