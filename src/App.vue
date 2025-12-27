<script setup>
  import { computed, ref, reactive } from 'vue';

  import useApiDolar from './composables/useAPI';

  import Moneda from './components/Moneda.vue';
  import Cantidad from './components/Cantidad.vue';
  import Boton from './components/Boton.vue';
  import Resultado from './components/Resultado.vue';

  import dolarImg from './assets/dollar.png';
  import bolivarImg from './assets/bolivar.png';


  const { priceDolar, moneda } = useApiDolar()

  const cantidad = ref(0)
  const check = ref(false)
  const contenedorResultado = ref(false)
  const imagen = computed(() => check.value ? dolarImg : bolivarImg);

  const cambio = reactive({
    oficial: 0,
    paralelo: 0
  })

  const cambioCheck = () => {
    check.value = !check.value
  }

  const precioMoneda = computed(() => {
    const oficial = moneda.value.find(item => item.fuente === "oficial");
    const paralelo = moneda.value.find(item => item.fuente === "paralelo");

    return {
      oficial: oficial?.promedio ?? "Cargando...",
      paralelo: paralelo?.promedio ?? "Cargando..."
    };
  });

  const calcularCantidad = () => {
    if (check.value){
      cambio.oficial = (precioMoneda.value.oficial * cantidad.value).toFixed(2);
      cambio.paralelo = (precioMoneda.value.paralelo * cantidad.value).toFixed(2);
    }else{
      cambio.oficial = (cantidad.value / precioMoneda.value.oficial).toFixed(2);
      cambio.paralelo = (cantidad.value / precioMoneda.value.paralelo).toFixed(2);
    }
  }
  const mostrarResultado = () => {
    if (cantidad.value === 0) return;
    calcularCantidad();
    contenedorResultado.value = true
  }
  const ocultarResultado = () => {
    contenedorResultado.value = false
    cantidad.value = 0
    calcularCantidad()
  }

</script>

<template>
  <h1 class="titulo">Al Cambio</h1>
  <div class="contenedor-principal">
    <div class="contenedor">
      <div>
        <img :src="imagen" :alt="imagen">
        <input 
          type="checkbox" 
          @click="cambioCheck(); calcularCantidad();"
          class="tipo-monedad"
        >
      </div>
      <Moneda 
        :precioMoneda="precioMoneda" 
      />
      <Cantidad 
        v-model:cantidad="cantidad"
      />
      <div class="contenedor-btn">
        <Boton
        class="btn-calcular"
        @click="mostrarResultado"
      >{{contenedorResultado ? 'Ocultar' : 'Calcular'}}</Boton>
      <Boton
        class="btn-limpiar"
        @click="ocultarResultado"
      >Limpiar</Boton>
      </div>
    </div>
    <div class="contenedor-resultado" v-if="contenedorResultado">
      <Resultado 
        :cambio="cambio"
        :check="check"
      />
    </div>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
  :root{
    --blanco: #fff;
    --rojo: #940707;
    --gris-claro: #e1e1e1;
    --gris-oscuro: #acacac;
    --verde: #0cb46b;
    --verde-claro: #72edb8;
    --font: "Rubik", sans-serif;
  }
  body {
    background-color: var(--gris-claro);
    font-family: var(--font);
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
  }

  .titulo{
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: #000 0px 0px 5px;
    font-family: var(--font);
    color: var(--verde);
    font-size: 4rem;
  }
  .contenedor-principal{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .contenedor {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--verde);
    padding: 2rem 3rem 2rem 4rem;
    border-radius: 1rem;
    gap: 1.5rem;
    width:auto;
    max-width: 500px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }
  .contenedor img {
    width: 10rem;
    height: auto;
    object-fit: contain;
    align-self: center;
  }
  .contenedor-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
  }
  .btn-calcular{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-limpiar{
    background-color: var(--rojo);
  }
  .btn-limpiar:hover{
    background-color: var(--verde);
    width: calc(80%-4px);
    border: 4px solid var(--rojo);
  }
  .contenedor-resultado{
    margin-left: -1rem;
    width: auto;
    background-color: var(--verde-claro);
    padding: 2rem 3rem 2rem 4rem;
    border-radius: 1rem;
    gap: 1.5rem;
    border-right: solid 1rem var(--verde);
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }
  @media(max-width: 500px){
    .contenedor-principal{
      flex-direction: column;
    }
    .contenedor {
      padding: 2rem 3rem;
    }
    .contenedor-resultado{
      padding: 2rem 3rem;
      margin-left: 0;
      margin-top: -1.5rem;
      padding-bottom: -1.5rem;
      border: none;
      border-bottom: solid 1rem var(--verde);
    }
  }
</style>
