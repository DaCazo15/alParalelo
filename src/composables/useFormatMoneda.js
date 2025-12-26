import { ref } from "vue"
export default function useFormatCadena(){
    const tipoMoneda = ref('')

    const formatearCadena = (cantidad, check) => {
        tipoMoneda.value = !check ? 'en-US' : 'es-VE'
        return Number(cantidad).toLocaleString(tipoMoneda.value,{
            style: 'currency',
            currency: `${tipoMoneda.value === 'en-US' ? 'USD' : 'VES'}`
        })
    }
    return{
        formatearCadena
    }
}