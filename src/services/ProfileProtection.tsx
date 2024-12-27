import { Navigate, Outlet } from "react-router-dom"; 



export function ProfileProtection() {
   //get user id from email
   

    //check if user email exists
                    
 const localEmail = localStorage.getItem('email') || ""; 
 console.log("localEmail" + localEmail);
  return localEmail === "" || localEmail === null ? (
    <>
    <Navigate to={"/login"}/>
     toastError("You must have expressed interest to visit this page.")
    
   </>
   
  ) : (
    
    <Outlet/>
  )
}