import Main from "../layouts/Main";
import About from "../pages/About";
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
                loader: () => fetch('data.json'),
                element: <Home/>
            },
            {
                path: '/orders',
                element: <Orders/>
            },
            {
                path:'/about',
                element: <About/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router;