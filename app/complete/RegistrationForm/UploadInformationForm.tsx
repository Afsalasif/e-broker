"use client";

import React, { useState, useEffect } from "react";

interface UploadInformationFormProps {
  onNext: (data: any) => void;
  onBack: () => void;
  stepData: any; // Receive the existing data for persistence across steps
}

const UploadInformationForm: React.FC<UploadInformationFormProps> = ({ onNext, onBack, stepData }) => {
  // Initialize form data from the stepData or use defaults
  const [formData, setFormData] = useState({
    picture: stepData?.picture || null,
    passport: stepData?.passport || null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.picture && formData.passport) {
      onNext(formData); // Pass the updated form data to the next step
    } else {
      alert("Please upload both a picture and a passport.");
    }
  };

  useEffect(() => {
    // Optionally, you could handle other side effects here when stepData changes
  }, [stepData]);

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl mt-10 text-[#12115e] font-[sans-serif]">
      <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#12115e] to-[#302c8e] bg-clip-text text-transparent">
        Upload Your Picture & Passport
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Picture Upload */}
        <div className="space-y-2">
          <label className="block text-lg font-medium">Upload Your Picture</label>
          <input
            type="file"
            name="picture"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
            required
          />
        </div>

        {/* Passport Upload */}
        <div className="space-y-2">
          <label className="block text-lg font-medium">Upload Your Passport</label>
          <input
            type="file"
            name="passport"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-4 border-2 rounded-xl border-[#12115e]/20 focus:border-[#12115e] focus:ring-2 focus:ring-[#12115e]/30 transition-all"
            required
          />
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

export default UploadInformationForm;
