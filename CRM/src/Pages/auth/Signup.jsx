import React from 'react'
import Login from './Login'

const Signup = () => {
  return (
    <div className='flex justify-center items-center h-[90vh]'> 
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body ">
        <div className='w-full flex justify-center'>
           <h2 className="card-title text-4xl">Sinup!</h2>
        </div>
        <div className='w-full'>
           <input type="text" placeholder="username" className="text-black input input-bordered input-primary w-full max-w-xs bg-white" />
         </div>
         <div className='w-full'>
           <input type="text" placeholder="email" className="text-black input input-bordered input-primary w-full max-w-xs bg-white" />
         </div>
         <div className='w-full'>
         <input type="password" placeholder="password.." className="text-black input input-bordered input-primary w-full max-w-xs bg-white" />
         </div>
         <details className="dropdown mb-4 w-full">
            <summary className=" btn">open or close</summary>
           <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
             <li><a>Home</a></li>
              <li><a>About</a></li>
           </ul>
        </details>
        <div className="card-actions w-full mt-4">
        <button className="btn btn-warning w-full font-bold text-xl hover:bg-accent-focus">Login</button>
       </div>
      </div>
   </div>
  </div>
  )
}

export default Signup