import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

export function Edit(props) {

    return (
        <div>Edit</div>
    )
}
export function List(props) {

    const url = props.match.url;
    console.log('list', props, url);
    return (
        <div>
            list
            <Switch>
                {props.route.map((item, index) => {
                    if (item.son && item.son.length > 0) {
                        return <Route path={`${url}${item.path}`} render={(props) => {
                            return <item.component route={item.son} {...props} />
                        }} key={`${url}${item.path}`}></Route>
                    } else {
                        return <Route path={`${url}${item.path}`} component={item.component} key={`${url}${item.path}`}></Route>
                    }

                })}
            </Switch>
        </div>

    )
}


export default class Index extends Component {
    render() {
        const { route } = this.props;
        const url = this.props.match.url;
        console.log(11111111, this.props)
        return (
            <Switch>
                首页
                {route.map((item, index) => {
                    if (item.son && item.son.length > 0) {
                        return <Route path={`${url}${item.path}`} render={(props) => {
                            return <item.component route={item.son} {...props} />
                        }} key={`${url}${item.path}`}></Route>
                    } else {
                        return <Route path={`${url}${item.path}`} component={item.component} key={`${url}${item.path}`}></Route>
                    }

                })}
            </Switch>
        )
    }
}
