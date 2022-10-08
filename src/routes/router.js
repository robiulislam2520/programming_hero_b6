import Main from "../layouts/Main";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Orders from "../pages/Orders";

const { createBrowserRouter } = require("react-router-dom");

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
                path: '/home',
                element: <Home/>
            },
            {
                path: '/orders',
                element: <Orders/>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router;