import React,{useState} from 'react'
import Button from '@mui/material/Button'

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial)
    
    const sumar = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    const restar = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const onAdd = () => {
        console.log ( `Agregaste $ {(count)} productos al carrito` )
    }
    return(
        <div>
            <div>
            <Button onClick={restar}>-</Button>
            <p> {count} </p>
            <Button onClick={sumar}>+</Button>
            </div>
            <Button onClick={onAdd}> Agregar al carrito </Button>
        </div>
    )
}

export default ItemCount