import { useState } from 'react';


export function useForm(initialState) {

    const [form, setForm] = useState(initialState);

    const onChange = (e) => {
        const { name, value } = e.target //desestruturação do event.target.name e event.target.value
        setForm({...form, [name]: value }) //[name] => sintaxe de [] para acessar propriedades de objetos
    }

    const clear = () => {
        setForm(initialState) //limpar inputs
    }

    return [form, onChange, clear];
}
