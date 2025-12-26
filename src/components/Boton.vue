<template>
    <div class="btn">
        <slot></slot>
    </div>
</template>

<style>
    .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--gris-oscuro);
        width: 80%;
        padding: 1rem;
        border-radius: 1rem;
        font-family: var(--font);
        font-weight: 500;
        color: var(--blanco);
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        margin-top: -.5rem;
    }
    .btn:hover{
        background-color: var(--verde);
        width: calc(80%-4px);
        border: 4px solid var(--blanco);
    }
</style>
