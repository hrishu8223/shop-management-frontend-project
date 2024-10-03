 
import { Provider } from "react-redux"
// import {router } from "../PageRoutes"
import { store } from "./Service/store"
import { RouterProvider } from "react-router-dom"
import PageRoute from "./PageRoutes"
import { ToastContainer } from "react-toastify"

  import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
 <Provider  store={store}>
  <RouterProvider router={PageRoute}/>;
  <ToastContainer/>

 </Provider>
 

   </div>
  )
}

export default App