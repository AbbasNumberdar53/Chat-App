import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignIn from "../../hooks/useSignIn";
import toast from "react-hot-toast";

function Signin() {
  const [input, setInput] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  })

  const {loading, signin} = useSignIn()
  const handleGenderCheckbox = (gender) =>{
    setInput({...input, gender});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin(input)
  }
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto z-50 ">
      <div className="w-full p-6 rounded-lg shadow-md bg-indigo-900  bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-40">
        <h1 className="text-3xl font-semibold text-center ">
          SignUp
          <span className=" text-red-400 mx-2">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">FullName</span>
              </label>

              <div className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Fullname"
                  onChange={(e) => setInput({...input, fullname: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>

              <div className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Username"
                  onChange={(e) => setInput({...input, username: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>

              <div className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input 
                type="password" 
                className="grow" 
                placeholder="Enter Password" 
                onChange={(e) => setInput({...input, password: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Confirm Password</span>
              </label>

              <div className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input 
                type="password" 
                className="grow" 
                placeholder="Enter Confirm Password" 
                onChange={(e) => setInput({...input, confirmPassword: e.target.value})}
                />
              </div>
            </div>

            <GenderCheckbox handleGenderChange= {handleGenderCheckbox} selectedGender={input.gender}/>

            <Link to="/login" className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block">
              Already have an account?
            </Link>

            <div>
              <button className="btn btn-block btn-sm mt-2" disabled= {loading}>
                {loading? <span className="loading loading-spinner"></span> : "Sign In"}
              </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signin