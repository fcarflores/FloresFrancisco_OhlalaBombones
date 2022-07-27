import ItemCount from '../ItemCount/ItemCount'

export default function Card({data}) {
    const {titulo, precio, stock} = data
    
    return (
        <div className="card">
            
                <h2>{titulo}</h2>
                <p>Precio : $ {precio}</p>
                <ItemCount stock={stock} initial={1}/>
            
        </div>
    )
}


