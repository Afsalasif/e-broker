"use client";

import React, { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface StepOneFormProps {
  onNext: (data: any) => void;
}

const StepOneForm: React.FC<StepOneFormProps> = ({ onNext }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    homeAddress: "",
    maritalStatus: "",
    gender: "",
    dob: "",
    nationality: "",
    passportNumber: "",
    passportExpiry: "",
    picture: null,
    email: "",
    businessPhone: "",
    employmentStatus: "",
    bankName: "",
    iban: "",
    accountNumber: "",
    swiftCode: "",
  });

  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value: any) => {
    setFormData((prev) => ({ ...prev, phone: value || "" }));
    if (value && !isValidPhoneNumber(value)) {
      setPhoneError("Invalid phone number for the selected country.");
    } else {
      setPhoneError("");
    }
  };

  const handleFileChange = (e: any) => {
    setFormData({ ...formData, picture: e.target.files[0] });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  
    if (!formData.phone || phoneError) {
      alert("Please enter a valid phone number.");
      return;
    }
  
    onNext(formData);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl mt-10 text-[#12115e] font-[sans-serif]">
    <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#12115e] to-[#302c8e] bg-clip-text text-transparent">
      Personal Details
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
            defaultCountry="US"
            value={formData.phone}
            onChange={handlePhoneChange}
            className="phone-input-custom"
            required
          />
          {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
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
  
        {/* Passport Upload */}
        <div className="md:col-span-2 space-y-2">
          <label className="block text-lg font-medium">
            Passport Copy <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full border-2 border-dashed border-[#12115e]/30 hover:border-[#12115e]/50 rounded-xl cursor-pointer transition-colors">
              <div className="p-8 text-center">
                <span className="text-[#12115e]/70">Drag & drop or </span>
                <span className="text-[#12115e] font-semibold">browse files</span>
              </div>
              <input
                type="file"
                name="passportCopy"
                className="hidden"
                onChange={handleFileChange}
                required
              />
            </label>
          </div>
        </div>
      </div>
      <h3 className="text-3xl font-bold bg-gradient-to-r from-[#12115e] to-[#302c8e] bg-clip-text text-transparent">
      Professional Information
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-2">
        <label className="block text-lg font-medium">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-medium">
          Business Contact Number <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="businessPhone"
          className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-medium">
          Employment Status <span className="text-red-500">*</span>
        </label>
        <select
          name="employmentStatus"
          className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
          onChange={handleChange}
          required
        >
          <option value="">Select Employment Status</option>
          <option value="employed">Employed</option>
          <option value="self-employed">Self Employed</option>
          <option value="unemployed">Unemployed</option>
        </select>
      </div>
    </div>
  
      {/* Bank Details Section */}
      <div className="pt-8 border-t-2 border-[#12115e]/10">
        <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#12115e] to-[#302c8e] bg-clip-text text-transparent">
          Bank Account Details
        </h3>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <input
            type="text"
            name="bankName"
            placeholder="Bank Name"
            className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="accountNumber"
            placeholder="Account Number"
            className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="bankBranch"
            placeholder="Bank Branch"
            className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="bankCountry"
            placeholder="Bank Country"
            className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="iban"
            placeholder="IBAN"
            className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
            onChange={handleChange}
            required
          />
        </div>
      </div>
  
      <button
        type="submit"
        className="w-full py-4 px-6 bg-[#12115e] text-white text-lg font-semibold rounded-xl hover:bg-[#302c8e] transition-colors shadow-lg hover:shadow-xl"
      >
        Complete Registration
      </button>
    </form>
  </div>
  

  );
};

export default StepOneForm;
