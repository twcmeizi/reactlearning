import React, { Component,lazy,Suspense } from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch, Link,Prompt,Redirect } from 'react-router-dom';
import { UserAddOutlined } from '@ant-design/icons'
const linkstyle = {
    color: 'orange'
}
const View = (props) => {
    console.log(props)
    return <div>测试NavLink-{props.match.params.name}</div>
}
const ZdyNavLink = ({ to, children, ...rest }) => {  //不想每一次都写activeStyle
    console.log(to, rest);
    return <><NavLink to={to} activeStyle={linkstyle} {...rest}><UserAddOutlined></UserAddOutlined>{children}</NavLink><br/></>
}
const Home=lazy(()=>import('./Home'));
export default class NavLinkpage extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <Router>
                    <ZdyNavLink to="/index">index </ZdyNavLink>
                    <ZdyNavLink to="/index2">index2 </ZdyNavLink>
                    <ZdyNavLink to="/index3">index3 </ZdyNavLink>
                    <ZdyNavLink to="/home">home </ZdyNavLink>
                    {/* <NavLink to="/index" activeStyle={linkstyle}>index </NavLink>
                    <NavLink to="/index2" activeStyle={linkstyle}>index2 </NavLink>
                    <NavLink to="/index3" activeStyle={linkstyle}>index3 </NavLink> */}

                    <Link to='/index4' replace>index4</Link>
                    <Switch>
                        <Suspense fallback={<>loading</>}>
                        <Route path='/:name' exact component={View}></Route>
                        <Route path='/home' exact component={Home}></Route>
                        {/* <Route component={View}></Route> */}
                        <Redirect push to="/index"/>
                        </Suspense>
                     
                    </Switch>
                </Router>
            </div>
        )
    }
}
