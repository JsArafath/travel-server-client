import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Usercontext";
import { FaGoogle } from "react-icons/fa";
import {  AiOutlineGithub } from "react-icons/ai";


const Login = () => {
  const { loginemaipass ,googlesignup } = useContext(AuthContext);


  const navegate = useNavigate();
  const location =useLocation();
  const from = location.state?.from?.pathname || '/';

  const handeltologin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    loginemaipass(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navegate(from , {replace : true})
      })
      .catch((error) => console.error(error));
  };

  const  googlehandel =()=>{
    googlesignup()
    .then(res => {
      navegate(from , {replace : true})
    })
    .catch(e => console.error(e))
  }
  
  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 my-10 mx-auto">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form
        onSubmit={handeltologin}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-400">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
          <div className="flex justify-end text-xs dark:text-gray-400">
            <button type="Link">Forgot Password?</button>
          </div>
        </div>
        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-blue-400">
          Sign in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 text-sm dark:text-gray-400">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button onClick={googlehandel} aria-label="Log in with Twitter" className="p-3 text-3xl hover:text-blue-500 rounded-sm">
         <FaGoogle/>
        </button>
        <button aria-label="Log in with GitHub" className="p-3 text-3xl  hover:text-blue-500 rounded-sm">
          < AiOutlineGithub/>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Don't have an account?
        <Link
          rel="noopener noreferrer"
          to="/signup"
          className="underline dark:text-gray-100"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
