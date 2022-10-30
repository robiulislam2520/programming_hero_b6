import { createBrowserRouter } from 'react-router-dom';
import AddAUser from '../components/AddAUser';
import Home from '../components/Home';
import UpdateUser from '../components/UpdateUser';
import Main from '../layouts/Main';

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
                path: '/user/add',
                element: <AddAUser/>
            },
            {
                path: '/update/:id',
                element: <UpdateUser/>,
                loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`),
            },
        ]
    }
])

export default router;