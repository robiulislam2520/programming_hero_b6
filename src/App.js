import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OurCeo from "./components/OurCeo";
import SingleFriend from "./components/SingleFriend";
import Layout from "./layout/Layout";
import About from "./pages/About";
import Friends from "./pages/Friends";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {

  const myRouter = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {path: "/", element: <Home/>},
        {path: '/home', element: <Home/>},
        {path:'/about', element: <About/>},
        {path: '/about/:ceo', element: <OurCeo/>},
        {
          path: '/friends', 
          element: <Friends/>,
          loader: async () =>{
            return fetch('https://jsonplaceholder.typicode.com/users');
          }
        }
      ]
    },
    {path: '/friend/:friendId', element: <SingleFriend/> },
    {path: '*', element: <NotFound/>}
  ])

  
  return (
    <div className="App">
      <RouterProvider router={myRouter}></RouterProvider>
    </div>
  );
}

export default App;
