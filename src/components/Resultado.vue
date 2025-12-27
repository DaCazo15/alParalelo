<script setup>
    import useFormatCadena from '../composables/useFormatMoneda';

    const { formatearCadena } = useFormatCadena()

    const props = defineProps({
        cambio: {
            type: Object,
            required: true
        },
        check: {
            type: Boolean,
            required: true
        }
    })
</script>

<template>
    <div>
        <div class="contenedor-resultado-calculado">
            <h2>Dolar Oficial</h2>
            <label>{{ formatearCadena(props.cambio.oficial, props.check) }}</label>
        </div>
        <div class="contenedor-resultado-calculado">
            <h2>Dolar paralelo</h2>
            <label>{{ formatearCadena(props.cambio.paralelo, props.check) }}</label>
        </div>
    </div>
</template>

<style>
    .contenedor-resultado-calculado h2{
        margin-bottom: 10px;
        font-size: 2rem;
        font-weight: 500;
        text-transform: capitalize;
    }
    .contenedor-resultado-calculado label{
        margin-bottom: 10px;
        font-size: 2rem;
        font-weight: 500;
        text-transform: capitalize;
        color: var(--verde);
    }
    @media(max-width: 500px){
        .contenedor-resultado-calculado label{
            font-size: 1.2rem;
        }
        .contenedor-resultado-calculado h2{
            font-size: 1.2rem;
        }
    }
</style>
