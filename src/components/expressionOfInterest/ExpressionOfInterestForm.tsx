import { useState } from 'react';
import ProfileOneRegistrationForm from './ProfileOneRegistrationForm';

const ExpressionOfInterestForm = () => {

    const [step, setStep] = useState<number>(0);
    const [email, setEmail] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [middleName, setMiddleName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [stateOfResidence, setStateOfResidence] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [lga, setLga] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [dateOfBirth, setDateOfBirth] = useState<string>("");
    const [currentOccupation, setCurrentOccupation] = useState<string>("");
    const [yearsOfExperience, setYearsofExperience] = useState<number>(0);

    const nextStep = () =>  setStep((prevStep) => prevStep + 1);
    const previousStep = () => setStep((prevStep) => prevStep - 1);

    const handleSubmit = async () => {
        // try {
        //     // const registerUser = await fetch('http://localhost:3000/api/user', {
        //     //     method: 'POST',
        //     //     body: JSON.stringify({email, firstName,
        //     //             middleName, lastName, phoneNumber, stateOfResidence, gender, location, lga})
        //     // })
        //     // if (registerUser.status !== 200) {
                
        //     // }
        //     // toast({
        //     //     title: "Thank you for expressing your interest",
        //     //     description: "Kindly check your email for updates. We will get back to you as soon as possible"
        //     // })
        // }  

    }

    const profileOneProps = {
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        middleName,
        setMiddleName,
        stateOfResidence,
        setStateOfResidence,
        gender,
        setGender,
        lga,
        setLga,
        nextStep,
        handleSubmit
    }

   

    const profileTwoProps = {
        location,
        setLocation,
        dateOfBirth,
        setDateOfBirth,
        currentOccupation,
        setCurrentOccupation,
        yearsOfExperience,
        setYearsofExperience,
        previousStep,
        handleSubmit
    }

    return (
        <ProfileOneRegistrationForm />
    );
};

export default ExpressionOfInterestForm;