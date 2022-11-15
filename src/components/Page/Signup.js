import { updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Usercontext";
import { FaGoogle } from "react-icons/fa";
import {  AiOutlineGithub } from "react-icons/ai";

const Signup = () => {
  const { signupemailpass, auth ,googlesignup } = useContext(AuthContext);

  const handeltosignep = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(username, email, password);

    signupemailpass(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();

        updateProfile(auth.currentUser, {
          displayName: username,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => console.error(error));
  };

const  googlehandel =()=>{
  googlesignup()
  .then(res => {
    console.log(res.user);
  })
  .catch(e => console.log(e))
}



  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 my-10 mx-auto">
      <h1 className="text-2xl font-bold text-center">sign Up</h1>
      <form
        onSubmit={handeltosignep}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-400">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
        </div>
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
         
        </div>
        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-blue-400">
          SingUp
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
         <FaGoogle></FaGoogle>
        </button>
        <button aria-label="Log in with GitHub" className="p-3 font-bold text-3xl hover:text-blue-500 rounded-sm">
          <AiOutlineGithub></AiOutlineGithub>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Don't have an account?
        <Link
          rel="noopener noreferrer"
          to="/login"
          className="underline dark:text-gray-100"
        >
          Log In
        </Link>
      </p>
    </div>
  );
};

export default Signup;
