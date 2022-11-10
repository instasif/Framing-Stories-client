import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ServiceDetails from "../pages/Home/ServiceDetails/ServiceDetails";
import Login from "../pages/Login/Login";
import Signin from "../pages/Signin/Signin";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signin",
            element: <Signin />,
        },
        {
            path: "/service/:id",
            element: <PrivateRoute>
                <ServiceDetails/>
            </PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        ],
    },
    ]);

export default router;
