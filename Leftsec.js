import React from 'react'
function LeftSec({imageURL,
     productName, 
     productDescription,
      tryDemo,
       learnMore,
       googlePlay,
        appStore

}) {
    return ( 
       
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-3'>
                    <img src={imageURL}></img>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                    <a href={tryDemo}>tryDemo</a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>learnMore</a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay}>
                        <img src="media\image\googlePlayBadge (1).svg"></img></a>
                    <a href={appStore}>
                        <img src="media\image\appstoreBadge (1).svg" style={{marginLeft:"50px"}}>
                        </img></a>
                        </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSec;