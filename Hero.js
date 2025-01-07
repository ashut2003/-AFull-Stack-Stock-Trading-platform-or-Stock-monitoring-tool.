import React from 'react'
function Hero () {
    return ( 
        
        <div className='container p-5'>
         <div className='row text-center'>
         <img src='media/image/homeHero.png' alt='Hero Image' className='mb-5'/>
         <h1 className='mt-5'>
         Invest In Everything
         </h1>
         <p>Online Platform to invest in Stocks , derivatives , mutual funds , and more....</p>
         <button className='p-2 btn btn-primary fs-5' style={{width:"25%" , margin:"0 auto", backgroundColor:"blue"}}>Signup Now</button>
         </div>
        </div>
     );
}

export default Hero ;