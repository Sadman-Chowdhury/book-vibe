import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import BookDetails from './Components/BookDetails/BookDetails';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AboutUs from './Components/AboutUs/AboutUs';
import ReaderReview from './Components/ReaderReview/ReaderReview';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader:()=>fetch('/books.json')
      },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader:()=>fetch('/books.json')
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
        loader:()=>fetch('/books.json')
      },
      {
        path: "/about",
        element:<AboutUs></AboutUs>
      },
      {
        path: "/reviews",
        element:<ReaderReview></ReaderReview>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
