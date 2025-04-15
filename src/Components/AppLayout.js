import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./Login.js"
import Browse from "./Browse.js";


const AppLayout = ()=>{

    return(
       <RouterProvider router={route}/>
    )
}

export const route = createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
        
    },
    {
        path:"/browse",
        element:<Browse/>,
        
    }
])

export default AppLayout; 


