import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Appointment from "../pages/Appointment/Appointment";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import SignUp from "../pages/Register/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/appointment',
                element: <Appointment/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <SignUp/>
            },
            {
                path: '*',
                element: <NotFound/>
            },
        ]
    }
])

export default router;