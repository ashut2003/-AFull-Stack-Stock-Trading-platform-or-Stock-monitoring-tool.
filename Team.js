import React from 'react'
function Team() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 mb-2 border-top'>
                <h1 className='fs-2 text-center mt-2'>
                   People
                </h1>
            </div>
            <div className="row p-2 mt-2 text-muted  "
            style={{lineHeight:"1.8" , fontSize:"1.2em"}}
            >
                <div className='col-6 p-5 text-center'>
                   <img src="https://staticg.sportskeeda.com/editor/2024/05/d973a-17150616187538-1920.jpg" style={{borderRadius:"100%" ,width:"80%"}}></img>
                   <h3 className='mt-3'> Virat Kohli</h3>
                   <h5>Cricketer , CEO</h5>
                </div>
                <div className='col-6 p-5'>
                    <p>Virat Kohli born 5 November 1988 is an Indian international cricketer who plays Test and ODI cricket for the Indian national team. A former captain in all formats of the game, Kohli retired from the T20I format following India's win at the 2024 T20 World Cup. He's a right-handed batsman and an occasional unorthodox right arm quick bowler. Kohli holds the highest IPL run-scorer record, ranks second in T20I, third in ODI, and stands the fourth-highest in international cricket.[4] Regarded as one of the greatest batsman of all time, he also holds the record for scoring the most centuries in ODI cricket and is second in the list of most international centuries scored in international cricket.[5]</p>
                </div>
            </div>
        </div>
     );
}

export default Team;