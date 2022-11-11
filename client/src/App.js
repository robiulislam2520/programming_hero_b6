import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        toastOptions={{
          className: "text-2xl",
        }}
      />
    </>
  );
}

export default App;
