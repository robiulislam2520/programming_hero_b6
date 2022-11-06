import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../pages/404Page";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Orders from "../pages/Orders";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders/></PrivateRoute>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    }
])

export default router;