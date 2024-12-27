import React from 'react'; 
import { motion } from 'framer-motion';
import { useEffect, useState } from "react"; 
import {  z } from "zod";
import stateLgaJson from "../../lib/state-lga.json";
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns"
import CoatOfArms from "../../assets/coat-of-arms-img.png";
import RenewedHopeLogo from '../../assets/renewed-hope.png';  
import SelfPlacedBg from "../../assets/self-placed-bg.png";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";  
import { cn } from "@/lib/utils";  
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';  
import { Button } from '@/components/ui/button'; 
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Calendar } from '@/components/ui/calendar';
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import DatePicker from "react-datepicker"; 
import { toastError, toastInfo, toastSuccess } from '@/App';
import { Input } from '@/components/ui/input';
import "react-datepicker/dist/react-datepicker.css";
import { Textarea } from '@/components/ui/textarea';
import UserService from '@/services/UserService';
import { ModeToggle } from '@/components/mode-toggle';


type StateLgas = {
    state: string
    alias: string
    lgas: string[]
}




const ProfileRegistration = () => {

   const navigate = useNavigate();
   
   const [states, _] = useState<StateLgas[]>(stateLgaJson);
   const [lgas, setLgas] = useState<string[]>([]);


   const [loading, setLoading] = useState<boolean>(false);
   const [open, setOpen] = useState<boolean>(false);
   const [openLga, setLgaOpen] = useState<boolean>(false);
   
   const [dob, setDob] = React.useState<Date | undefined>(new Date()); 
   const [localState, setLocalState] = useState<string>("");
   const [localLga, setLocalLga] = useState<string>("");
   const [qualification, setQualification] = useState<string>("");
   const [yearsOfExperience, setYearsOfExperience] = useState<string>("");
   const [currentOccupation, setCurrentOccupation] = useState<string>("");
   const [kinName, setKinName] = useState<string>("");
   const [kinAddress, setKinAddress] = useState<string>("");
   const [kinRelationship, setKinRelationship] = useState<string>("");
   const [schoolName, setSchoolName] = useState<string>("");
   const [schoolFrom, setSchoolFrom] = React.useState<Date | undefined>(new Date()); 
   const [schoolTo, setSchoolTo] = React.useState<Date | undefined>(new Date()); 
   const [schoolCertificate, setSchoolCertificate] = useState<string>("");
   const [schoolYear, setSchoolYear] = React.useState<Date | undefined>(new Date()); 
   const [empName, setEmpName] = useState<string>(""); 
   const [empAddress, setEmpAddress] = useState<string>(""); 
   const [workFrom, setWorkFrom] = React.useState<Date | undefined>(new Date()); 
   const [workTo, setWorkTo] = React.useState<Date | undefined>(new Date());  

//    extras
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

   const [successMessage, setSuccessMessage] = useState<string>("");
   const [errorMessage, setErrorMessage] = useState<string>("");

   const { state }  = useLocation();
   const emailValue = state || {};
 
   const formSchema = z.object({ 
    dob : z.date({
     required_error:"Please enter a valid date of birth"
    }),
    localState: z.string().trim().toLowerCase().min(2),
    localLga: z.string().min(2),
    qualification: z.string().trim().toLowerCase(),
    yearsOfExperience: z.string().trim(),
    currentOccupation: z.string().trim().toLowerCase(),

    kinName: z.string().min(1, {
        message: "Enter a valid Kin name"
    }).trim().toLowerCase(),

    kinAddress: z.string().min(1, {
        message: "Enter a valid Kin Address"
    }).trim().toLowerCase(),

    kinRelationship: z.string().min(1, {
        message: "Enter a valid Kin Relationship"
    }).trim().toLowerCase(),

    schoolName: z.string().min(1, {
        message: "Enter a valid School name"
    }).trim().toLowerCase(),

    schoolFrom : z.date({
        required_error:"Enter a valid year you started the school"
       }),

    schoolTo : z.date({
    required_error:"Enter a valid year you finished the school"
    }),

    schoolCertificate: z.string().min(1, {
        message: "Enter the certificate obtained"
    }).trim().toLowerCase(), 
    
    schoolYear: z.date({
        required_error: "Enter the year the certificate was obtained"
    }),
      
    empName: z.string().min(1, {
        message: "Enter the name of the company you work"
    }).trim().toLowerCase(),   

    empAddress: z.string().min(1, {
        message: "Enter the address of the company you work"
    }).trim().toLowerCase(), 
    
    workFrom: z.date({
        required_error: "Enter the year you started working here"
    }), 

    workTo: z.date({
        required_error: "Enter the year you stop working here"
    }),
    
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long"
    }),
       
    confirmPassword: z.string().min(8, {
        message: "Password must be at least 8 characters long"
    }),
   

})

