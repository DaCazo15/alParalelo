<script setup>
    const props = defineProps({
        precioMoneda: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <div class="contenedor-moneda">
      <h2>Dolar Oficial</h2>
      <label>${{ props.precioMoneda.oficial }}</label>
    </div>
    <div class="contenedor-moneda">
      <h2>Dolar paralelo</h2>
      <label>${{ props.precioMoneda.paralelo }}</label>
    </div>
</template>

<style>
    .contenedor-moneda{
        display: flex;
        flex-direction: column;
        align-items: left;
        margin-left: -11.2rem;
        font-family: var(--font);
    }
    .contenedor-moneda h2{
        margin-bottom: 10px;
        font-size: 1.2rem;
        font-weight: 500;
        text-transform: capitalize;
    }
    .contenedor-moneda label{
        color: var(--blanco);
        font-size: 1.8rem;
        font-weight: 900;
    }
</style>
