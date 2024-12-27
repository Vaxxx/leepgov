import UserService from "./UserService";

export const getUserId = async(email: string) => {
    const userId = await UserService.getUserId(email);
    if(userId)
      return userId;
    else{
       console.log("User id not found [Profile Protection]")
    }
  }
  
  export const checkIfProfileExists = async(userId: number) => {
    const response = await UserService.checkIfProfileExists(userId);
    if(response === "" || response === null){
      console.log("Profile not found [Profile Protection]");
      return false;
    } 
    else{ 
      return true;
    }
  }

   