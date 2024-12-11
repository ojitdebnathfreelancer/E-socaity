import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className={`App`}>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
