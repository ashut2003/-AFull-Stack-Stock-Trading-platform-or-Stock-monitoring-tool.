import React from 'react'

import Hero from './Hero';
import Leftsec from './Leftsec';
import Rightsec from './Rightsec';
import Universe from './Universe';

// import Footer from '../Footer';
// import Navbar from '../Navbar';
function ProductPage() {
    return ( 
        <>
        <Hero/>
        <Leftsec
        imageURL="media\image\kite.png"
        productName="Kite"
        productDescription="Our ultra fast flagship trading platform with streaming market data advanced chart, an elegant UI, and more. Enjoy the kite exprience seamlessly on your android and iOS devices"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
        />
         <Leftsec
        imageURL="media\image\coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online , commission -free, delivered directly to your Demat account. Enjoy the investment exxperience on your Android and iOS device."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
        />
        <Rightsec
         imageURL="media\image\console.png"
         productName="Kite connect API"
         productDescription="Build a powerfull trading platform ans experience with our super simple HTTP/JSON. If you are a startup, build your innvestment app and showcase it to our clientbase."
         
         learnMore=""
        />
       
        <Leftsec
        imageURL="media\image\varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lesson with in-depth coverege and illustration. Content is broken down into bite-size cards to helo you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
        />
        <Rightsec
         imageURL="media\image\kiteconnect.png"
         productName="Console"
         productDescription="An easy to grasp, collection of stock market lesson with in-depth coverege and illustration. Content is broken down into bite-size cards to helo you learn on the go."
         
         learnMore=""
        />
       <p className='text-center mt-5 mb-5'>Want to know about our technology stack? check out the Zerodha.tech blog.</p>
       <Universe/> 
        </>
     );
}

export default ProductPage ;