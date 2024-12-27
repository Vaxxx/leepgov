import { toastError } from "@/App"; 

class UserService{
  
    static async loginUser( email: string, password: string){
        try{
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });

            if(!response.ok){
                toastError("Invalid Credentials")
                throw new Error('Invalid credentials1');
            }

            const data = await response.json();

            return data;
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    static async getUserId( email: string){
        try{
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/get-user-id/${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                } 
            });

            if(!response.ok){
                toastError("You must express interest before you can create a profile");
           
                throw new Error('Invalid credentials4');
            }

            const data = await response.json();

            return data;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    static async checkIfProfileExists(userId:number){
        try{
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/get-profile/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                } 
            });

            if(!response.ok){
                toastError("Invalid Credentials")
                throw new Error('Invalid credentials2');
            }

            const data = await response.json();
           console.log("DATA: ");
           console.log(data.currentOccupation)
            return data;
        }catch(error){
            console.log(error);
            throw error;
        }
    }

    static async getUserFromEmail(email: string){
        try{
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/get-user-from-email/${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                } 
            });

            if(!response.ok){
                toastError("Invalid Credentials")
                throw new Error('Invalid credentials3');
            }

            const data = await response.json();

            return data;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}

export default UserService;