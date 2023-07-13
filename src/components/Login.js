import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <>
      <div className="w-3/4 flex flex-col justify-evenly items-center gap-10">
        <div>
          <h1 className="text-4xl font-bold py-4">Sign In</h1>
          <p className="">Sign in to your account</p>
        </div>
        <div>
          <button type="submit">Sign in with Apple</button>
          <button type="submit">Sign in with google</button>
        </div>
        <form className="w-full flex flex-col gap-5">
          <div className='flex border rounded-xl relative'>
            <input className="w-full py-4 px-6 border rounded-xl bg-white focus:outline-none border-none" type="email" name="email" placeholder="Email" />
          </div>
          <div className='flex border rounded-xl relative'>
            <input className="w-full py-4 px-6 border rounded-xl bg-white focus:outline-none border-none" type="password" name="password" placeholder="Password" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        <p className="text-center">
          Don't have an account yet?{" "}
          <Link className="text-blue-700" to="/dashboard">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
