import React from 'react'
function Hero() {
    return ( 
        //bootstrap ka full use hai class or id bannae me
        <section className='container-fluid ' id="supportHero">
        <div className=' p-5 ' id="supportWrapper">
           <h4>Support Portal

           </h4>
            <a href=" " style={{textDecoration:"none" ,fontSize:"20px"}}>Track Ticket</a>
            </div>

            <div className='row p-5 m-3' >
            <div className='col-6 p-5 ' >
                <h1 className='fs-3'>Search  for an Answer or browser help topics to create a ticket</h1>
                <input placeholder='eg. how do I activate F&O, why is my order getting rejected '/>
                <br/>
               <a href=" " >Track Account Opening</a>
               <a href=" " >Track Segment Activation</a>
               <a href=" " >Intraday margin</a>
               <a href=" "> Kite user manual</a>
                 </div>
            <div className='col-6 p-5 ' > 
                <h1 className='fs-3'>Featured</h1>
                <ol>
                    <li><a href=" " >Current Takeover and Delisting january 2024</a></li>
                    <li><a href=" " >Latest Intraday leverage  MIS & CO</a></li>
                </ol>
                
                
            </div>
          
            
            </div>
            </section>
     );
}

export default Hero;