/*
Phase 2 -> Routing
by Sakib Rasul | Updated February 7, 2024 | Created June 23, 2023

Deliverables
1. Install React Router (a project requirement) and Tailwind CSS (an optional approach to styling).
2. Create a root layout and three nested routes.
   a. Add a <nav> to the root and render the other routes in an outlet.
3. `GET` resources from your backend, and hold them in state.
4. Pass props to a controlled form.
   a. `onSubmit`, `POST` to your backend and update state.
5. (Bonus) Handle routing errors with a custom component.
6. (Bonus) Reformulate your `GET` request with `loader` and `useLoaderData()`.
*/

// Create React App
import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// Tailwind CSS (along with ../tailwind.config.js)
import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom"

import Welcome from "./welcome"
import About from "../src/routes/about"
import Teas from "../src/routes/teas"
import Root from './routes/root';
import Error from "./error"

const router = createBrowserRouter([
  {
    //these top-level keys describe the layouts shared among sub-routes
    // under parent path /. the parent will share
    // ui elements among these different sub routes
    path: "/",
    element: <Root />,
    //errorElement is optional. errorElement: what to show if it cant find route
    //we created a custom Error element 
    errorElement: <Error />,
    children: [
      {
        // thus object details what to do when user visites http://localhost:3001/about
        path: "/",
        element: <Welcome />
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/teas",
        element: <Teas/>
      }
    ]
  }
])
/*
const router = createBrowserRouter([
  {
    // the path you want the route to represent 
    path:"/",
    // what top level component we want to represent in that path
    element: <Welcome/>,
    // specify routes that should be related to parent route
    children: [
      {
      },
    ]
  },
  {
    // path is a string that represents the part after your base url
    path:"/about",
    // element is any JSX
    element: <About/>,
    //the value of children is an array of route objects
  },
  {
    // this object details what to do when the user visits http://localhost:3001/teas
    path: "/teas",
    element: <Teas/>
    //
  }
])
  */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
