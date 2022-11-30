import React, { Component } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Home=()=>{
    return <div>

<form method='post' action="/about">
<input type='text' name='text'/>
<input type="submit" value="Submit"/>
</form>
    </div>
}
const About=()=>{
    return <div>About</div>
}
const router = createBrowserRouter([
    {
        path:'/',element:<Home></Home>,
        action: async ({request,params})=>{
              console.log(11,request,params)
             return {c:1};
        },
        loader:async ({request,params})=>{
            console.log(33,request,params)
            return {a:3}
        }
    },
    {
        path:'/about/:id',
        element:<About></About>,
        action:async ({request,params})=>{
            console.log(params);
            return {a:1}
        }
    }
])
export default class RouterAction extends Component {
    render() {
        return (
            <div>
               <RouterProvider router={router}></RouterProvider>
            </div>
        )
    }
}
