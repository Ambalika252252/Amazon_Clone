import React from 'react'
import "/CheckoutProduct.css";

function CheckoutProduct() {
    return (
        <div className="checkoutProduct">
             <img className="checkoutProduct__image" src={image}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title} </p>
            <p className="checkoutProduct__price">
                
            </p>
            </div>
        </div>
    )
}

export default CheckoutProduct
