 1.在component，render同时存在的情况下，component的优先级更高
 <Route exact path={match.url} component={SelectTopic} render={() => {
          return <div>4444</div>
        }} />


2.传参：
 <Route path="/topics/:id" component={Topic2} />
    const Topic2 = ({ match }) => {
        return <div>{ match.params.id}，获取参数</div>
    }

    规定只能传递参数a||b,否则不匹配
    <Route path="/test/:id(a|b)"  component={Topic2} />
    

    总结三种向路由组件传参的方式:
        https://www.jb51.net/article/256301.htm


3.Redirect 的时候 存在情况是有匹配项，但是重定向之后跳转到重定向路径       添加Switch
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/topics/:id" component={Topic2} />
        <Route path="/test" component={Test} /> 
        <Route path="/test/:id(a|b)" component={Topic2} />
        <Redirect to='/' ></Redirect>
    </Switch>

4.封装一个自己的Route，出现问题

<!-- 没有登录的时候跳转到登录界面 ，没有问题-->
const ProtectRoute = ({ component:Comp, ...rest }) => {
    console.log( rest);
    return (
        <Route {...rest} render={props => {
           obj.islogin ? (<Comp {...props}></Comp>) : (
                <Redirect to={{pathname:'/login'}}></Redirect>  
            )
        }}></Route>
    )
}

<!-- 没有登录的时候跳转到登录界面 ，有问题-->
const ProtectRoute = ({ component:Comp, ...rest }) => {
    console.log( rest);
    return (
        <Route {...rest} render={props => { 
            <!-- 这里的问题 -->
           obj.islogin ? (<Comp {...props}></Comp>) : (
                <Redirect to="/login"></Redirect>  
            )
            解决
            return (obj.islogin ? (<Comp {...props}></Comp>) : (
                <Redirect to="/login"></Redirect>  
            ))
        }}></Route>
    )
}
问题：<Redirect to="/login"></Redirect>  无法跳转


5. 切换路由时，弹出提示框，when=true时出现
   <Prompt
          when={isBlocking}
          message={location =>
            `Are you sure you want to go to ${location.pathname}`
} />



6.高亮Link：NavLink
 <NavLink to="/index3" activeStyle={linkstyle}>index3 </NavLink>
 自定义封装NavLink

 const linkstyle = {
    color: 'orange'
}
 const ZdyNavLink = ({ to, children, ...rest }) => {  //不想每一次都写activeStyle
    console.log(to, rest);
    return <NavLink to={to} activeStyle={linkstyle} {...rest}>{children}</NavLink>
}




7.路由的懒加载
React.Suspense、React.lazy

const Home=lazy(()=>import('./Home'));

<Switch>
    <Suspense fallback={<>loading</>}>
    <Route path='/:name' exact component={View}></Route>
    <Route path='/home' exact component={Home}></Route>
    {/* <Route component={View}></Route> */}
    <Redirect push to="/index"/>
    </Suspense>             
</Switch>

react-loadable:

const Home=Loadable({
  loader:()=>import('./Home.js'),
  loading:Loading
});


8.路由配置
react-router-config


9.路由嵌套




10.React 监听路由变化
https://juejin.cn/post/6844904159615909901
1)
 useEffect(() => {
        console.log(props.location.pathname);
    }, [props.location.pathname])

2)
componentDidMount() {
         console.log(this.state)
         this.props.history.listen(location => {
             console.log(11, this.props.location.pathname, location.pathname)
             if (this.props.location.pathname !== location.pathname) {
                 console.log('路由发生了变化')
             }
        })
    }
3)
shouldComponentUpdate(nextProps) {
        console.log('当前', this.props.location.pathname)
         console.log('后', nextProps.location.pathname)
         return this.props.location.pathname !== nextProps.location.pathname;
     }


11.withRouter  一定要在<Router>中使用


12.路由函数式编程
this.props.history.push(),go(),goback(),goForward(),listen(),replace()







### react-router v6
1)useParams    作用：返回url参数的键值对的对象
<Route path="invoices" element={<Invoices />}>
  <Route path=":invoiceId" element={<Invoice />} /></Route>
</Route>
当路径匹配/invoices/abc的时候，useParams()返回一个对象{invoiceId:'abc'}


问题:invoiceId:name是可实现的？


2）使用数据路由器createBrowserRouter，则组件<Routes>不会使用，<Routes>不参与数据加载
    

3）useSubmit、useActionData

4）<Route>
4.1)errorElement:错误元素
如果在加载程序（loaders）、操作（actions）或组件渲染（render）中引发异常，就不会渲染element，则将渲染 errorElement，并使用useRouteError提供错误。

当路由没有errorElement时，错误将通过父路由冒泡。
在路由树的顶部放置errorElement并在一个地方处理应用程序中的几乎所有错误。或者，把它们放在你的所有路线上并允许应用程序中没有错误的部分继续正常渲染。这为用户提供了从错误中恢复的更多选项，而不是硬刷新和🤞


### V5跟V6的不同之处
v6:NavLink 
activeClassName和activeStyle已经弃用，通过style或者className接收一个函数，通过函数返回值确定
    let activeStyle = {textDecoration: "underline",;
    let activeClassName = "underline";
    <NavLink to="messages" style={({ isActive }) =>isActive ? activeStyle : undefined}>Messages</NavLink>
    <NavLink to="tasks"  className={({ isActive }) =>isActive ? activeClassName : undefined}>Tasks</NavLink>

