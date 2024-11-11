import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'
import App from './views/app'
import Blog from './views/blog'
import Post from './views/post'
import '/src/css/main.css'

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: (
                <>
                    <ScrollRestoration/>
                    <App/>
                </>
            )
        },

        {
            path: "/posts",
            element: (
                <>
                    <ScrollRestoration/>
                    <Blog/>
                </>
            )
        },

        {
            path: "/posts/:n_post",
            element: (
                <>
                    <ScrollRestoration/>
                    <Post/>
                </>
            )
        }
    ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)