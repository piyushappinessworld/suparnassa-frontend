"use client";
import { MdLocationOn } from "react-icons/md";
import React, { useState } from "react";

export default function Contact({ subject }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    terms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      subject,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/send-inquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          location: "",
          message: "",
          terms: false,
        });
        setShowSuccessAlert(true);
        setTimeout(() => setShowSuccessAlert(false), 3000);
      } else {
        setShowErrorAlert(true);
        setTimeout(() => setShowErrorAlert(false), 3000);
      }
    } catch (error) {
      console.error("Error:", error);
      setShowErrorAlert(true);
      setTimeout(() => setShowErrorAlert(false), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-white">
      {/* Success Alert */}
      {showSuccessAlert && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          Message sent successfully!
        </div>
      )}

      {/* Error Alert */}
      {showErrorAlert && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-md">
          Failed to send message. Please try again.
        </div>
      )}

      <div className="w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] md:gap-[60px]">
          {/* Left side - Title and description */}
          <div className="lg:w-1/3">
            {/* Decorative elements */}
            <div className="mb-1 ml-[-8px]">
              <img src="/reviews/stars.svg" alt="stars" className="" />
            </div>

            <h2 className="text-[28px] md:text-[38px] font-semibold text-[#242424] mb-[8px] md:mb-[10px]">
              Inquire About {subject}
            </h2>

            {/* Description */}
            <p className="text-[14px] md:text-[16px] font-medium text-[#999999]">
              Interested in this property? Fill out the form below, and our real
              estate experts will get back to you with more details, including
              scheduling a viewing and answering any questions you may have.
            </p>
          </div>

          {/* Right side - Form */}
          <div className="w-full lg:w-2/3 mx-auto">
            <div className="">
              <div className="w-full mx-auto">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-lg border border-[#262626] p-[20px] md:p-[40px]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-[40px]">
                    <div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter First Name"
                        className="w-full px-[20px] py-[16px] rounded-[6px] border bg-[#EEEEEE] border-[#262626]"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter Last Name"
                        className="w-full px-[20px] py-[16px] rounded-[6px] border bg-[#EEEEEE] border-[#262626]"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-[40px]">
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your Email"
                        className="w-full px-[20px] py-[16px] rounded-[6px] border bg-[#EEEEEE] border-[#262626]"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter Phone Number"
                        className="w-full px-[20px] py-[16px] rounded-[6px] border bg-[#EEEEEE] border-[#262626]"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 mb-[40px]">
                    <div className="relative">
                      <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Enter Location"
                        className="w-full px-[20px] py-[16px] rounded-[6px] border bg-[#EEEEEE] border-[#262626] pr-10"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      />
                      <MdLocationOn className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[20px] h-[20px] text-[#666666]" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Enter your Message here.."
                      className="w-full px-[20px] py-[16px] rounded-[6px] border bg-[#EEEEEE] border-[#262626]"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        className="h-5 w-5 text-amber-500 rounded border-gray-300 focus:ring-amber-500"
                        checked={formData.terms}
                        onChange={handleChange}
                        required
                      />
                      <label
                        htmlFor="terms"
                        className="ml-2 text-[#999999] text-[14px] md:text-[16px]"
                      >
                        I agree with Terms of Use and Privacy Policy
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#CE8943] cursor-pointer text-white font-medium py-3 px-6 text-[14px] md:text-[16px] rounded-md transition-colors flex items-center justify-center"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <span className="mr-2">Sending...</span>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        </div>
                      ) : (
                        "Send Your Message"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
