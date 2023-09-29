import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { signup }  from '../../Redux/Slices/AuthSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signupDetails, setSignupDetails] = useState({
    email: "",
    password: "",
    name: "",
    userType: "",
    userStatus: "",
    clientName: ""
  });

  function handleInputChange(e) {
    const {name, value} = e.target;
    setSignupDetails({
      ...signupDetails,
      [name]: value
    });
  }

  function handleUserType(e) {
    const userTypeSelected = e.target.textContent;
    setSignupDetails({
      ...signupDetails,  
      userType:userTypeSelected,
      userStatus: (userTypeSelected == "customer") ? "approved" : "suspended"
    });
    const dropDown = document.getElementById("userTypeDropDown");
    dropDown.open = !dropDown?.open;
  }

  


  function resetSingnupState() {
    setSignupDetails({
      email: "",
      password: "",
      name: "",
      userType: "",
      userStatus: "",
      clientName: ""
    });

  }

  async function onSubmit() {
    if(!signupDetails.email || 
        !signupDetails.password || 
        !signupDetails.userStatus || 
        !signupDetails.userType || 
        !signupDetails.name || 
        !signupDetails.clientName) return;
        const response = await dispatch(signup(signupDetails));
        console.log(response);
        toast.success("successfully signed up");
        if(response.payload) {
          navigate("/login");
        } 
          else {
            toast.error("Something went wrong, please try again !");
            resetSingnupState();
          }
        
  }

  return (
    <div className='flex justify-center items-center h-[90vh]'> 
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body ">
        <div className='w-full flex justify-center'>
           <h2 className="card-title text-4xl">Sinup!</h2>
        </div>

         <div className='w-full'>
           <input
             onChange={handleInputChange}
             name="email"
             type="text"
             placeholder="email" 
             value={signupDetails.email}
             className="text-black input input-bordered input-primary w-full max-w-xs bg-white"
          />
         </div>

         <div className='w-full'>
         <input 
          onChange={handleInputChange}
          name="password"
          type="password"
          placeholder="password.."
          value={signupDetails.password}
          className="text-black input input-bordered input-primary w-full max-w-xs bg-white"
        />
         </div>

         <div className='w-full'>
           <input
             onChange={handleInputChange}
             name="name"
             type="text"
             placeholder="name"
             value={signupDetails.name}
             className="text-black input input-bordered input-primary w-full max-w-xs bg-white" 
            />
         </div>
        <details className="dropdown mb-4 w-full"  id="userTypeDropDown">
            <summary className=" btn">{(!signupDetails.userType) ? "user Type" : signupDetails.userType}</summary>
           <ul onClick={handleUserType} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-white">
             <li><a>customer</a></li>
              <li><a>admin</a></li>
              <li><a>engineer</a></li>
           </ul>
        </details>
        <div className='w-full'>
           <input
             onChange={handleInputChange}
             name="clientName"
             type="text"
             placeholder="Client Name" 
             value={signupDetails.clientName}
             className="text-black input input-bordered input-primary w-full max-w-xs bg-white"
          />
         </div>
         
        
        <div className="card-actions w-full mt-4">
        <button 
        onClick={onSubmit}
        className="btn btn-warning w-full font-bold text-xl hover:bg-accent-focus">
          Login
        </button>
       </div>
        <p className="text-lg text-white text-center">
          Already have  an account ? <Link className=" text-black font-semibold hover:text-yellow-100" to="/Login">Login</Link>
        </p>
      </div>
   </div>
  </div>
  );
};

export default Signup;