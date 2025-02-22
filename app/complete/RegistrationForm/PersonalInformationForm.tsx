"use client";

import React, { useState, useEffect } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface PersonalInformationFormProps {
  onNext: (data: any) => void;
  stepData: any;
}

const PersonalInformationForm: React.FC<PersonalInformationFormProps> = ({
  stepData,
  onNext,
}) => {
  const [phoneError, setPhoneError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
  });
  const handlePhoneChange = (value: any) => {
    setFormData((prev) => ({ ...prev, phone: value || "" }));
    if (value && !isValidPhoneNumber(value)) {
      setPhoneError("Invalid phone number for the selected country.");
    } else {
      setPhoneError("");
    }
  };

  // Initialize state with data from parent when component mounts or stepData changes
  useEffect(() => {
    if (stepData) {
      setFormData(stepData);
    }
  }, [stepData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData); // Send the updated formData to parent
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl mt-10 text-[#12115e] font-[sans-serif]">
      <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#12115e] to-[#302c8e] bg-clip-text text-transparent">
        Personal Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Name */}
          <div className="space-y-2">
            <label className="block text-lg font-medium">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
              onChange={handleChange}
              required
            />
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <label className="block text-lg font-medium">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
              onChange={handleChange}
              required
            />
          </div>

          {/* Contact Number */}
          <div className="md:col-span-2 space-y-2">
            <label className="block text-lg font-medium">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <PhoneInput
              international
              defaultCountry="AE" // Set default country to UAE
              value={formData.phone}
              onChange={handlePhoneChange}
              className="phone-input-custom"
              required
            />
            {phoneError && (
              <p className="text-red-500 text-sm mt-1">{phoneError}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-lg font-medium">
              email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="email"
              className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
              onChange={handleChange}
              required
            />
          </div>

          {/* Home Address */}
          <div className="space-y-2">
            <label className="block text-lg font-medium">
              Home Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="homeAddress"
              className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
              onChange={handleChange}
              required
            />
          </div>

          {/* Country Address */}
          <div className="space-y-2">
            <label className="block text-lg font-medium">
              Naionality <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="countryAddress"
              className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-lg font-medium">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-medium">
              Marital Status <span className="text-red-500">*</span>
            </label>
            <select
              name="maritalStatus"
              className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
              onChange={handleChange}
              required
            >
              <option value="">Select Marital Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
          </div>

          {/* Passport Number */}
          <div className="space-y-2">
            <label className="block text-lg font-medium">
              Passport Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="passportNumber"
              className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
              onChange={handleChange}
              required
            />
          </div>

          {/* Passport Expiry Date */}
          <div className="space-y-2">
            <label className="block text-lg font-medium">
              Passport Expiry <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="passportExpiry"
              className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
              onChange={handleChange}
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="space-y-2">
            <label className="block text-lg font-medium">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="dob"
              className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex justify-between mt-8">
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

export default PersonalInformationForm;
