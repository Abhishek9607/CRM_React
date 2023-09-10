import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { login } from '../../Redux/Slices/AuthSlice';


const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });

  function resetLoginState() {
    setLoginDetails({
      email: "",
      password: ""
    });

  }

  function handleInputChange(e) {
    const {name, value} = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value
    });
  }

  async function onSubmit() {
    if(!loginDetails.email || !loginDetails.password) return;
    console.log("calling login", loginDetails);
    const response = await dispatch(login(loginDetails));
    console.log(response);
    if(response.payload) navigate("/");
    else resetLoginState();
  }

  return (
    <div className='flex justify-center items-center h-[90vh]'> 
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body ">
        <div className='w-full flex justify-center'>
           <h2 className="card-title text-4xl">Login!</h2>
        </div>
         <div className='w-full'>
           <input 
              onChange={handleInputChange}
              name="email"
              type="text" 
              placeholder="email"
              value={loginDetails.email}
              className="text-black input input-bordered input-primary w-full max-w-xs bg-white" 
           />
         </div>
         <div className='w-full'>
         <input 
         onChange={handleInputChange}
          name="password"
           type="password"
           placeholder="password.."
           value={loginDetails.password}
           className="text-black input input-bordered input-primary w-full max-w-xs bg-white" 
          />
         </div>
        <div className="card-actions w-full mt-4">
        <button onClick={onSubmit} className="btn btn-warning w-full font-bold text-xl hover:bg-accent-focus">Submit</button>
       </div>
       <p  className="text-white text-center">
        Donot have an account ?  <Link className=" text-white font-semibold hover:text-yellow-100" to="/signup">Signup Instead</Link>
        </p>
      </div>
   </div>
  </div>
  );
};

export default Login;