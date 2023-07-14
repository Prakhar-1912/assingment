import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import {HiFingerPrint,HiAtSymbol} from "react-icons/hi";
import { UserAuth } from "../context/AuthContext";

const SignupForm = () => {
  const navigate = useNavigate();

  const {signUp} = UserAuth(); 

  const[show,setShow] = useState({password:false,cpassword:false});
  
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[error,setError] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err){
      setError("Invalid email or password");
    }
  }

  return (
    <>
        <div className="w-1/2 flex flex-col justify-evenly gap-5 p-10">
        <div>
          <h1 className="text-4xl font-bold py-4">Sign Up</h1>
        </div>

        <form className="flex flex-col gap- items-center">
          <div className="w-full flex flex-col bg-white p-5 rounded-xl">
          <p className="my-1">Email address</p>  
            <div className="flex border rounded-xl relative my-2">
              <input
                className="w-full py-2 px-6 border rounded-xl  text-black focus:outline-none border-none"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="flex items-center px-4">
                <HiAtSymbol size={25} className="fill-[#CBD5E1] hover:fill-[#6366f1]"/>
              </span>
            </div>
          <p className="my-1">Password</p>
            <div className=" my-2 flex border rounded-xl relative">
              <input
                className="w-full py-2 px-6 border rounded-xl focus:outline-none border-none"
                type={`${show.password?"text":"password"}`}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="flex items-center px-4 cursor-pointer " onClick={()=> setShow({...show,password:!show.password})}>
                <HiFingerPrint size={25} className="fill-[#CBD5E1] hover:fill-[#6366f1]"/>
              </span>
            </div>

            <div className="flex justify-center bg-black rounded-xl py-2 mt-3">
              <button onSubmit={handleSubmit} className="text-white" type="submit">Sign Up</button>
            </div>
          </div>
        </form>

        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-blue-700" to="/">
            Sign In
          </Link>
        </p>
      </div>

    </>
  )
}

export default SignupForm