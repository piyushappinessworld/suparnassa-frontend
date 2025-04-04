"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    source: "",
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
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Clear the form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          inquiryType: "",
          source: "",
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
    <div
      id="form"
      className="w-full mx-auto px-[16px] md:px-[80px] py-[40px] md:py-[70px]"
    >
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

      <div className="">
        <div className="w-full">
          {/* Decorative elements */}
          <div className="mb-1 ml-[-8px]">
            <img src="/reviews/stars.svg" alt="stars" className="" />
          </div>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[38px] font-semibold text-[#242424] mb-[8px] md:mb-[10px]">
            Let's Connect
          </h2>

          {/* Description */}
          <p className="w-full md:w-2/3 text-[14px] md:text-[16px] font-medium text-[#999999] mb-[30px] md:mb-[50px]">
            We're excited to connect with you and learn more about your real
            estate goals. Use the form below to get in touch.
          </p>

          <div className="">
            <div className="w-full mx-auto">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg border border-[#262626] py-[54px] px-[20px] md:p-[80px]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[30px]">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-[#242424] font-semibold mb-[14px]"
                    >
                      First Name
                    </label>
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
                    <label
                      htmlFor="lastName"
                      className="block text-[#242424] font-semibold mb-[14px]"
                    >
                      Last Name
                    </label>
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
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#242424] font-semibold mb-[14px]"
                    >
                      Email
                    </label>
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[30px]">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[#242424] font-semibold mb-[14px]"
                    >
                      Phone
                    </label>
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
                  <div>
                    <label
                      htmlFor="inquiryType"
                      className="block text-[#242424] font-semibold mb-[14px]"
                    >
                      Inquiry Type
                    </label>
                    <div className="relative">
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        className="appearance-none w-full px-[20px] py-[16px] rounded-[6px] border bg-[#EEEEEE] border-[#262626] pr-10"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select Inquiry Type
                        </option>
                        <option value="consultation">Consultation</option>
                        <option value="interior-design">
                          Interior Design Services
                        </option>
                        <option value="renovation">
                          Renovation & Remodeling
                        </option>
                        <option value="furniture-decor">
                          Furniture & Decor Selection
                        </option>
                        <option value="space-planning">
                          Space Planning & Layout
                        </option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="source"
                      className="block text-[#242424] font-semibold mb-[14px]"
                    >
                      How Did You Hear About Us?
                    </label>
                    <div className="relative">
                      <select
                        id="source"
                        name="source"
                        className="appearance-none w-full px-[20px] py-[16px] rounded-[6px] border bg-[#EEEEEE] border-[#262626] pr-10"
                        value={formData.source}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="search">Search Engine</option>
                        <option value="social">Social Media</option>
                        <option value="referral">Referral</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-800 font-medium mb-[14px]"
                  >
                    Message
                  </label>
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
                    disabled={isLoading} // Disable button when loading
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
  );
};

export default Form;
