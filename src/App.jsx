import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Navigate,
  json,
} from "react-router-dom";
import Home from './Pages/home/Home'; 
import Order from './Pages/Order/Order';
import Cart from './Pages/cart/Cart';
import Dashboard from  './Pages/admin/dashboard/Dashboard';
import Nopage from './Pages/nopage/NoPage'
import MyState from './context/data/MyState';
import Login from './Pages/registration/Login';
import Signup from './Pages/registration/Signup';
import ProductInfo from './components/productInfoPage/ProductInfo';
import AddProduct from './Pages/admin/pages/AddProduct';
import UpdateProduct from './Pages/admin/pages/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoute,ProtectedRouteForAdmin } from './components/ProtectedRoutes';
import AllProduct from './Pages/allproducts/AllProduct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/order",
    element: <ProtectedRoute> <Order/> </ProtectedRoute>
  },
  {
    path: "/cart",
    element: <Cart></Cart>
  },
  {
    path: "/dashboard",
    element: <ProtectedRouteForAdmin><Dashboard/></ProtectedRouteForAdmin>
  },
  {
    path: "/*",
    element: <Nopage></Nopage>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  },
  {
    path: "/productinfo/:id",
    element: <ProductInfo></ProductInfo>
  },
  {
    path: "/addproduct",
    element: <ProtectedRouteForAdmin><AddProduct/></ProtectedRouteForAdmin>
  },
  {
    path: "/updateproduct",
    element: <ProtectedRouteForAdmin><UpdateProduct/></ProtectedRouteForAdmin>
  },
  {
    path: "/allproducts",
    element: <AllProduct/>
  },
  
]);
function App() {
  return (
    <MyState>
      <RouterProvider router = {router}>
        <div>App</div>
        
      </RouterProvider>
      <ToastContainer/>
    </MyState>
    )
}

export default App







