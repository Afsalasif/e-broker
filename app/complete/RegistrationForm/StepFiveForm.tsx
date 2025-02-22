"use client";

import React, { useState } from "react";

interface StepFiveFormProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

const StepFiveForm: React.FC<StepFiveFormProps> = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    educationLevel: "",
    employmentStatus: "",
    moveToDubai: "",
    remoteWorkExperience: "",
    realEstateCareerInterest: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const renderRadio = (name: string, question: string, options: string[]) => (
    <div className="space-y-2">
      <label className="block text-lg font-medium">{question}</label>
      <div className="flex items-center gap-6">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input
              type="radio"
              name={name}
              value={option}
              checked={formData[name as keyof typeof formData] === option}
              onChange={handleChange}
              required
              className="accent-[#12115e] focus:ring-[#12115e]"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl mt-10 text-[#12115e] font-[sans-serif]">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#12115e] to-[#302c8e] bg-clip-text text-transparent">
      select your answers
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Education Level */}
        {renderRadio(
          "educationLevel",
          "What is your education level?",
          ["High School", "Bachelor's ", "Master's"]
        )}

        {/* Employment Status */}
        {renderRadio(
          "employmentStatus",
          "What best describes your current employment status?",
          ["Self-employed", "Employed", "Unemployed"]
        )}

        {/* Move to Dubai */}
        {renderRadio("moveToDubai", "Do you have plans to move to Dubai in the future?", ["Yes", "No"])}

        {/* Remote Work Experience */}
        {renderRadio("remoteWorkExperience", "Have you previously worked remotely or are you currently working remotely?", ["Yes", "No"])}

        {/* Real Estate Career Interest */}
        {renderRadio("realEstateCareerInterest", "Are you interested in pursuing a career in real estate?", ["Yes", "No"])}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={onBack}
            className="py-3 px-6 bg-gray-200 text-[#12115e] rounded-xl hover:bg-gray-300 transition-colors"
          >
            Back
          </button>

          <button
            type="submit"
            className="py-3 px-6 bg-[#12115e] text-white rounded-xl hover:bg-[#302c8e] transition-colors"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepFiveForm;
