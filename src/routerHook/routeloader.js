import React, { Component } from 'react'
import { createBrowserRouter, useLoaderData, RouterProvider, json } from 'react-router-dom'
import axios from 'axios'
const Home = () => {
    let a = useLoaderData();
    console.log('home', a);
    return <div>home</div>
}
const About = () => {
    let a = useLoaderData();
    console.log('About', a);
    return <div>About</div>
}
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        loader: async ({ request, params }) => {
            let data = { a: 1 };
            console.log(json(data, { status: 404 }))
            return json(data, { status: 404 })
        }
    },
    {
        path: '/about/*',
        element: <About></About>,
        loader: async ({ request, params }) => {
            console.log(request);
            let { "*": all } = params;
            return { a: 1 }
        }
    }
])
export default class Routerloader extends Component {
    render() {
        return (
            <div>
                <RouterProvider router={router}></RouterProvider>
            </div>
        )
    }
}

/*
<Route>的loader（加载器函数），作用是渲染element之前向element提供加载数据
1）在element渲染之前调用
2）element通过useLoaderData()获取数据
*/



/*let url = new URL('http://localhost:3000/about/4?a=3')
url.searchParams.get('a'),结果为3
*/