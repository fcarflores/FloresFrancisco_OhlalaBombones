import Card from '../Card/Card'
import React from "react";

const ListProducts = ({children}) => {
    let Products = {
        titulo: 'Bombones surtidos',
        precio: 450,
        stock: 5,
    }
    return(
        <div>
            <h2> {children} </h2>
            <Card data= {Products}/>
        </div>
    )
}
    
export default ListProducts;