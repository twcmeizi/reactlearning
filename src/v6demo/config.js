import { createBrowserRouter } from 'react-router-dom'
import Root, { loader as rootLoader } from './routes/root';
import ErrorPage from './error-page';
import Contact from './routes/contact';
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        children: [
            {
                path: "contacts/:contactId",
                element: <Contact />,
            },
        ]
    },

]);