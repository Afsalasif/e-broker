"use client";

import React, { useState } from "react";

interface StepTwoFormProps {
  onSubmit: (data: any) => void;
  onBack: () => void;
}

const StepTwoForm: React.FC<StepTwoFormProps> = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    educationLevel: "",
    employmentStatus: "",
    moveToDubai: "",
    remoteWorkExperience: "",
    realEstateCareerInterest: "",
    realEstateExperience: "",
    comfortableWithClients: "",
    dubaiMarketKnowledge: "",
    stableInternetAccess: "",
    buildClientBaseInterest: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderRadio = (name: string, question: string) => (
    <div className="space-y-2">
      <label className="block text-lg font-medium">{question}</label>
      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name={name}
            value="Yes"
            checked={formData[name as keyof typeof formData] === "Yes"}
            onChange={handleChange}
            required
            className="accent-[#12115e] focus:ring-[#12115e]"
          />
          Yes
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name={name}
            value="No"
            checked={formData[name as keyof typeof formData] === "No"}
            onChange={handleChange}
            required
            className="accent-[#12115e] focus:ring-[#12115e]"
          />
          No
        </label>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl mt-10 text-[#12115e] font-[sans-serif]">
      <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#12115e] to-[#302c8e] bg-clip-text text-transparent">
        Professional & Real Estate Interests
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Education Level */}
        <div className="space-y-2">
          <label className="block text-lg font-medium">
            What is your education level?
          </label>
          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
            required
          >
            <option value="">Select your education level</option>
            <option value="High School">High School</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree or Higher">Master's Degree or Higher</option>
          </select>
        </div>

        {/* Employment Status */}
        <div className="space-y-2">
          <label className="block text-lg font-medium">
            What best describes your current employment status?
          </label>
          <select
            name="employmentStatus"
            value={formData.employmentStatus}
            onChange={handleChange}
            className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
            required
          >
            <option value="">Select employment status</option>
            <option value="Self-employed">Self-employed</option>
            <option value="Employed">Employed</option>
            <option value="Unemployed">Unemployed</option>
          </select>
        </div>

        {/* Yes/No Questions */}
        {renderRadio("moveToDubai", "Do you have plans to move to Dubai in the future?")}
        {renderRadio("remoteWorkExperience", "Have you previously worked remotely or are you currently working remotely?")}
        {renderRadio("realEstateCareerInterest", "Are you interested in pursuing a career in real estate?")}
        {renderRadio("realEstateExperience", "Do you have experience in the real estate industry?")}
        {renderRadio("comfortableWithClients", "Are you comfortable working with clients from different countries?")}
        {renderRadio("dubaiMarketKnowledge", "Do you have any knowledge of Dubai's real estate market?")}
        {renderRadio("stableInternetAccess", "Do you have access to a stable internet connection and a laptop/PC for remote work?")}
        {renderRadio("buildClientBaseInterest", "Would you be interested in building your own real estate client base through the E BROKER network?")}

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
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepTwoForm;
