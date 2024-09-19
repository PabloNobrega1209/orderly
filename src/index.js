import React from 'react';
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './routes/App/app';
import EditPosts from './routes/EditPosts/EditPosts'
import AddPosts from './routes/AddPosts/AddPosts';


const router = createBrowserRouter([
    {
        path : '/',
        element : <App />
    },
    {
        path : '/edit/:id',
        element : <EditPosts />
    },
    {
    path : '/addpost',
        element : <AddPosts />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <RouterProvider router={router}/>
   </React.StrictMode>,
);