import React, { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Usercontext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;

  return (
    <div>
      <div className="flex mx-auto mt-8 flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
        {user?.photoURL ? (
          <img
            src={photoURL}
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
        ) : (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7cT-4bFNOnqqIBe4AzzG0gDEagSE-Qun7oxWN2jpLbJC5v5wFFOD5PYYwfp-2hKeQeFY&usqp=CAU"
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
        )}
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">{displayName}</h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-400">
              {email}
            </p>
          </div>
          <div className="flex justify-center pt-2 space-x-4 align-center">
            <Link
              rel="noopener noreferrer"
              to="/"
              aria-label="GitHub"
              className="p-2 rounded-md dark:text-gray-100 hover:dark:text-blue-400"
            >
              <FaGithub></FaGithub>
            </Link>
            <Link
              rel="noopener noreferrer"
              to="/"
              aria-label="Dribble"
              className="p-2 rounded-md dark:text-gray-100 hover:dark:text-blue-400"
            >
              <FaFacebook></FaFacebook>
            </Link>
            <Link
              rel="noopener noreferrer"
              to="/"
              aria-label="Twitter"
              className="p-2 rounded-md dark:text-gray-100 hover:dark:text-blue-400"
            >
              <FaLinkedin></FaLinkedin>
            </Link>
            <Link
              rel="noopener noreferrer"
              to="/"
              aria-label="Email"
              className="p-2 rounded-md dark:text-gray-100 hover:dark:text-blue-400"
            >
              <FaGoogle></FaGoogle>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
