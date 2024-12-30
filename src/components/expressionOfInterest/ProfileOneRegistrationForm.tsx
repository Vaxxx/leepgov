import { useEffect, useState } from "react"; 
import { z } from "zod";
import stateLgaJson from "../../lib/state-lga.json";
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toastError, toastInfo, toastSuccess } from "@/App";
import { motion } from "framer-motion";
import CoatOfArms from "../../assets/coat-of-arms-img.png";
import RenewedHopeLogo from '../../assets/renewed-hope.png';
import SelfPlacedBg from "../../assets/self-placed-bg.png";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button"; 
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { AlertCircle, Check, ChevronsUpDown } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { cn } from "@/lib/utils";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { LoadingSpinner } from "../LoadingSpinner"; 




type StateLga = {
    state: string
    alias: string
    lgas: string[]
}



const ProfileOneRegistrationForm = () => {
    const navigate = useNavigate();
    const [states, _] = useState<StateLga[]>(stateLgaJson);
    const [lgas, setLgas] = useState<string[]>([]);
 

    const [loading, setLoading] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [openLga, setLgaOpen] = useState<boolean>(false); 
    
 
    const [email, setEmail] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [middleName, setMiddleName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [stateOfResidence, setStateOfResidence] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [lga, setLga] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");


    const formSchema = z.object({
        email: z.string().email({
            message: "Please enter a valid email"
        }).trim().toLowerCase(),
        firstName: z.string().min(1, {
            message: "Enter a valid first name"
        }).trim().toLowerCase(),
        middleName: z.string().trim().toLowerCase(),
        lastName: z.string().min(1, {
            message: "Enter a valid last name"
        }).trim().toLowerCase(),
        phoneNumber: z.string().min(10, {
            message: "Phone Number must be 11 digits"
        }).max(11, {
            message: "Phone Number must be 11 digits"
        }).trim(),
        stateOfResidence: z.string().trim().toLowerCase().min(2),
        gender: z.string().min(2),
        lga: z.string().min(2),
        role: z.enum(["USER", "MANAGER", "ADMIN"]),
        password: z.string()
    
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        //mode: "onChange",
        defaultValues: {
            email,
            firstName,
            middleName,
            lastName,
            phoneNumber,
            stateOfResidence,
            gender,
            lga,
            role: "USER",
            password: "password"
        }
    });

    const {reset, handleSubmit, formState: {isSubmitSuccessful}} = form;

    useEffect(() => {
        const data = states.find((state) => state.alias.toLowerCase() === stateOfResidence.toLowerCase())?.lgas
        setLgas(data!);
    }, [stateOfResidence])

    async function onSubmit(values: z.infer<typeof formSchema>) {

        console.log("The VALUES>>>");
        console.log(values);
 
        
        setLoading(true);
        setEmail(values.email);
        setFirstName(values.firstName);
        setLastName(values.lastName);
        setMiddleName(values.middleName);
        setPhoneNumber(values.phoneNumber);
        setStateOfResidence(values.stateOfResidence);
        setGender(values.gender);
        setLga(values.lga);


        //  const { email, firstName, lastName, middleName, phoneNumber, stateOfResidence, gender, lga, role, password } = values;
         try{
            let existingEmail ="";
           //first check if email already exists
           await fetch(`${import.meta.env.VITE_BASE_URL}/auth/check-mail/${values.email}`, {
             method: 'GET',
             headers: {
                 'Content-Type' : 'application/json'
             }
           }).then(response => response.json())
           .then(data => {
             existingEmail = data.email;
            console.log("DATA:" + data.email); 
            console.log("DATA STATUS:" + data.status); 
           })
        
           console.log("Email exists: ")
           console.log( "New VAlue: " + existingEmail); 
           console.log("isString")
           console.log(existingEmail === null || existingEmail === undefined || existingEmail === "")
           console.log( typeof existingEmail.toString() == "string") ;
           console.log("Length: " + existingEmail.length)
           if (existingEmail.length > 0){
            //meaning an account with the email address already exists
            toastError("An account with the email address already exists");
            navigate("/login");
           }  
           else if(existingEmail.length <= 0){
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        email: values.email,
                        firstName: values.firstName,
                        lastName:values.lastName, 
                        middleName: values.middleName, 
                        phone: values.phoneNumber,
                        state:stateOfResidence, 
                        lga:values.lga,
                        gender:values.gender,
                        role:values.role,
                        password:values.password,
                    })
                })
    
                if(!response.ok){
                     response.json().then((value) => {
                        setErrorMessage(value.message);
                        toastError(value.message);
                        setLoading(false);
                     })
                }
               
                toastSuccess("Than you for expressing your interest, Please check your email box to verify your email and account. If your email is not verified, we would not be able to reach you");

                setTimeout(function() {
                    toastInfo("If you did not receive any message from us within 5 minutes, please check your spam")
                }, 2000);
               
                const data = await response.json().then((value) => {
                    setSuccessMessage(value.message);
                    toastSuccess(value.message);
                
                });
                
                navigate("/verify-email");
                return data;
            } 
           
         }catch(error){
            console.log(error);
            setErrorMessage(`${error}`);
            toastError(`Something went wrong: ${error}`);
         }
          setLoading(false);
    }

    const checkResult = async() => {
        await fetch(`${import.meta.env.VITE_BASE_URL}/auth/check-mail/vakpo.okagbare@gmail.com`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
          }).then(response => response.json())
          .then(data => { 
            console.log(data.email);
          })
          .catch(errorMessage => console.error(errorMessage))
    }
    return (
        <div>
           <motion.section className="min-h-screen flex justify-center items-center bg-opacity-10 bg-blend-normal"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.9), hsla(38, 15%, 90%, 0.8)), url(${SelfPlacedBg})`,
                backgroundColor: "hsla(38, 100%, 65%, 0.1)",
                backgroundSize: "cover"
            }}>
           
            <div className="w-full lg:w-1/2 bg-white py-9 px-6 lg:mx-auto"
                style={{ boxShadow: "0px 20px 40px 0px #0000001A" }}>
             <Button onClick={checkResult} type="button">Check values </Button>
                <div className="container w-5/5 m-auto space-y-8">
                    <div className="flex justify-between">
                        <Link to="/"><img width={100} src={CoatOfArms} alt="Leep Logo" className="object-contain"
                            style={{ maxWidth: "100%", height: "auto" }} /></Link>
                              <div className='h-12 w-12 p-1 rounded border-2 border-ring'>
                                                            <ModeToggle/>
                                                        </div>
                        <img width={100} src={RenewedHopeLogo} alt="Renewed Hope Logo" className="object-contain"
                            style={{ maxWidth: "100%", height: "auto" }} />
                    </div>
                    <div className=" w-4/5 m-auto">
                        <article className="text-center">
                            <h1 className="text-2xl font-bold leading-7" style={{ color: "hsla(0, 0%, 0%, 1)" }}>Expression of Interest</h1>
                            <p className="text-xs mt-5">Labour Employment and Empowerment Program</p>
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
                                    <FormField control={form.control} name="firstName" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">First Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="First Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    <FormField control={form.control} name="middleName" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Middle Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Middle Name" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is optional.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    <FormField control={form.control} name="lastName" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Last Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Last Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    <FormField control={form.control} name="phoneNumber" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Phone Number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Phone Number" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    <FormField control={form.control} name="stateOfResidence" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Where do you live?</FormLabel>
                                            <FormControl>
                                                <Popover open={open} onOpenChange={setOpen}>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant="outline"
                                                            role="combobox"
                                                            aria-expanded={open}
                                                            className="w-full justify-between capitalize"
                                                        >
                                                            {field.value
                                                                ? states.map((state) => state.alias).find(stat => stat.toLowerCase() === field.value.toLowerCase())
                                                                : "Select State..."}
                                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-full p-0">
                                                        <Command>
                                                            <CommandInput placeholder="Search State..." />
                                                            <CommandList>
                                                                <CommandEmpty>No states found.</CommandEmpty>
                                                                <CommandGroup>
                                                                    {states?.map((state) => (
                                                                        <CommandItem
                                                                            key={state.alias}
                                                                            value={state.alias}
                                                                            className="capitalize"
                                                                            onChange={field.onChange}
                                                                            onSelect={(currentValue: React.SetStateAction<string>) => {
                                                                                field.onChange(currentValue)
                                                                                setStateOfResidence(currentValue);
                                                                                setOpen(false)
                                                                            }}
                                                                        >
                                                                            <Check
                                                                                className={cn(
                                                                                    "mr-2 h-4 w-4",
                                                                                    field.value.toLowerCase() === state.alias.toLowerCase() ? "opacity-100" : "opacity-0"
                                                                                )}
                                                                            />
                                                                            {state.state}
                                                                        </CommandItem>
                                                                    ))}
                                                                </CommandGroup>
                                                            </CommandList>
                                                        </Command>
                                                    </PopoverContent>
                                                </Popover>
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                  {/* add fields called role and password */}
                                  <FormField
                                    control={form.control}
                                    name="role"
                                    render={({field}) => (
                                        <FormItem>
                                        <FormLabel></FormLabel>
                                        <FormControl>
                                            <Input   type="hidden" {...field}/>
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
                                    <FormLabel></FormLabel>
                                    <FormControl>
                                        <Input type="hidden" {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                    </FormItem>
                                )}
                               />


                                    <FormField control={form.control} name="lga" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Local Government Area (LGA)</FormLabel>
                                            <FormControl>
                                                <Popover open={openLga} onOpenChange={setLgaOpen}>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant="outline"
                                                            role="combobox"
                                                            aria-expanded={open}
                                                            className="w-full justify-between capitalize"
                                                        >
                                                            {field.value
                                                                ? lgas.find(lga => lga.toLowerCase() === field.value.toLowerCase())
                                                                : "Select LGA..."}
                                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-full p-0">
                                                        <Command>
                                                            <CommandInput placeholder="Search State..." />
                                                            <CommandList>
                                                                <CommandEmpty>No LGAs found.</CommandEmpty>
                                                                <CommandGroup>
                                                                    {lgas?.map((lga) => (
                                                                        <CommandItem
                                                                            key={lga}
                                                                            value={lga}
                                                                            className="capitalize"
                                                                            onChange={field.onChange}
                                                                            onSelect={(currentValue: React.SetStateAction<string>) => {
                                                                                field.onChange(currentValue)
                                                                                setLga(currentValue);
                                                                                setOpen(false)
                                                                            }}
                                                                        >
                                                                            <Check
                                                                                className={cn(
                                                                                    "mr-2 h-4 w-4",
                                                                                    field.value.toLowerCase() === lga.toLowerCase() ? "opacity-100" : "opacity-0"
                                                                                )}
                                                                            />
                                                                            {lga}
                                                                        </CommandItem>
                                                                    ))}
                                                                </CommandGroup>
                                                            </CommandList>
                                                        </Command>
                                                    </PopoverContent>
                                                </Popover>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    
                                    <FormField control={form.control} name="gender" render={({ field }) => (
                                        <FormItem className="mb-6">
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Gender</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="space-y-3 mt-2"
                                                >
                                                    <div className="flex items-between">
                                                        <FormItem className="space-x-3 bg-gray-100 px-4 py-2  rounded-lg shadow-sm hover:shadow-md transition-shadow duration-150 ease-in-out">
                                                            <FormControl>
                                                                <RadioGroupItem value="male" className="form-radio text-indigo-600 focus:ring-indigo-500" />
                                                            </FormControl>
                                                            <FormLabel className="text-base font-normal text-gray-600">
                                                                Male
                                                            </FormLabel>
                                                        </FormItem>
                                                        <FormItem className="space-x-3 bg-gray-100 px-4 py-2 mx-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-150 ease-in-out">
                                                            <FormControl>
                                                                <RadioGroupItem value="female" className="form-radio text-indigo-600 focus:ring-indigo-500" />
                                                            </FormControl>
                                                            <FormLabel className="text-base font-normal text-gray-600">
                                                                Female
                                                            </FormLabel>
                                                        </FormItem>

                                                    </div>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage className="mt-1 text-xs text-red-500" />
                                        </FormItem>
                                    )} />


                                </div>
                                <div className="flex justify-center gap-2">
                                    <Button type="button" size="sm" className="w-2/5 border-2 border-ring"><Link to="/">Back</Link></Button>
                                    <Button type="submit" size="sm" className=" w-2/5" disabled={!form.formState.isValid} style={{ backgroundColor: "hsl(113 100% 15%)" }}>{loading ? <span className="flex justify-evenly">Continue <LoadingSpinner /></span> : <span className="text-md font-semibold">Submit</span>}
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
                        <div className="flex justify-center place-items-center flex-col gap-1"> 
                               <h2 className=' mb-2 '>   Already expressed interest?.</h2>
                                <Link to="/login" className='flex text-blue-600   hover:underline hover:text-blue-950'> Click here to Login</Link>                
                         </div>
                    </div>


                </div>
            </div>
           </motion.section>   
        </div>
    );
};

export default ProfileOneRegistrationForm;