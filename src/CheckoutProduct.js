import React from 'react'
import "./CheckoutProduct.css"
import {useStateValue} from "./StateProvider";

const CheckoutProduct = ({id, image, title, price, rating }) => {
    const [{basket}, dispatch] = useStateValue()
    const removeToBasket = () => {
        dispatch({
            type: "BASKET_TO_REMOVE",
            id
        })
    }
    return (
        <div className="checkoutProduct">
            <img
                src={image}
                className="checkoutProduct__image"
            />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <strong className="checkoutProduct__price">
                    {price}
                </strong>
                <div className="checkoutProduct__rating">
                    {new Array(rating).fill("").map((_, i) => (
                        <p key={i}>🌟</p>
                    ))}
                </div>
                <button onClick={removeToBasket}>Remove from basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
