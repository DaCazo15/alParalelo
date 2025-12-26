<script setup>

    defineEmits(['update:cantidad'])
    defineProps(['cantidad'])


</script>

<template>
    <div class="contenedor-cantidad">
        <label>Introduce un monto: </label>
        <input 
            type="text" 
            placeholder="Ej. 300"
            :value="`${cantidad > 0 ? cantidad : ''}`"
            @input="$emit('update:cantidad', $event.target.value)"
        >
    </div>
</template>

<style>
    .contenedor-cantidad{
        display: flex;
        flex-direction: column;
        align-items: left;
        font-family: var(--font);
    }
    .contenedor-cantidad label{
        margin-bottom: 10px;
        font-size: 2rem;
        font-weight: 500;
        text-transform: capitalize;
    }
    .contenedor-cantidad input{
        border: none;
        background-color: var(--gris-claro);
        font-size: 1rem;
        padding: 1rem;
        border-radius: 1rem;
        outline: none;
    }
</style>
