import React from 'react'
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom'
const Home = (props) => {
    console.log(props);
    return <div>Home{props.match.params.id}</div>
}
const Home1 = (props) => {
    console.log(props);
    return <div>Home{props.location.search.substr(1).split('=')[1]}</div>
}
const Home2 = (props) => {
    console.log(props);
    return <div>Home{props.location.state.id}</div>
}
const Home3 = (props) => {
    console.log(props.location.query);
    return <div>Home{props.location.query.id}</div>
}
const list = [
    { id: 1, title: 'list 1' },
    { id: 2, title: 'list 2' },
    { id: 3, title: 'list 3' },
    { id: 4, title: 'list 4' }
]
export default function RedirectPage() {
    return (
        <div>

            {/* <Router>
                {
                    list.map(item=>{
                        return <Link to={`/list/${item.id}`} key={item.id}>{item.title}</Link>
                    })
                }
              <Route path='/list/:id' component={Home}></Route>
          </Router> */}

            {/* <Router>
                {
                    list.map(item=>{
                        return <Link to={`/list/?id=${item.id}`} key={item.id}>{item.title}</Link>
                    })
                }
              <Route path='/list' component={Home1}></Route>
          </Router> */}

            <Router>
                {
                    list.map(item => {
                        return <Link to={{ pathname: '/list', state: { id: item.id } }} key={item.id}>{item.title}</Link>
                    })
                }
                <Route path='/list' component={Home2}></Route>
            </Router>
            {/* <Router>
                {
                    list.map(item => {
                        return <Link to={{ pathname: '/list', query: { id: item.id } }} key={item.id}>{item.title}</Link>
                    })
                }
                <Route path='/list' component={Home3}></Route>
                <Redirect to='/'></Redirect>
            </Router> */}
        </div>
    )
}
