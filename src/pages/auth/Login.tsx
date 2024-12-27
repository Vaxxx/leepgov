import { motion } from 'framer-motion';
import { useState } from 'react'; 

import LoginImage from '../../assets/login.png';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input'; 
import { Button } from '@/components/ui/button';
import { toastError, toastInfo, toastSuccess } from '@/App';
import UserService from "../../services/UserService"

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate = useNavigate();

    const formSchema = z.object({
        email: z.string().email(),
        password: z.string()
    });

    const form = useForm<z.infer<typeof formSchema>> ({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email,
            password
        }
    });

    const {reset, handleSubmit, formState: {isSubmitSuccessful}} = form ;

    const onSubmit = async(values: z.infer<typeof formSchema>) => {
        setEmail(values.email)
       console.log(values);
      
         //    first check if email exists -> if it does then proceedd
         const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/check-mail/${values.email}`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
          })
           
           if(res.ok){
            console.log("RES IS OKAY")
            console.log(values.password)
               //meaning this email exist in the database
               ///now check if password is null or is 'password
               if(values.password === null || values.password === "" || values.password === 'password'){
                //meaning profile registration has not been completed
                // before navigating, store email in local storage
                localStorage.setItem("email", values.email);
                navigate("/profile", {state: values.email})
                return;
               }else{
                //profile registration is complete, jump to user-dashboard
                 //login in to user-dashboard with token saved in local storage

                 try {
                    const userData = await UserService.loginUser(values.email, values.password);
                    console.log("USER DATA >>>");
                    console.log(userData);
                    console.log("<<< USER DATA")
                    if(userData.token) {
                        localStorage.setItem("token", userData.token);
                        localStorage.setItem("email", userData.email);
                        localStorage.setItem("role", userData.role);
                        toastSuccess("Login Successful");
                        navigate("/user-dashboard");
                    }else{
                        toastError("Login Failed. Check your email and password");
                    }
                 } catch (error) {
                    console.log("ERROR: " + error);
                 }
          

            
          

               }
           }else{
            toastError("Error in Logging")
           }
    };

    return (
        <motion.section
            className="min-h-screen flex justify-center items-center bg-opacity-10 bg-blend-normal bg-gray-100"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.9), hsla(38, 15%, 90%, 0.8)), url('background-image-path')`, // Add path to your background image if needed
                backgroundColor: "hsla(38, 100%, 65%, 0.1)",
                backgroundSize: "cover",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full lg:w-2/3 flex bg-transparent lg:flex-row flex-col h-full lg:h-auto">
                {/* Form Section */}
                <div className="w-full lg:w-1/2 p-8 bg-white rounded-lg shadow-lg" style={{ boxShadow: "0px 20px 40px 0px #0000001A" }}>
                    <h1 className="text-center text-2xl font-bold mb-2">Welcome Back</h1>
                    <p className="text-center text-sm text-gray-600 mb-8 block">Enter your login details below</p>
                    <p className='text-red-600 text-sm italic text-center'> Please note that you must have <span className="underline">expressed interest</span> before you can log in. <span><Link to="to" className='text-blue-700 underline text-lg hover:text-slate-600 hover:underline'>Click to Express Interest</Link></span></p>

                  <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 '>
                      <FormField
                         control={form.control}
                            name="email"
                            render={({field}) => (
                            <FormItem>
                                <FormLabel>Email Address:</FormLabel>
                                <FormControl>
                                {/* <Input placeholder="Email Address"  /> */}
                                {/* <Input placeholder="Email Address" {...field} className='bg-zinc-50 dark:bg-slate-800 border-2 border-slate-400'/> */}
                                <Input
                                type="email"
                                placeholder="etc@gmail.com" {...field}
                                className="w-full mt-2 px-4 py-2 border-2 border-ring rounded-md focus:outline-none focus:border-green-600"
                                required
                            />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                            )}
                            />
                              <FormField 
                                  control={form.control}
                                  name="password"
                                  render={({field}) => (
                                    <FormItem>
                                      <FormLabel> Enter Password</FormLabel>
                                      <FormLabel className='flex text-red-400  text-sm italic text-center'>Please leave the password box empty if you have not completed your registration</FormLabel>
                            
                                      <FormControl>
                                          {/* <Input placeholder="Password" type="password" {...field}  className='bg-zinc-50 dark:bg-slate-800 border-2 border-slate-400 rounded-md'/> */}
                                          <Input
                                            type="password"
                                            placeholder="" {...field}
                                            className="w-full mt-2 px-4 py-2 border-2 border-ring rounded-md focus:outline-none focus:border-green-600"
                                           
                                        />
                                      </FormControl>
                                      <FormMessage/>
                                    </FormItem>
                                  )}
                                  />
                                 <div className=' relative  w-full'>
                                 <Button type="submit"
                                 className="w-full py-2 text-white font-semibold rounded-md"
                                 style={{ backgroundColor: "hsla(148, 100%, 29%, 1)" }}
                                 >Login</Button>
                                 </div>
                     

                        

                       
                    </form>
                  </Form>
                </div>
 
                {/* Image Section */}
                <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8 h-full lg:h-auto">
                    <div className="relative w-full h-full">
                        <img
                            src={LoginImage} // Replace with the actual path to your image
                            alt="Login Illustration"
                            // layout="fill" // Ensure the image takes the full height of the container
                            // objectFit="cover" // Maintain aspect ratio and cover the container
                            className="rounded-lg contain-layout object-cover"
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Login;