import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import router from "./router/routes";


function App({children}) {
  return (
   <RouterProvider router={router}>
      {children}
      <ToastContainer/>
   </RouterProvider>
  );
}

export default App;