const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    //mode: "onChange",
    defaultValues: {
        dob,
        localState,
        localLga,
        qualification,
        yearsOfExperience,
        currentOccupation,
        kinName,
        kinAddress,
        kinRelationship,
        schoolName,
        schoolFrom,
        schoolTo,
        schoolYear,
        schoolCertificate,
        empName,
        empAddress,
        workFrom,
        workTo,
        password,
        confirmPassword
    }
});

const {reset, handleSubmit, formState: {isSubmitSuccessful}} = form;

const cleanDate =(date: Date) =>{
    return date?.toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' );
 }

useEffect(() => {
    const data = states.find((state) => state.alias.toLowerCase() === localState.toLowerCase())?.lgas
    setLgas(data!);
}, [localState])

async function onSubmit(values: z.infer<typeof formSchema>) {
    //get the value of the email from the login field
    console.log("Email VAlue: " + emailValue)
    //get the user id from the email address provided
    const idd = await UserService.getUserId(emailValue);
    console.log("USER ID>>>" + idd)
     //check if the user already has a profile
     const isProfileExists = await UserService.checkIfProfileExists(idd);
     
    if(isProfileExists.currentOccupation === null || isProfileExists.currentOccupation !== "") {
        //meaning the user already has an existing profile
        toastError("The email account is already registered to an existing profile");
        navigate("/login");
    }

    console.log("The VALUES>>>");
    console.log(values);
    console.log(values.qualification)
    setLoading(true);
    setDob(values.dob);
    setLocalState(values.localState);
    setLocalLga(values.localLga); 
    setQualification(values.qualification);
    setYearsOfExperience(values.yearsOfExperience);
    setCurrentOccupation(values.currentOccupation);
    setKinName(values.kinName); 
    setKinAddress(values.kinAddress);
    setKinRelationship(values.kinRelationship);
    setSchoolName(values.schoolName);
    setSchoolFrom(values.schoolFrom);
    setSchoolTo(values.schoolTo);
    setSchoolCertificate(values.schoolCertificate);
    setSchoolYear(values.schoolYear);
    setEmpName(values.empName);
    setEmpAddress(values.empAddress);
    setWorkFrom(values.workFrom);
    setWorkTo(values.workTo);
    setPassword(values.password);
    setConfirmPassword(values.confirmPassword);

    try{
    if(isNaN(Number.parseInt(values.yearsOfExperience))){
        setErrorMessage("Years of experience must be a number")
        toastError("Years of experience must be a number");
        return;
      }
      else if(values.password !== values.confirmPassword){
        setErrorMessage("Passwords do not match")
        toastError("Passwords do not match");
        return;
      }
      else{
    
    //    first check if email exists -> if it does then proceedd
       const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/check-mail/${emailValue}`, {
         method: 'GET',
         headers: {
             'Content-Type' : 'application/json'
         }
       })

        if(!res.ok){
             toastInfo("This user does not exist in the database")
             navigate("/join");
        }
     
          const valueDob =  cleanDate(dob);
          console.log("VALUE DOB>>>" + valueDob);
          const valueLocalState = values.localState;
          const valueLocalLga = values.localLga;
          const valueQualification =  values.qualification;
         
          const valueYearsOfExperience = values.yearsOfExperience;
          const valueCurrentOccupation =  values.currentOccupation;
          const valueKinName =  values.kinName;
          const valueKinAddress = values.kinAddress;
          const valueKinRelationship = values.kinRelationship;
          const valueSchoolName =  values.schoolName;
          const valueSchoolFrom = cleanDate(schoolFrom);
          const valueSchoolTo = cleanDate(schoolTo);
          const valueSchoolCertificate =  values.schoolCertificate;
          const valueSchoolYear =  cleanDate(schoolYear);
          const valueEmpName =  values.empName;
          const valueEmpAddress = values.empAddress;
          const valueWorkFrom =  cleanDate(workFrom);
          const valueWorkTo = cleanDate(workTo);
          const valuePassword = values.password;
          console.log("Confirm PASSWORD: " + values.confirmPassword);

            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/add-profile`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    dob: valueDob,
                    localState: valueLocalState,  
                    localLga: valueLocalLga,
                    qualification: valueQualification,
                    yearsOfExperience: valueYearsOfExperience,
                    currentOccupation: valueCurrentOccupation,
                    kinName: valueKinName,
                    kinAddress: valueKinAddress,
                    kinRelationship: valueKinRelationship,
                    schoolName: valueSchoolName,
                    schoolFrom: valueSchoolFrom,
                    schoolTo: valueSchoolTo,
                    schoolCertificate: valueSchoolCertificate,
                    schoolYear: valueSchoolYear,
                    empName: valueEmpName,
                    empAddress: valueEmpAddress, 
                    workFrom: valueWorkFrom,
                    workTo: valueWorkTo,
                    password: valuePassword,
                    userId: idd
                       
                })
            })

            if(!response.ok){
                 response.json().then((value) => {
                    setErrorMessage(value.message);
                    toastError(value.message);
                    setLoading(false);
                 })
                 return;
            }
           
            toastSuccess("Congratulation you have completed your Registration. You can now add courses.")
            // const data = await response.json().then((value) => {
            //     setSuccessMessage(value.message);
            //     toastSuccess(value.message);
            
            // });
            
            navigate("/user-dashboard");
            // return data;
    
    
       
    
      setLoading(false);
    }
    }catch(error){
        console.log(error);
        // setErrorMessage(`${error}`);
        // toastError(`Something went wrong: ${error}`);
 }
}



    return ( 
             <div> 
             <motion.section className="min-h-screen flex justify-center items-center bg-opacity-10 bg-blend-normal"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.9), hsla(38, 15%, 90%, 0.8)), url(${SelfPlacedBg})`,
                backgroundColor: "hsla(38, 100%, 65%, 0.1)",
                backgroundSize: "cover"
            }}>
            <div className="w-full lg:w-4/5 bg-white py-9 px-6 lg:mx-auto"
                style={{ boxShadow: "0px 20px 40px 0px #0000001A" }}>

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
                            <h1 className="text-2xl font-bold leading-7" style={{ color: "hsla(0, 0%, 0%, 1)" }}>Complete Profile</h1>
                            <p className="text-xs mt-5">Labour Employment and Empowerment Program</p>
                        </article>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5">
                                <div className="lg:grid gap-4 lg:grid-cols-2 space-y-6 lg:space-y-0">
 
                                    {/* DOB */}
                                    <FormField control={form.control} name="dob" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Date of Birth</FormLabel>
                                            <FormControl>
                                               <div >
                                               <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[280px] justify-start text-left font-normal",
                                                            !dob && "text-muted-foreground"
                                                        )}
                                                        >
                                                        <CalendarIcon />
                                                        {dob ? format(dob, "PPP") : <span>Choose your date of birth</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                        {/* <Calendar
                                                        mode="single"
                                                        selected={dob}
                                                          onSelect={setDob}
                                                        initialFocus
                                                        className='bg-slate-300 dark:bg-black'
                                                        />    */}
                                                       <DatePicker  className='bg-slate-300 dark:bg-black' selected={dob} onChange={(date) => setDob(date)} />  
                                                    </PopoverContent>
                                               </Popover>
                                               </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />  

                                    {/* STATE */}
                                    <FormField control={form.control} name="localState" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">What State are you from?</FormLabel>
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
                                                                                setLocalState(currentValue);
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

                                        {/* LGA */}
                                        <FormField control={form.control} name="localLga" render={({ field }) => (
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
                                                                                setLocalLga(currentValue);
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

                                        {/* Qualification */}
                                    <FormField control={form.control} name="qualification" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Qualification</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Qualification" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                   {/* Years of experience */}
                                    <FormField control={form.control} name="yearsOfExperience" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Years Of Experience</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Years of Experience" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                   {/* current occupation  */}
                                    <FormField control={form.control} name="currentOccupation" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Current Occupation</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Current Occupation" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                 <fieldset className='card border-ring space-x-2 lg:space-x-6 space-y-8 p-10'>
                                   <FormLabel className="w-full text-sm text-slate-500">Next Of Kin</FormLabel>
                                        {/* Kin Name */}
                                    <FormField control={form.control} name="kinName" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Kin Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} /> 
                              
                                        {/* Kin Address */}
                                    <FormField control={form.control} name="kinAddress" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Kin Address" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />


                                        {/* Kin Relationship */}
                                    <FormField control={form.control} name="kinRelationship" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Relationship</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Kin Relationship" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} /> 

                                    </fieldset>
                                    {/* school details */}
                                    <fieldset className='card  lg:space-x-6 space-y-3 p-10'>
                                    <FormLabel className='w-full text-sm text-slate-500'>School</FormLabel>
                                        {/* School Name */}
                                    <FormField control={form.control} name="schoolName" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="School Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                        {/* School Date Started */}
                                      <FormField control={form.control} name="schoolFrom" render={({ field }) => (
                                        <FormItem  className="p-2">
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2 w-full md:w-1/2 ml-5">From:</FormLabel>
                                            <FormControl className='w-full md:w-1/2' >
                                                
                                              <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            " justify-start text-left font-normal w-full md:w-1/2 ",
                                                            !schoolFrom && "text-muted-foreground"
                                                        )}
                                                        >
                                                        <CalendarIcon />
                                                        {schoolFrom ? format(schoolFrom, "PPP") : <span>Date School Started</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                        
                                                         <DatePicker className='w-full lg:w-1/2'  selected={schoolFrom} onChange={(date) => setSchoolFrom(date)} />
                                                    </PopoverContent>
                                               </Popover>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />  

                                        {/* School Date Finished */}
                                    <FormField control={form.control} name="schoolTo" render={({ field }) => (
                                        <FormItem  className="p-2">
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2 w-full md:w-1/2">To:</FormLabel>
                                            <FormControl>
                                                
                                              <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[280px] justify-start text-left font-normal",
                                                            !schoolTo && "text-muted-foreground"
                                                        )}
                                                        >
                                                        <CalendarIcon />
                                                        {schoolTo ? format(schoolTo, "PPP") : <span>Date School Finished</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                       
                                                         <DatePicker className='w-full md:w-1/2' selected={schoolTo} onChange={(date) => setSchoolTo(date)} />
                                                    </PopoverContent>
                                               </Popover>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />  

                              
                                        {/* School Certificate */}
                                      <FormField control={form.control} name="schoolCertificate" render={({ field }) => (
                                        <FormItem  className="p-2">
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">  Certificate Obtained</FormLabel>
                                            <FormControl>
                                                <Input placeholder="School Certificate" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />  
                                  
                                    {/* School Year */}
                                    <FormField control={form.control} name="schoolYear" render={({ field }) => (
                                        <FormItem  className="p-2">
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Year Certificate was Obtained</FormLabel>
                                            <FormControl>
                                                
                                              <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[280px] justify-start text-left font-normal",
                                                            !schoolYear && "text-muted-foreground"
                                                        )}
                                                        >
                                                        <CalendarIcon />
                                                        {schoolYear ? format(schoolYear, "PPP") : <span>Date School Finished</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                         <Calendar
                                                        mode="single"
                                                        selected={schoolYear}
                                                          onSelect={setSchoolYear}
                                                        initialFocus
                                                        /> * 
                                                         <DatePicker selected={schoolYear} onChange={(date) => setSchoolYear(date)} />
                                                    </PopoverContent>
                                               </Popover>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    
                                    </fieldset>

                                    {/* employee details */}
                                    <fieldset className='card border-2 space-x-4 lg:space-x-6 space-y-5 p-4'>
                                    <FormLabel className='w-full text-sm text-slate-500'>Employee Details</FormLabel>
                                    {/* Emp Name */}
                                    <FormField control={form.control} name="empName" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Name</FormLabel>
                                            <FormControl>
                                                <Input type="text" placeholder="Employee Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />


                                    {/* Emp Address */}
                                    <FormField control={form.control} name="empAddress" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Address</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Employee Address" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />


                                    {/* Work From */}
                                    <FormField control={form.control} name="workFrom" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">From:</FormLabel>
                                            <FormControl>
                                                
                                              <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[280px] justify-start text-left font-normal",
                                                            !workFrom && "text-muted-foreground"
                                                        )}
                                                        >
                                                        <CalendarIcon />
                                                        {workFrom ? format(workFrom, "PPP") : <span>To:</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                        {/* <Calendar
                                                        mode="single"
                                                        selected={workFrom}
                                                          onSelect={setWorkFrom}
                                                        initialFocus
                                                        /> */}

                                                         <DatePicker selected={workFrom} onChange={(date) => setWorkFrom(date)} />
                                                    </PopoverContent>
                                               </Popover>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} /> 


                                    {/* Work To */}
                                    <FormField control={form.control} name="workTo" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Date You Finished Working here</FormLabel>
                                            <FormControl>
                                                
                                              <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[280px] justify-start text-left font-normal",
                                                            !workTo && "text-muted-foreground"
                                                        )}
                                                        >
                                                        <CalendarIcon />
                                                        {workTo ? format(workTo, "PPP") : <span>Date School Finished</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                       
                                                         <DatePicker selected={workTo} onChange={(date) => setWorkTo(date)} />
                                                    </PopoverContent>
                                               </Popover>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    </fieldset>

                                    <fieldset className='card space-x-2 md:space-x-8  space-y-9 p-5'>
                                     <FormLabel className='w-80 md:w-1/2 text-sm text-slate-500 ml-5'>Password Details</FormLabel>
                                    {/* First Name */}
                                    {/* password */}
                                    <FormField control={form.control} name="password" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Password</FormLabel>
                                            <FormControl>
                                                <Input placeholder="***********" type="password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700 mb-2">Confirm Password</FormLabel>
                                            <FormControl>
                                                <Input placeholder="***********" type="password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    </fieldset>
                                    
                                </div>
                                <div className="flex justify-center gap-2">
                                    <Button type="button" size="sm" className="w-2/5"><Link to="/">Back To Home</Link></Button>
                                    <Button type="submit" size="sm" className=" w-2/5" disabled={!form.formState.isValid} style={{ backgroundColor: "hsl(113 100% 15%)" }}>{loading ? <span className="flex justify-evenly">Continue <LoadingSpinner /></span> : <span className="text-md font-semibold">Complete Profile</span>}
                                    </Button>
                                </div>
                              <div className="flex justify-center">
                                  <Link to="/join" className='text-indigo-400 text-xl'>Click To Express Interest</Link>
                              </div>
                            </form>
                        </Form>
                      
                    </div>


                </div>
            </div>
             </motion.section> 
             </div> 
    );
};

export default ProfileRegistration;