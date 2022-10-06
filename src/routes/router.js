import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Inventory from "../components/Inventory/Inventory";
import NotFound from "../components/NotFound/NotFound";
import Orders from "../components/Orders/Orders";
import Shop from "../components/Shop/Shop";
import Main from "../layouts/Main";
import { productsAndCartLoader } from "../loaders/productsAndCartLoad";


const router = createBrowserRouter([
    {
        path: '',
        element: <Main/>,
        children: [
            {path: '/', element: <Shop/>, loader: ()=> fetch('products.json')},
            {path: '/shop', element: <Shop/>, loader: ()=> fetch('products.json')},
            {path: 'orders', element: <Orders/>, loader: productsAndCartLoader},
            {path: 'inventory', element: <Inventory/>},
            {path: 'about', element: <About/>},
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router;