// import React, { Component } from 'react'
// import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
// import { router } from './routerconfig'
// console.log(router);

// export default class IndexPage extends Component {
//     render() {
//         return (
//             <RouterProvider router={router}>IndexPage</RouterProvider>
//         )
//     }
// }
import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from 'react-router-dom'
import Home from './Home'
import About from './About'
import { getInvoice, getInvoices } from './data'
const Root = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/home">首页</Link>
                </li>
                <li>
                    <Link to="/about">关于</Link>
                </li>
            </ul>
            <div>
                <Outlet />
            </div>
        </>

    )
}
const Invoice = () => {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.id))
    console.log(invoice)
    return (<>
        <h2>invoice {params.id}</h2>
        <div>
            Total Due:{invoice.amount}
        </div>
        <div>
            {invoice.name}:{invoice.number}
        </div>
        <div>
            <p>Due date:{invoice.due}</p>
        </div>
    </>

    )
}
export default function IndexPage() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Root></Root>}>
                        <Route path='home' element={<Home></Home>}></Route>
                        <Route path='about' element={<About></About>}>
                            <Route index element={<p>选择一个</p>}></Route>
                            <Route path=':id' element={<Invoice></Invoice>}></Route>
                        </Route>
                        <Route path='*' element={<><p>there is nothing here!</p></>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
