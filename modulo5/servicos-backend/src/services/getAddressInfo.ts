import axios from "axios";

export async function getAddressInfo(cep:string) {
    try {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        const result = {
            logradouro: data.logradouro,
            bairro:data.bairro,
            cidade:data.localidade,
            estado:data.uf
        }
        return result
    } catch (error:any) {
        throw new Error(error.message);
    }
}