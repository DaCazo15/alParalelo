<script setup>
    const props = defineProps({
        precioMoneda: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <div class="contenedor-tasa">
        <div class="contenedor-moneda">
          <h2>Dolar Oficial</h2>
          <label>${{ props.precioMoneda.oficial }}</label>
        </div>
        <div class="contenedor-moneda">
          <h2>Dolar paralelo</h2>
          <label>${{ props.precioMoneda.paralelo }}</label>
        </div>
    </div>
</template>

<style>
    .contenedor-tasa{
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        width: 100%;
    }
    .contenedor-moneda{
        display: flex;
        flex-direction: column;
        font-family: var(--font);
        width: auto;
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
    @media(max-width: 500px){
        .contenedor-tasa{
            width: 100%;
        }
        .contenedor-moneda{
            margin-left: 0;
        }
        .contenedor-moneda label{
            font-size: 1.5rem;
        }
    }
</style>
