import React from "react";
import ReactDom from "react-dom/client";
import AppLayout from "./Components/AppLayout.js";
import { Provider } from "react-redux";
import appStore from "./Utilities/appStore.js";


const App=()=>{
    return(
        <Provider store={appStore}>
            <AppLayout/>
        </Provider>    
       
    )
}


const root =ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);
