import './card.css';

interface CardProps {
    preco: number,
    titulo: string,
    imagem: string

}

export function Card({preco,titulo, imagem} : CardProps){
    return(
        <div className="card">
            <img src={imagem}/>
            <h2>{titulo}</h2>
            <p><b>Valor:</b>{preco}</p>
        </div>

    )
}