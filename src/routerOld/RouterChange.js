import React, { Component, useEffect } from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch, Link, Prompt, Redirect, withRouter } from 'react-router-dom';
import { UserAddOutlined } from '@ant-design/icons'
const linkstyle = {
    color: 'orange'
}
const View = (props) => {
    return <div>测试NavLink-{props.match.params.name}</div>
}
const ZdyNavLink = ({ to, children, ...rest }) => {  //不想每一次都写activeStyle
    return <NavLink to={to} activeStyle={linkstyle} {...rest}><UserAddOutlined></UserAddOutlined>{children}</NavLink>
}
// class RouterChange extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//         }
//     }
//     componentDidMount() {
//         console.log(this.state)
//         this.props.history.listen(location => {
//             console.log(11, this.props.location.pathname, location.pathname)
//             if (this.props.location.pathname !== location.pathname) {
//                 console.log('路由发生了变化')
//             }
//         })
//     }
//     static getDerivedStateFromProps(props, state) {
//         console.log('getDerivedStateFromProps', props, state)
//         return { a: 1 };
//     }
//     shouldComponentUpdate(nextProps) {
//         console.log('当前', this.props.location.pathname)
//         console.log('后', nextProps.location.pathname)
//         return this.props.location.pathname !== nextProps.location.pathname;
//     }
//     render() {
//         console.log('render')
//         return (
//             <>
//                 <ZdyNavLink to="/index">index </ZdyNavLink>
//                 <ZdyNavLink to="/index2">index2 </ZdyNavLink>
//                 <ZdyNavLink to="/index3">index3 </ZdyNavLink>
//                 {/* <NavLink to="/index" activeStyle={linkstyle}>index </NavLink>
//         <NavLink to="/index2" activeStyle={linkstyle}>index2 </NavLink>
//         <NavLink to="/index3" activeStyle={linkstyle}>index3 </NavLink> */}

//                 <Link to='/index4' replace>index4</Link>
//                 <Switch>
//                     <Route path='/:name' exact component={View}></Route>
//                     {/* <Route component={View}></Route> */}
//                     <Redirect push to="/index" />
//                 </Switch>
//             </>
//         )
//     }
// }
// export default withRouter(RouterChange);





function RouterChange(props) {
    useEffect(() => {
        console.log(props.location.pathname);
    }, [props.location.pathname])

    return (
        <>
            <ZdyNavLink to="/index">index </ZdyNavLink>
            <ZdyNavLink to="/index2">index2 </ZdyNavLink>
            <ZdyNavLink to="/index3">index3 </ZdyNavLink>
            {/* <NavLink to="/index" activeStyle={linkstyle}>index </NavLink>
        <NavLink to="/index2" activeStyle={linkstyle}>index2 </NavLink>
        <NavLink to="/index3" activeStyle={linkstyle}>index3 </NavLink> */}

            <Link to='/index4' replace>index4</Link>
            <Switch>
                <Route path='/:name' exact component={View}></Route>
                {/* <Route component={View}></Route> */}
                <Redirect push to="/index" />
            </Switch>
        </>
    )
}
export default withRouter(RouterChange)