"use client";

import React, { useEffect, useState } from "react";
import PersonalInformationForm from "../complete/RegistrationForm/PersonalInformationForm";
import ProfessionalInformationForm from "../complete/RegistrationForm/ProfessionalInformationForm";
import BankInformationForm from "../complete/RegistrationForm/BankInformationForm";
import UploadInformationForm from "../complete/RegistrationForm/UploadInformationForm";
import StepSixForm from "../complete/RegistrationForm/StepSixForm";
import StepFiveForm from "../complete/RegistrationForm/StepFiveForm";
import { useRouter } from "next/navigation";
import Navbar from "../componets/Navba";
import NavSec from "../componets/NavSec";

const RegistrationPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const router = useRouter();  // Initialize useRouter

  // Handle progress bar width
  const progressWidth = ((step - 1) / 6) * 100;

  const handleNextStep = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    if (step === 6) {
      handleFinalSubmit(data); // This will trigger final form submission at step 6
    } else {
      setStep(step + 1); // Proceed to the next step if it's not the last one
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleFinalSubmit = async (data: any) => {
    const finalData = { ...formData, ...data };
     console.log("we are here")
    try {
      // Send data to backend API
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        console.log("Form submitted successfully",finalData);
        alert("Registration completed successfully!");
        setIsSubmitted(true);  // Set submitted flag to true
      } else {
        alert("There was an error submitting your registration.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your registration.");
    }
  };

  // Use useEffect to redirect after the form is submitted
  useEffect(() => {
    if (isSubmitted) {
      // Trigger redirection only once after submission
      router.push("/complete");
      // handleFinalSubmit()
    }
  }, [isSubmitted, router]);  // Redirect when form is submitted

  return (
    <>
    <NavSec />
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#e1e6ff] py-12">
      <div className="container mx-auto px-6">
        {/* Progress Bar */}
        <div className="relative mb-6">
          <div className="h-2 bg-[#e1e6ff] rounded-full">
            <div
              className="h-2 bg-[#12115e] rounded-full transition-all"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>
          {/* <div className="absolute top-0 left-0 right-0 text-center text-sm text-[#12115e]">
            Step {step} of 6
          </div> */}
        </div>

        {/* Step Components */}
        {step === 1 && <PersonalInformationForm stepData={formData} onNext={handleNextStep} />}
        {step === 2 && <ProfessionalInformationForm stepData={formData} onNext={handleNextStep} onBack={handlePrevStep} />}
        {step === 3 && <BankInformationForm stepData={formData} onNext={handleNextStep} onBack={handlePrevStep} />}
        {step === 4 && <UploadInformationForm stepData={formData} onNext={handleNextStep} onBack={handlePrevStep} />}
        {step === 5 && <StepFiveForm onNext={handleNextStep} onBack={handlePrevStep} />}
        {step === 6 && <StepSixForm onNext={handleNextStep} onBack={handlePrevStep} />}

        {/* After step 6, the submit action triggers */}
        {step === 7 && (
          <div className="text-center">
            <p>Submitting and redirecting...</p>
          </div>
        )}

      </div>
    </div>
    </>
  );
};

export default RegistrationPage;
