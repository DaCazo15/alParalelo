import { ref, onMounted } from "vue";

export default function useApiDolar(){

    const moneda = ref([])

    const priceDolar = async () => {
        const url = 'https://ve.dolarapi.com/v1/dolares';
        const response = await fetch(url);
        const data = await response.json();
        moneda.value = data
    }        

    onMounted(() => {
        priceDolar();
    })
    
    return{
        priceDolar,
        moneda
    }
}