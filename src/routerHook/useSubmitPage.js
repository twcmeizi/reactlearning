import React from 'react'
import {createBrowserRouter,RouterProvider,useSubmit,Form} from 'react-router-dom'
const Home=()=>{
    let submit=useSubmit();
   return(<div>home
  
      <Form onChange={e=>{console.log(e.currentTarget);return submit(e.currentTarget)}}>
        <input type="text" name="search"/>
        <button type='submit'>search</button>
      </Form>
    </div>)
}
const About=()=>{
 return (
   <div>About
  </div>
 )

}
const router=createBrowserRouter([
    {path:'/',element:<Home></Home>},
    {path:'/about',element:<About></About>}
])
export default function UseSubmitPage() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}
