import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./components/Router/mainrout";

function App() {
  return (
    <div className="lg:w-4/5 mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
