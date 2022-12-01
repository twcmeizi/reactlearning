import React, { Component } from 'react'
import { createBrowserRouter, RouterProvider, NavLink, Outlet, Link } from 'react-router-dom'

const Home = () => {
    return <div>

        <form method='post' action="/about">
            <input type='text' name='text' />
            <input type="submit" value="Submit" />
        </form>
    </div>
}
const About = () => {
    return <div>About
        <br />
        <div style={{ height: '1600px', border: '1px solid red' }}></div>
        <Link to='..' relative='path' preventScrollReset={true}>goback</Link>
        <Link to='/home' preventScrollReset={true}>goback home</Link>
    </div>
}
const ZdyNavLink = ({ to, ...props }) => {
    return <NavLink to={to} style={({ isActive }) => { return isActive ? { color: "red" } : undefined }}>{props.children}</NavLink>
}
const List = () => {
    return <div>
        {/* <NavLink to='/home' style={({ isActive }) => { return isActive ? { color: "red" } : undefined }}>home</NavLink> */}
        <ZdyNavLink to='/home'>home</ZdyNavLink>
        <br />
        <ZdyNavLink to='/about/1'>about</ZdyNavLink>

        <div>
            <Outlet />
        </div>
    </div>
}
const router = createBrowserRouter([
    {
        path: '/',
        element: <List></List>,
        children: [
            {
                path: 'home',
                element: <Home></Home>,
                action: async ({ request, params }) => {
                    console.log(11, request, params)
                    return { c: 1 };
                },
                loader: async ({ request, params }) => {
                    console.log(33, request, params)
                    return { a: 3 }
                }
            },
            {
                path: 'about/*',
                element: <About></About>,
                action: async ({ request, params }) => {
                    console.log(params);
                    return { a: 1 }
                }
            }
        ]
    }

])

export default class RouterAction extends Component {
    render() {
        return (
            <div>

                <RouterProvider router={router}>


                </RouterProvider>
            </div>
        )
    }
}
