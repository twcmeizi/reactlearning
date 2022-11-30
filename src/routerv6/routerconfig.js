import { createBrowserRouter, RouterProvider, Route, Link, createRoutesFromElements } from 'react-router-dom'
import Home from './Home'
import About from './About'

const About1 = () => { return (<div>about1</div>) }
// export const router = createBrowserRouter([
//     { path: '/', element: <Home></Home> },
//     {
//         path: '/about', element: <About></About>, children: [
//             { path: 'a', element: <About1></About1> }
//         ]
//     },
// ])

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Home></Home>}>
        <Route path='about' element={<About></About>}>
            <Route path='a' element={<About1></About1>}></Route>
        </Route>
    </Route>
    ,
    // <Route path='/about/a' element={<About1></About1>}></Route>
))
