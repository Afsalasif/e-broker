"use client";

import React, { useState } from "react";

interface BankInformationFormProps {
  onNext: (data: any) => void;
  onBack: () => void;
  stepData: any; // Added prop to receive the stepData (existing data)
}

const BankInformationForm: React.FC<BankInformationFormProps> = ({ onNext, onBack, stepData }) => {
  // Initialize form data from the stepData or use defaults
  const [formData, setFormData] = useState({
    bankName: stepData?.bankName || "",
    accountHolderName: stepData?.accountHolderName || "",
    accountNumber: stepData?.accountNumber || "",
    iban: stepData?.iban || "",
    swiftCode: stepData?.swiftCode || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData); // Pass the updated form data to the next step
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl mt-10 text-[#12115e] font-[sans-serif]">
      <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#12115e] to-[#302c8e] bg-clip-text text-transparent">
        Bank Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Bank Name */}
        <div className="space-y-2">
          <label className="block text-lg font-medium">Bank Name</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
            required
          />
        </div>

        {/* Account Holder Name */}
        <div className="space-y-2">
          <label className="block text-lg font-medium">Account Holder Name</label>
          <input
            type="text"
            name="accountHolderName"
            value={formData.accountHolderName}
            onChange={handleChange}
            className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
            required
          />
        </div>

        {/* Account Number */}
        <div className="space-y-2">
          <label className="block text-lg font-medium">Account Number</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
            required
          />
        </div>

        {/* IBAN */}
        <div className="space-y-2">
          <label className="block text-lg font-medium">IBAN</label>
          <input
            type="text"
            name="iban"
            value={formData.iban}
            onChange={handleChange}
            className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
            required
          />
        </div>

        {/* SWIFT Code */}
        <div className="space-y-2">
          <label className="block text-lg font-medium">SWIFT Code</label>
          <input
            type="text"
            name="swiftCode"
            value={formData.swiftCode}
            onChange={handleChange}
            className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
            required
          />
        </div>

        {/* Navigation Button */}
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

export default BankInformationForm;
