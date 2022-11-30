import React from 'react'

import { Route ,Link,Switch} from 'react-router-dom'


export const YHQ=()=> {
    return (
        <div>YHQ</div>
    )
}
export function Order() {
    return (
        <div>Order</div>
    )
}
export function Pingfen() {
    return (
        <div>Pingfen</div>
    )
}

export default function My(props) {
    console.log(22, props)
    const url  = props.match.url;
    console.log(22, 'url', url)
    return (
        <div>
           {props.route.map((item, index) => {
                console.log(item)
                return <Link to={`${url}${item.path}`} key={item.path}>{item.path}</Link>
            })}
            <Switch>
            {props.route.map((item, index) => {
                console.log(item.component)
                return <Route path={`${url}${item.path}`}  component={item.component} {...props} key={`${url}${item.path}`}></Route>
            })}
            
            </Switch>
        </div>
    )
}
