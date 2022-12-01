import React from 'react'
import {useRoutes,BrowserRouter as Router, Outlet} from 'react-router-dom'
const Home=()=>{
    return <div>
        home
        <Outlet/>
    </div>
}
const About=()=>{
    return <div>
        About
    </div>
}
const Test=()=>{
    return <div>
        Test
    </div>
}
const RouterConfig=()=>{
    let router=useRoutes([
        {path:'/',element:<Home></Home>,children:[
            {path:'about',element:<About></About>},
            {path:'test',element:<Test></Test>}
        ]}
    ])
    return router;
}

export default function UseRoutesPage() {
    return <Router><RouterConfig></RouterConfig></Router>
}
// useRoutes 功能上等同于<Routes>
//当使用 useRoutes的时候，将返回结果放到<Router>组件下

/*
报错：useRoutes() may be used only in the context of a <Router> component.
export default function UseRoutesPage() {
    let router=useRoutes([
        {path:'/',element:<Home></Home>,children:[
            {path:'about',element:<About></About>},
            {path:'test',element:<Test></Test>}
        ]}
    ])
    return router;
}
// 修改了，还是报错
export default function UseRoutesPage() {
    let router=useRoutes([
        {path:'/',element:<Home></Home>,children:[
            {path:'about',element:<About></About>},
            {path:'test',element:<Test></Test>}
        ]}
    ])
    return <Router>{router}</Router>;
}

//修正是：需要将使用了useRoutes的整个组件放到<Router>下
*/