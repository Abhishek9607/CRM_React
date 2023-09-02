import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-[90vh]'> 
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body ">
        <div className='w-full flex justify-center'>
           <h2 className="card-title text-4xl">Login!</h2>
        </div>
         <div className='w-full'>
           <input type="text" placeholder="user id...." className="text-black input input-bordered input-primary w-full max-w-xs bg-white" />
         </div>
         <div className='w-full'>
         <input type="password" placeholder="password.." className="text-black input input-bordered input-primary w-full max-w-xs bg-white" />
         </div>
        <div className="card-actions w-full mt-4">
        <button className="btn btn-warning w-full font-bold text-xl hover:bg-accent-focus">Login</button>
       </div>
      </div>
   </div>
  </div>
  )
}

export default Login