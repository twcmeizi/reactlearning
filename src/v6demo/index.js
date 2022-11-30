import React from 'react'
import './index.css'
import { router } from './config'
import { RouterProvider } from 'react-router-dom'
export default function IndexPage() {
    return (
        <RouterProvider router={router}>

        </RouterProvider>
    )
}
