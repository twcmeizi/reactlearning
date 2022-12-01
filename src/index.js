import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import IndexPage from './routerv6'
import UseparamsPage from './routerHook/useparams'
import UseNavigatePage from './routerHook/useNavigatePage'
import UseLocationPage from './routerHook/useLocationPage'
// import Routerloader from './routerHook/routeloader'
import RouterAction from './routerHook/routeraction'
import FormPage from './routerHook/form'
import UseRoutesPage from './routerHook/useRoutesPage'
import UseSubmitPage from './routerHook/useSubmitPage'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <IndexPage /> */}
    {/* <UseLocationPage /> */}
    {/* <Routerloader /> */}
    {/* <FormPage/> */}
    {/* <UseRoutesPage/> */}
    <UseSubmitPage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
