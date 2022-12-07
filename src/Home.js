import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB438684220_.jpg" alt="" />

            <div className="home__row">
                <Product 
                    id="12353424"
                    title="The Lean Startup"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                 />
                <Product
                    id="34324535"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl"
                    price={239.99}
                    image="https://m.media-amazon.com/images/I/418ARPRC+tL._SY300_SX300_.jpg"
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product
                    id="12434134"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={39.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product
                    id="38479243"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product
                    id="325341435"
                    title="New Apple iPad Pro (12.9-inch,Wi-Fi,128GB) - Silver (4th Generation)"
                    price={99.99}
                    image="https://m.media-amazon.com/images/I/41viAWscfNS._SY445_SX342_QL70_FMwebp_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="23654243"
                    title="Acer CB342CK 34 Inch (86.36 Cm) IPS Ultrawide (21:9) QHD 3440 X 1440 LED Monitor I AMD Radeon Freesync Technology I HDR Ready, 1MS VRB I 75Hz Refresh | Pivot I Eye Care Features, Silver "
                    price={500.99}
                    image="https://m.media-amazon.com/images/I/71IqWSIga-L._SL1500_.jpg"
                />  
            </div>

        </div>

    </div>
  )
}

export default Home