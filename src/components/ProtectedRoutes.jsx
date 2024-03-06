import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children})=>{
    const user = localStorage.getItem('user');
    if(user){
      return children
    }
    else{
      return <Navigate to={"/login" }/>
    }
  }

export const ProtectedRouteForAdmin=({children})=>{
    const admin = JSON.parse(localStorage.getItem('user'));
    if(admin.user.email === "rajsingh@gmail.com"){
      return children
    }
    else{
      return <Navigate to={'/login'}/>
    }
}