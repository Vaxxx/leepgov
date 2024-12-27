import { motion } from 'framer-motion';
import CoatOfArms from "../../assets/coat-of-arms-img.png";
import RenewedHopeLogo from '../../assets/renewed-hope.png';
import SelfPlacedBg from "../../assets/self-placed-bg.png";
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import { z } from "zod"; 
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"; 
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toastError, toastSuccess } from '@/App';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; 


const EmailVerification = () => {
    const navigate = useNavigate();
     const [email,setEmail] = useState("");
     const [verificationCode, setVerificationCode] = useState("");
    const location = useLocation();
    console.log("Location state: " + location.state)
    const [loading, setLoading] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const formSchema = z.object({
        email: z.string().email(),
        verificationCode: z.string().min(6, {
            message: "verification must be at least 6 characters long"
        }) 
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: location.state,
            verificationCode: verificationCode
        }
    });

    const resendVerification = async(email: string) => { 
        console.log("The value: " + email)
        setLoading(false);
        try{
         //console.log( import.meta.env.VITE_BASE_URL)
         const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/resend?email=${email}`, {
             method: 'POST',
             headers: {
                 'Content-Type' : 'application/json'
             }
             
         })
 
         if(!response.ok){
              response.json().then((value) => {
                 setErrorMessage("ERROR1: " + value.message);
                 toastError("TOAST1" + value.message);
                 setLoading(false);
              })
         }
 
         toastSuccess("Congratulations, If this email is valid, then a new verification code has been sent to the email address");
         const data = await response.json().then((value) => {
             setSuccessMessage(value.message);
             toastSuccess(value.message);
         
         });
         navigate("/verify-email");
         return data;
      }catch(error){
         console.log(error);
         setErrorMessage(`Error 2: ${error}`);
         toastError(`TOAST 2: Something went wrong: ${error}`);
      }
       setLoading(false);
    }

    const {reset, handleSubmit, formState: {isSubmitSuccessful}} = form;

    const onSubmit = async(values: z.infer<typeof formSchema>) => {
         setEmail(values.email);
          setVerificationCode(values.verificationCode); 
       setLoading(false);

       const {email, verificationCode} = values;
       console.log("VALUES:>>>>"+ email + " " + verificationCode)
       console.log("VALUES11:>>>>"+ values.email + " " + values.verificationCode)
       try{
        //console.log( import.meta.env.VITE_BASE_URL)
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/verify`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email ,
                verificationCode
            })
        })

        if(!response.ok){
             response.json().then((value) => {
                setErrorMessage("ERROR 3" + value.message);
                toastError("TOAST 3" + value.message);
                setLoading(false);
             })
        }

        toastSuccess("Congratulations, Your account has been Verified, Do head to your dashboard to complete your registration");
        const data = await response.json().then((value) => {
            setSuccessMessage(value.message);
            toastSuccess(value.message);
        
        });
        navigate("/login");
        return data;
     }catch(error){
        console.log(error);
        // setErrorMessage(`Error 4: ${error}`);
        // toastError(`Toast 4: Something went wrong: ${error}`);
     }
      setLoading(false);
    } 
    return (
        <motion.section className="min-h-screen flex justify-center items-center bg-opacity-10 bg-blend-normal"
        style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.9), hsla(38, 15%, 90%, 0.8)), url(${SelfPlacedBg})`,
            backgroundColor: "hsla(38, 100%, 65%, 0.1)",
            backgroundSize: "cover"
        }}>
        <div className="w-full lg:w-1/2 bg-white py-9 px-6 lg:mx-auto"
            style={{ boxShadow: "0px 20px 40px 0px #0000001A" }}>

            <div className="container w-5/5 m-auto space-y-4">
                <div className="flex justify-between">
                    <Link to="/"><img width={100} src={CoatOfArms} alt="Leep Logo" className="object-contain"
                        style={{ maxWidth: "100%", height: "auto" }} /></Link>
                    <img width={100} src={RenewedHopeLogo} alt="Renewed Hope Logo" className="object-contain"
                        style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <div className=" w-4/5 m-auto">
                    <article className="text-center">
                        <h1 className="text-2xl font-bold leading-7" style={{ color: "hsla(0, 0%, 0%, 1)" }}>VERIFY  YOUR ACCOUNT</h1>
                        <p className="text-xs mt-5">Labour Employment and Empowerment Program</p>
                        <p className="text-xs mt-5">Check your Email Address for your verification code</p>
                    </article>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5">
                            <div className="lg:grid gap-4 lg:grid-cols-2 space-y-6 lg:space-y-0">
                                <FormField control={form.control} name="email" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Email Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="name@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="verificationCode" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Verification Code</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Verification Code" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
  

                            </div>
                            <div className="flex justify-center gap-2">
                                <Button type="button" size="sm" className="w-2/5"><Link to="/">Back To Home</Link></Button>
                                <Button type="submit" size="sm" className=" w-2/5" disabled={!form.formState.isValid} style={{ backgroundColor: "hsl(113 100% 15%)" }}>{loading ? <span className="flex justify-evenly">Continue <LoadingSpinner /></span> : <span className="text-md font-semibold">VERIFY</span>}
                                </Button>
                            </div>
                           
                            {/* <p className="text-center text-sm ">
                                Already have an account? 
                                <span><Link href="/login" style={{ color: "hsla(148, 100%, 29%, 1)" }}>Log In</Link></span>
                            </p> */}
                            {successMessage &&
                                <Dialog>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Congratulations</DialogTitle>
                                            <DialogDescription>
                                                {successMessage}
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            }
                            {errorMessage && <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>
                                    {errorMessage}
                                </AlertDescription>
                            </Alert>}

                            
                        </form> 
                    </Form>
                    <div className="flex justify-center gap-2"> 
                             <button type="button" onClick={() => resendVerification(email)} className="  bg-white p-2 hover:bg-slate-50 italic text-sm text-black">
                                <p className=' mb-2 hover:underline'>   Didn't receive any verification code or it is already expired?.</p>
                                <span className='  w-10 mt-4 hover:underline'> Click here to receive a new one</span>
                           </button>
                 </div>
                </div>


            </div>
        </div>
       </motion.section>   
    );
};

export default EmailVerification;