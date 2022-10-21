import { RouterProvider } from "react-router-dom";
import router from "./router/routes";

function App({children}) {
  return (
   <RouterProvider router={router}>
      {children}
   </RouterProvider>
  );
}

export default App;
