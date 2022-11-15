import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ManuCart from "./ManuCart";

const Home = () => {
  const [man, setMan] = useState([]);

  useEffect(() => {
    fetch("https://travel-sarver.vercel.app/manu")
      .then((res) => res.json())
      .then((data) => setMan(data));
  }, []);

  return (
    <div className="h-100vh bg-[url('https://i.ibb.co/JkK4PWZ/Rectangle-1.png')]">
      <section>
        <div className="dark:bg-blue-400">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
              Provident blanditiis cum exercitationem
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
              Cupiditate minima voluptate temporibus quia? Architecto beatae
              esse ab amet vero eaque explicabo!
            </p>
            <div className="flex flex-wrap justify-center">
              <Link
                to="/book"
                className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
              >
                Booking
              </Link>
            </div>
          </div>
        </div>

        <div className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 gap-6 justify-center grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3">
          {man.map((r) => (
            <ManuCart key={r.id} data={r}></ManuCart>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
