import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import Appointment from "../pages/Appointment/Appointment";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyAppointment from "../pages/Dashboard/MyAppointment";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import SignUp from "../pages/Register/SignUp";
import PrivateRoutes from "./PrivateRoute";

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
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/my-appointments",
        element: <MyAppointment />,
      },
    ],
  },
]);

export default router;
