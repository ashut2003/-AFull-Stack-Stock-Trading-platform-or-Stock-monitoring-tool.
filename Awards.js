import React from 'react'
function Awards () {
    return ( 
      <div className='container mt-5 mb-5'>
        <div className='row'>
            <div className='col-6 p-5'>
                <img src='media/image/largestBroker.svg'/>
            </div>
            <div className='col-6 p-5 mt-5'> 
                <h1>Largest Stock broker in India</h1>
                <p className='mb-5'>2+ million zerodha clients contribute to over 15% of all retail order volumes inn india daily by trading and investing in:</p>
                <div className='row'>
                    <div className='col-6'>
                    <ul>
                    <li>
                       <p>Futures and Options</p> 
                    </li>
                    <li>
                       <p>Commodity derivatives</p> 
                    </li>
                    <li>
                       <p>Currency derivatives</p> 
                    </li>
                    
                </ul>
                    </div>
                    <div className='col-6'>
                    <ul>
                    <li>
                       <p>Stocks & IPOs</p> 
                    </li>
                    <li>
                       <p>Direct Mutual Funds</p> 
                    </li>
                    <li>
                       <p>Bonds and Gov. Securities</p> 
                    </li>
                    
                </ul>
                    </div>
                </div>
               <img src='media\image\pressLogos.png' style={{width:"90%"}}/> 
            </div>
        </div>
      </div>
     );
}

export default Awards ;