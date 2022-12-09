import React from 'react'
import Header from './Header'
import './Checkout.css'
function Checkout() {
  return (
    <>
        <Header/>
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                </div>
            </div>
            <div className="checkout__right">
                <h2>The Subtotal will go here</h2>
            </div>
        </div>
    </>
  )
}

export default Checkout
