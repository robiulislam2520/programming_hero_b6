import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OurCeo from "./components/OurCeo";
import Layout from "./layout/Layout";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {

  const myRouter = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {path: "/", element: <Home/>},
        {path: '/home', element: <Home/>},
        {path:'/about', element: <About/>},
        {path: '/about/:ceo', element: <OurCeo/>}
      ]
    },
  ])

  
  return (
    <div className="App">
      <RouterProvider router={myRouter}></RouterProvider>
    </div>
  );
}

export default App;
