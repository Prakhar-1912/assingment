import "./App.css";
import Home from "./components/Home";
import Signin from "./components/Signin";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthContext";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/dashboard",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
]);

function App() {
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={AppRouter} />
      </AuthContextProvider>
    </>
  );
}

export default App;
