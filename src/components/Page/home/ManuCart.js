import React from "react";
import { useNavigate } from "react-router-dom";

const ManuCart = ({ data }) => {
  const { name, img } = data;
  const navegate = useNavigate();

  const handelclick = () => {
    navegate("/book");
  };

  return (
    <div
      onClick={handelclick}
      className="max-w-xs p-4 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50"
    >
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-2xl font-medium tracking-widest uppercase dark:text-blue-400">
          {name}
        </span>
      </div>
    </div>
  );
};

export default ManuCart;
