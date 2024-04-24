import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Components/Root/Root';

import './index.css';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRad from './Components/PagesToRad/PagesToRad';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import BookDetails from './Components/BookDetails/BookDetails';
import ReadBooks from './Components/ReadBooks/ReadBooks';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
    {
      path:"/",
      element:<Home></Home>
    },
    // {
    //   path:"/ListedBooks",
    //   element:<ListedBooks></ListedBooks>
    // },
    {
      path:"/PagesToRad",
      element:<PagesToRad></PagesToRad>
    },
    {
      path:"/Books/:id",
      element:<BookDetails></BookDetails>,
      loader: () => fetch('/BooksContainer.json')
    },
    {
      path:"/ListedBooks",
      element:<ListedBooks></ListedBooks>,
      loader:() => fetch('/BooksContainer.json')
    }
    ]
    
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
