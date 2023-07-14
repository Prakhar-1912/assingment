import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { HiFingerPrint, HiAtSymbol } from "react-icons/hi";
import { UserAuth } from "../context/AuthContext";

const SigninForm = () => {
  const navigate = useNavigate();
  
  const { googleSignIn, user ,signIn} = UserAuth(); 

  const [show, setShow] = useState(false);
  
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[error,setError] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/dashboard");
    } catch (error){
      setError("Invalid email or password");
    }
  }
  

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/dashboard");
    }
  }, [user]);

  

  return (
    <>
      <div className="w-1/2 flex flex-col justify-evenly gap-5 p-10">
        <div>
          <h1 className="text-4xl font-bold py-4">Sign In</h1>
          <p className="">Sign in to your account</p>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleGoogleSignIn}
            className="m-1 bg-white rounded-xl p-2 text-sm"
            type="submit"
          >
            <FcGoogle className="text-xl cursor-pointer block float-left mr-2" />{" "}
            Sign in with Google
          </button>
          <button className="m-1 bg-white rounded-xl p-2 text-sm" type="submit">
            <FaApple className="text-xl cursor-pointer block float-left mr-2" />
            Sign in with Apple
          </button>
        </div>

        <form className="flex flex-col gap- items-center">
        {error&& <p> {error} </p>}
          <div className="w-full flex flex-col bg-white p-5 rounded-xl">
            <p className="my-1">Email address</p>
            <div className="flex border rounded-xl relative my-2">
              <input
                className="w-full py-2 px-6 border rounded-xl text-black focus:outline-none border-none"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="flex items-center px-4">
                <HiAtSymbol
                  size={25}
                  className="fill-[#CBD5E1] hover:fill-[#6366f1]"
                />
              </span>
            </div>
            <p className="my-1">Password</p>
            <div className=" my-2 flex border rounded-xl relative">
              <input
                className="w-full py-2 px-6 border rounded-xl focus:outline-none border-none"
                type={`${show ? "text" : "password"}`}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="flex items-center px-4 cursor-pointer "
                onClick={() => setShow(!show)}
              >
                <HiFingerPrint
                  size={25}
                  className="fill-[#CBD5E1] hover:fill-[#6366f1]"
                />
              </span>
            </div>
            <div className="flex justify-center bg-black rounded-xl py-2 mt-3 cursor-pointer">
              <button onSubmit={handleSubmit} className="text-white" type="submit">
                Sign In
              </button>
            </div>
          </div>
        </form>

        <p className="text-center">
          Don't have an account?{" "}
          <Link className="text-blue-700" to="/register">
            Register Here
          </Link>
        </p>
      </div>
    </>
  );
};

export default SigninForm;
