import React from 'react'
import CurrencyFormat from "react-currency-format"
import "./Checkout.css"

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                </div>

            </div>
            <div className="checkout__right">
                <CurrencyFormat
                    value={2456981}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    renderText={value =>
                        <div className="subtotal">
                            <p>Subtotal (1 items): {value}</p>
                            <small className="subtotal__gift">
                                <input type="checkbox"/>
                                <label>This order contains a gift</label>
                            </small>
                            <button>Proceed to Checkout</button>
                        </div>
                    }
                />
            </div>
        </div>
    )
}

export default Checkout
