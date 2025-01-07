import React from 'react'
function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-bottom text-center'>
                <h1>Pricing</h1>
                <h3 className='text-muted fs-5 mt-3'>
                   Free equality investment and flat ₹20 traday and F&O trades
                </h3>
            </div>
            
            <div className='row p-5 mt-5 text-center'>
            <div className='col-4 p-4'>
                <img src="media\image\pricingEquity.svg"/>
                <h1 className='fs-3'>Free Equity Delivery</h1>
                <p className='text-muted'>All Equity delivery investment(NSE, BsE)
                    are absolutely free - ₹0 brokrage
                </p>
            </div>
            <div className='col-4 p-4'>
            <img src="media\image\intradayTrades.svg"/>
                <h1 className='fs-3'>Intraday and F&O trades</h1>
                <p className='text-muted'>
                    Flat Rs. 20 or 0.03% (whichever is lower ) per executed order on 
                    Intraday trades across equity, currency and commudity trades.
                </p>
            </div>
            <div className='col-4 p-4'>
            <img src="media\image\pricingEquity.svg" />
                <h1 className='fs-3'>Free Direct MF</h1>
                <p className='text-muted'>
                All Equity delivery investment(NSE, BsE)
                are absolutely free - ₹0 brokrage
                </p>
            </div>
            </div>
            <div className='row p-5 mt-5'>
                <div className='col-6 p-5'>
                    <p>We kick-started on the 15th of august, 2010 with the goal of
                        breaking all barriers and investord face in India in term of 
                        cost, support and Technology. We needed the company 
                        Zerodha, a combination of zerodha and "Rodha", the Sanskrit word for Barrier..
                    </p>
                    <p>Today our disruptive pricing model and in-house technology have made us the biggest stock brocker in India..</p>
                    <p>Over 1+ crore client place million of order every day through our powerful ecosystem of investment platform , contribution over 15% of
                        all Indian retail trading volumes.
                    </p>
                </div>
                <div className='col-6 p-5'>
                    <p>In addition we run a number of pupular open online education and commonly initiative to empower retail trader and investor. 
                    </p>
                    <p><a href="#">Rainmatter</a>, our fintech fund and incubator has investment in several fintech startup with the goal of growing the Indian Capital market.</p>
                    <p>And yet, we are always up to something new every day, Catch up on the latest updates on Our blog or see what media is staying about us.</p>
                </div>
            </div>
        </div>

     );
}

export default Hero ;