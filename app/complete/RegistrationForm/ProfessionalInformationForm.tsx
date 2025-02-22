"use client";

import React, { useState, useEffect } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface ProfessionalInformationFormProps {
  onNext: (data: any) => void;
  onBack: () => void;
  stepData: any;
}

const ProfessionalInformationForm: React.FC<ProfessionalInformationFormProps> = ({
  onNext,
  onBack,
  stepData,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    businessPhoneNumber: "",
    employmentStatus: "",
  });
    const [phoneError, setPhoneError] = useState("");
   const handlePhoneChange = (value: any) => {
      setFormData((prev) => ({ ...prev, businessPhoneNumber: value || "" }));
      if (value && !isValidPhoneNumber(value)) {
        setPhoneError("Invalid phone number for the selected country.");
      } else {
        setPhoneError("");
      }
    };

  // Initialize state with data from parent when component mounts or stepData changes
  useEffect(() => {
    if (stepData) {
      setFormData({
        email: stepData.email || "",
        businessPhoneNumber: stepData.businessPhoneNumber || "",
        employmentStatus: stepData.employmentStatus || "",
      });
    }
  }, [stepData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData); // Send updated formData to parent
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl mt-10 text-[#12115e] font-[sans-serif]">
      <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#12115e] to-[#302c8e] bg-clip-text text-transparent">
        Professional Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Email */}
        <div className="space-y-2">
          <label className="block text-lg font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
            required
          />
        </div>

        {/* Business Phone Number */}
        <div className="md:col-span-2 space-y-2">
            <label className="block text-lg font-medium">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <PhoneInput
              international
              defaultCountry="AE" // Set default country to UAE
              value={formData.businessPhoneNumber}
              onChange={handlePhoneChange}
              className="phone-input-custom"
              required
            />
            {phoneError && (
              <p className="text-red-500 text-sm mt-1">{phoneError}</p>
            )}
          </div>

        {/* Employment Status */}
        <div className="space-y-2">
          <label className="block text-lg font-medium">Employment Status</label>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="employmentStatus"
                value="Employed"
                checked={formData.employmentStatus === "Employed"}
                onChange={handleChange}
                className="accent-[#12115e] focus:ring-[#12115e]"
                required
              />
              Employed
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="employmentStatus"
                value="Self-employed"
                checked={formData.employmentStatus === "Self-employed"}
                onChange={handleChange}
                className="accent-[#12115e] focus:ring-[#12115e]"
                required
              />
              Self-employed
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="employmentStatus"
                value="Self-employed"
                checked={formData.employmentStatus === "Unemployed"}
                onChange={handleChange}
                className="accent-[#12115e] focus:ring-[#12115e]"
                required
              />
              Unemployed
            </label>
          </div>
        </div>

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

export default ProfessionalInformationForm;
