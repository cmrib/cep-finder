import './Displayer.css'

interface CepDataProps {
    cepData: {
        cep: string;
        logradouro: string;
        localidade: string;
        uf: string;
    }
}

export function Displayer({ cepData }: CepDataProps) {
    return (
        <div className="displayer-container">
            <strong>CEP: <span>{cepData.cep}</span></strong>
            <strong>Logradouro: <span>{cepData.logradouro}</span></strong>
            <strong>Cidade: <span>{cepData.localidade}</span></strong>
            <strong>Estado: <span>{cepData.uf}</span></strong>
        </div>
    )
}