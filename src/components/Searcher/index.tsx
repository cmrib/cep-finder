import { useState } from 'react';
import './Searcher.css';
import { Displayer } from '../Displayer'

interface CepData {
    cep: string;
    logradouro: string;
    localidade: string;
    uf: string;
}

export function Searcher() {

    const [cep, setCep] = useState(0)
    const [cepResponseData, setResponseData] = useState({} as CepData)

    async function handleSumbmit(event: React.FormEvent) {
        event.preventDefault()
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const cepResponse = await response.json()
        setResponseData(cepResponse)
    }

    return (
        <div className="searcher-container">
            <form onSubmit={handleSumbmit}>
                <input type="number" pattern="[0-9]" placeholder="00000-000" onChange={(e) => {
                    setCep(Number(e.target.value))
                }} />
                <button type="submit" >Buscar CEP</button>
            </form>

            <Displayer cepData={cepResponseData} />
        </div>
    )
}