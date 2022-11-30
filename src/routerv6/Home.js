import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <div>Home
                <Outlet></Outlet>
            </div>
        )
    }
}
