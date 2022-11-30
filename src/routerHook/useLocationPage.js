import React from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation, useParams, useSearchParams } from 'react-router-dom'

import qs from "query-string";

const About = (props) => {
    const location = useLocation();
    const params = useParams();
    console.log('About', location);
    return <div>about</div>
}
const Home = () => {
    const location = useLocation();
    const state = qs.parse(location.search);
    console.log('home', location, state);
    return <div>Home</div>
}
const Search = () => {
    const [search, setSearch] = useSearchParams();
    console.log(search.get('a'), search.get('b'));
    return <div>Search</div>
}
export default function UseLocationPage() {
    return (
        <div>
            <br />
            <BrowserRouter>
                <Link to='/about/1' state={{ a: 3, b: 1 }}>Link（隐式传参），通过location.state获取参数</Link>
                <br />
                <Link to='/about/1?a=3&b=1'>Link（显示传参），通过location.search来获取参数</Link>
                <br />
                <Link to='/home?a=3&b=1'>Link（显示传参）,通过location.search来获取参数，通过query-string来解析参数</Link>
                <br />
                <Link to='/home/1?a=3&b=1'>Link（显示传参）,通过useSearchParams()来获取参数</Link>
                <Routes>
                    <Route path='/about/:id' element={<About></About>}></Route>
                    <Route path='/home' element={<Home></Home>}></Route>
                    <Route path='/home/:id' element={<Search></Search>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
/*
Location 对象包含有关当前 URL 的信息。
*/

/*
问题是：
1） Link（隐式传参）
当Link通过隐式传参，怎么获取到传递的参数 
   <Link to='/about/1' state={{a:3,b:1}}>Link（隐式传参）</Link>
通过location.state进行获取参数

2） Link（显示传参）
<Link to='/about/1?a=3'>about/1</Link>
当前的location
{
    "pathname": "/about/1",
    "search": "?a=3",
    "hash": "",
    "state": null,
    "key": "5bk8fegm"
}
这里Link的传参是在location.search里的，而不是location.state;

3）当使用useNavigate进行函数式编程跳转的时候，传递参数
const navigate = useNavigate();
navigate('/' + id, {
    state: {
        c: 3, d: 5
    }
});
可以通过location.state来获取数据
*/