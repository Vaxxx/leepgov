import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SelfPlacedBg from "../../assets/self-placed-bg.png"; 
import RenewedHopeLogo from '../../assets/renewed-hope.png';
import { Link } from "react-router-dom";
import LeepLogo from '../../assets/federal-leep-empowerment.png';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface ProfileTwoRegistrationProps {
    location: string;
    setLocation: Dispatch<SetStateAction<string>>;
    dateOfBirth: string;
    setDateOfBirth: Dispatch<SetStateAction<string>>;
    currentOccupation: string;
    setCurrentOccupation: Dispatch<SetStateAction<string>>;
    yearsOfExperience: number;
    setYearsofExperience: Dispatch<SetStateAction<number>>;
    previousStep: () => void;
    handleSubmit: () => Promise<void>;
}

const ProfileTwoRegistrationForm = (props: ProfileTwoRegistrationProps) => {

    const formSchema = z.object({
        location: z.string().min(1, {
            message: "Enter a Location"
        }).trim().toLowerCase(),
        dateOfBirth: z.string().date(),
        currentOccupation: z.string().min(2, {
            message: "Enter your current occupation"
        }).trim().toLowerCase(),
        yearsOfExperience: z.coerce.number().gte(0, {
            message: "Years of Experience must be positive"
        })
    })


    const [loading, setLoading] = useState<boolean>(false);
    const { location, setLocation, dateOfBirth, setDateOfBirth, currentOccupation, 
        setCurrentOccupation, yearsOfExperience, setYearsofExperience, previousStep, handleSubmit } = props;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            location,
            dateOfBirth,
            currentOccupation,
            yearsOfExperience,
        }
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLocation(values.location);
        setDateOfBirth(values.dateOfBirth);
        setCurrentOccupation(values.currentOccupation);
        setYearsofExperience(values.yearsOfExperience);
        console.log(values)
        //await handleSubmit();
      }

    return (
        <>
            <section className="min-h-dvh bg-opacity-10 bg-blend-normal" style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.9), 
            hsla(38, 15%, 90%, 0.8)), url(${SelfPlacedBg})`,
            backgroundColor: "hsla(38, 100%, 65%, 0.1)", backgroundSize: "cover"
        }}>
            <div className="lg:w-3/4 lg:mx-auto lg:my-6 bg-white lg:py-9" style={{ boxShadow: "0px 20px 40px 0px #0000001A" }}>
                <div className="flex justify-between pt-4 px-4">
                    <Link to="/"><img width={200} height={38.62} src={LeepLogo} alt="Leep Logo" style={{ marginLeft: "-70px", maxWidth: "100%", height: "auto" }} /></Link>
                    <img width={120} height={36.82} src={RenewedHopeLogo} alt="Renewed Hope Logo" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <div className="container w-4/5 m-auto space-y-8 my-8">
                    <article className="text-center">
                        <h1 className="text-2xl font-bold leading-7" style={{ color: "hsla(0, 0%, 0%, 1)" }}>Expression of Interest</h1>
                        <p className="text-xs">Labour Employment and Empowerment Program</p>
                    </article>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="lg:grid gap-4 lg:grid-cols-2 space-y-6 lg:space-y-0">
                                <FormField control={form.control} name="location" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>What's your <span className="font-bold" style={{ color: "#009444" }}>location?</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Location" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="dateOfBirth" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>What is your <span className="font-bold" style={{ color: "#009444" }}>date of birth</span></FormLabel>
                                        <FormControl>
                                            <Input type="date" placeholder="Date of Birth" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />

                                <FormField control={form.control} name="currentOccupation" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your current <span className="font-bold" style={{ color: "#009444" }}>Occupation?</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Current Occupation" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="yearsOfExperience" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Years of <span className="font-bold" style={{ color: "#009444" }}>Experience?</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Last Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                
                            </div>
                            
                            <Button type="button" size="lg" className="w-full" onClick={previousStep}>Previous</Button>
                            <Button type="submit" size="lg" className="w-full" style={{ backgroundColor: "hsla(148, 100%, 29%, 1)" }} disabled={!form.formState.isValid}>{loading ? <span className="flex justify-evenly">Continue <p>spinner</p></span> : <span>Submit</span>}</Button>
                        </form>
                    </Form>
                    {/* <p className="text-center">Already have an account? <span><Link href="/login"
                        style={{ color: "hsla(148, 100%, 29%, 1)" }}>Log In</Link></span></p> */}
                </div>
            </div>
        </section>   
        </>
    );
};

export default ProfileTwoRegistrationForm;