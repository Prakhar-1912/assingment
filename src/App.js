import "./App.css";
import Home from "./components/Home";
import Signin from "./components/Signin";

import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";


const AppRouter = createBrowserRouter([
  { 
    path: "/",
    element: <Signin/> ,
  },
  {
    path: "/dashboard",
    element: <Home />
  },
  
]);

function App () {
  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  );
};

export default App;
