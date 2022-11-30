import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, useParams, useNavigate, useLocation } from 'react-router-dom'
const TestPage = () => {
    const params = useParams();
    console.log(params);
    // 可以在这里获取到传参之后进行数据请求
    return <div>
        TestPage-id:{params.id}-name:{params.name ? params.name : ''}-sex:{params.sex}
    </div>
}
export default function UseparamsPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/:id" element={<TestPage />}></Route>
                <Route path="/:id/:name" element={<TestPage />}></Route>
                <Route path="/:id/:name/:sex" element={<TestPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
/*
1)当路径匹配为http://localhost:3000/a
const params=useParams();  {id:'a'}

2)当路径匹配为http://localhost:3000/a/b
const params=useParams();  {id:'a',name:'b'}

3)当路径匹配为http://localhost:3000/a/b/c
const params=useParams();  {id:'a',name:'b',sex:'c'}

*/


