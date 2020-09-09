import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'

function Subtotal() {
    const [{ basket }] = useStateValue();
    return (
        <div className="subtotal">
            {/* price */}
            <CurrencyFormat

                renderText={(value)=>(
                    <>
                        <p>Subtotal ({basket.lenght} items): <strong>{` ${value} `}</strong>
                        </p>

                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                   
                )}
                decimalScale={2}
                value = {getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />
            <button>Procede to Checkout</button>
        </div>
    )
}

export default Subtotal