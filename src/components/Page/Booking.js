import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/Usercontext";
import BookRum from "./BookRum";

const Booking = () => {
  const rumedata = useLoaderData();

  const { user } = useContext(AuthContext);

  return (
    <div>
      <div>
        {rumedata.map((dt) => (
          <BookRum key={dt.id} rumes={dt}></BookRum>
        ))}
      </div>
    </div>
  );
};

export default Booking;
