import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Blog from "../Page/Blog";
import Booking from "../Page/Booking";
import Contacts from "../Page/Contacts";
import Home from "../Page/home/Home";
import Login from "../Page/Login";
import News from "../Page/News";
import Profile from "../Page/Profile";
import Signup from "../Page/Signup";
import Privatroute from "./Privatroute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "news", element: <News></News> },
      { path: "signup", element: <Signup></Signup> },
      { path: "login", element: <Login></Login> },
      { path: "contracts", element: <Contacts></Contacts> },
      { path: "blog", element: <Blog></Blog> },
      { path: "profile", element: <Privatroute><Profile></Profile></Privatroute> },
      { path: "book", element: <Privatroute> <Booking></Booking></Privatroute> , loader: async()=>fetch('https://travel-sarver.vercel.app/rum')},
    ],
  },
]);
