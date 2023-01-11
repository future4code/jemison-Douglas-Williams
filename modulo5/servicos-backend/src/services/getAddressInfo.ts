import axios from 'axios';

export const getAddressInfo = async (cep: string) => {
    const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    
    return `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
}