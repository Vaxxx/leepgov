import { Navigate, Outlet } from "react-router-dom";
 

export function UserProtection() {
   //get user id from emailnj  s
   

    //check if user email exists
 const localAccessToken = JSON.parse(localStorage.getItem('accessToken') || "{}"); 
 
  return localAccessToken !== "" || localAccessToken !== null? (
    <Outlet/>
  ) : (
    // <Navigate to={"/"}  state={{ from: location }} />
     <>
      <Navigate to={"/login"}/>
       toastError("You must have completed your registration to view this page")
      
     </>
  )
}