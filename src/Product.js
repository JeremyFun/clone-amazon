import React from 'react'
import "./Product.css"
import {useStateValue} from "./StateProvider";

const Product = ({id, title, price, rating, image}) => {
    const [ {basket}, dispatch ] = useStateValue()
    const addToBasket = () => {
        dispatch({type: 'ADD_TO_BASKET', item: {id, title, price, rating, image}})
    }
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">
                    {title}
                </p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {new Array(rating).fill("").map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image}
                 alt=""
            />
            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    )
}

export default Product
