import React from 'react'
function Rightsec({imageURL,
    productName, 
    productDescription,
     
      learnMore}) {
    return ( 
        <div className='container'>
        <div className='row'>
           
            <div className='col-6 p-5 mt-5'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <a href={learnMore} style={{marginLeft:"50px"}}>learnMore</a>
                </div>
                
                <div className='col-6 p-3'>
                <img src={imageURL}></img>
                
                    
            
            </div>
        </div>
    </div>
     );
}

export default Rightsec;