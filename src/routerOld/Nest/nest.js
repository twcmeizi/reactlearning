import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch,Redirect } from 'react-router-dom'
import { routerconfig } from './routerconfig'
export default class NestPage extends Component {
    render() {
        return (
            <div>
                <Link to='/index'>首页</Link>
                <Link to='/my'>个人信息</Link>
                <Link to='/info'>消息</Link>
                <Switch>

                    {routerconfig.map((item, index) => {
                        console.log(item);
                        if (item.son && item.son.length > 0) {
                            return <Route path={item.path}  key={item.path} render={(props) => <item.component route={item.son} {...props}></item.component>}></Route>
                        }
                        else {
                            return <Route path={item.path}   component={item.component}></Route>
                        }
                    })}
                    {/* <Redirect from="*" to="/index" /> */}
                </Switch>

            </div>
        )
    }
}
