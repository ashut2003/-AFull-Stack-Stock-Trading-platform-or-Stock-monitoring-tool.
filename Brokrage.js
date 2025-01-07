import React from 'react'
function Brokrage() {
    return ( 
        <div className='container'>
           <div className='row text-center'>
         <img src='media/image/homeHero.png' alt='Hero Image' className='mb-5'/>
         <h1 className='mt-5'>
         Invest In Everything
         </h1>
         <p>Online Platform to invest in Stocks , derivatives , mutual funds , and more....</p>
         <button className='p-2 btn btn-primary fs-5' style={{width:"25%" , margin:"0 auto", backgroundColor:"blue"}}>Signup Now</button>
         </div> 
            
            <div className='row p-5 mt-5 text-center border-top'>
            <div className='col-8 p-4'>
                <a href="" style={{textDecoration:"none" }} ><h3 className='fs-5'>Brokerage Calculator</h3></a>

                <ul style={{textAlign:"left" , lineHeight:"2.5"}} className='text-muted'>
                  <li>call & trade and RMS auto squareoff:Additional charge of 50 + GST per Order.</li>

                  <li>Digital Contract notes will we sent via e-email.</li>

                  <li>physical copies of contract notes, if required, shall be charged420 per contract note. Courier charges apply.</li>

                 <li> For NRI account (non-PIS), 0.5% or 100 per exchange order for equility (whichever is lower).</li>

                  <li>For NRI account (non-PIS), 0.5% or 200 per exchange order for equility (whichever is lower).</li>
                  <li>If the account is in debitbalance, any order placed will be charged 440 per executed order 
                  instead of ₹20 per executed order. </li>
                </ul>
            </div>
            <div className='col-4 p-4'>
            <a href="" style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
          
            </div>
            
            </div>
            </div>
     );
}

export default Brokrage ;