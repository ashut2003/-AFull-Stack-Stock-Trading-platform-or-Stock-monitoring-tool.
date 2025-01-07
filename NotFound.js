import React from 'react'
function NotFound() {
    return ( 
        <div className='container p-5'>
         <div className='row text-center'>
         
         <h1 className='mt-5'>
        404 Not Found
         </h1>
         <p>Sorry the Page you are looking for does not exist..</p>
         <button className='p-2 btn btn-primary fs-5' style={{width:"25%" , margin:"0 auto", backgroundColor:"blue"}}>Sign up Now</button>
         </div>
        </div>
     );
}

export default NotFound ;