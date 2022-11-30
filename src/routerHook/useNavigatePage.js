import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, useParams, useNavigate, useLocation, Navigate } from 'react-router-dom'

const TestPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(params, location);
    const goback = (id) => {
        // 第一种
        // navigate('/' + id);
        // 第二种
        // navigate('/' + id, {
        //     state: {
        //         c: 3, d: 5
        //     }
        // });
        // 第三种：
        navigate(-1);
    }
    // 可以在这里获取到传参之后进行数据请求
    return <div>
        TestPage-id:{params.id}-name:{params.name ? params.name : ''}-sex:{params.sex}
        <button onClick={goback.bind(this, params.id)}>goback</button>
    </div>
}
const NavigatePage = () => {
    const [num, setNum] = useState(1)
    return (
        <>
            {num === 1 ? <><h4>sum 的值是{num}</h4><button onClick={e => setNum(2)}>+1</button></> : <Navigate to='/about' replace={true}></Navigate>}
        </>
    )
}
const About = () => <div>about</div>
export default function UseNavigatePage() {
    return (
        <>
            <BrowserRouter>
                <NavigatePage></NavigatePage>
                <Routes>
                    <Route path="/a" element={<TestPage />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    {/* <Route path="/:id/:name" element={<TestPage />}></Route>
                    <Route path="/:id/:name/:sex" element={<TestPage />}></Route> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}
/*
useNavigate()  作用是：返回一个函数用来实现编程式导航。
 1） 第一种
 navigate('/' + id);
 2）第二种，可以传递参数，传递的参数在const location=useLocation()；location.state中
 navigate('/' + id, {
     state: {
         c: 3, d: 5
     }
 });
 3）第三种：类似于history.go()方法
        navigate(-1);
*/


/*
Navigate组件：只要<Navigate>渲染，就实现跳转，切换视图，属性replace 控制跳转模式（push|replace）,默认push
<Navigate to='/about' replace={true}></Navigate>
*/



