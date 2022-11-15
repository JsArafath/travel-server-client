import React from "react";
import { FaCommentDollar, FaStar } from "react-icons/fa";

const BookRum = ({ rumes }) => {
  const { img, title, catagory, rat, fe } = rumes;

  return (
    <div className="flex flex-col max-w-lg p-4 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 my-4 dark:text-gray-100">
      <div>
        <img
          src={img}
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">
          {catagory}
        </h2>
        <p className="text-sm dark:text-gray-400">
         {title}
        </p>
      </div>

      {/* footer section */}
      <div className="flex flex-wrap justify-between">
        <div className="space-x-2">
          <button
            aria-label="Share this post"
            type="button"
            className="p-2 text-center"
          >
            <FaStar/>
            {rat}
          </button>
          
        </div>
        <div className="flex space-x-2 text-sm dark:text-gray-400">
         
          <button
            type="button"
            className="flex items-center p-1 space-x-1.5"
          >
            <FaCommentDollar></FaCommentDollar>
            {fe}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookRum;
