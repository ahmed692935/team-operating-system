"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import SignupStep1 from "../../public/images/signup1.png"; // First image for step 1
import Signup from "../../public/images/signup.png"; // Second image for step 2
import Logo from "../../public/images/logo.png";

interface SignupData {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  designation: string;
  dateOfJoining: string;
  dateOfBirth: string;
}

export default function SignupPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form data state
  const [formData, setFormData] = useState<SignupData>({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    designation: "",
    dateOfJoining: "",
    dateOfBirth: "",
  });

  // Validation errors
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    designation: "",
    dateOfJoining: "",
    dateOfBirth: "",
  });

  // Handle input changes
  const handleChange = (field: keyof SignupData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  // Validate Step 1
  const validateStep1 = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Validate Step 2
  const validateStep2 = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    if (!formData.designation.trim()) {
      newErrors.designation = "Designation is required";
      isValid = false;
    }

    if (!formData.dateOfJoining) {
      newErrors.dateOfJoining = "Date of joining is required";
      isValid = false;
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle Next button
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  // Handle Back button
  const handleBack = () => {
    setCurrentStep(1);
  };

  // Handle Signup
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep2()) {
      return;
    }

    setIsLoading(true);

    // Prepare payload (excluding confirmPassword)
    const payload = {
      email: formData.email,
      password: formData.password,
      fullName: formData.fullName,
      designation: formData.designation,
      dateOfJoining: formData.dateOfJoining,
      dateOfBirth: formData.dateOfBirth,
    };

    // Simulate API call
    console.log("Signup Payload:", payload);

    setTimeout(() => {
      setIsLoading(false);
      // Redirect to login or dashboard
      router.push("/login");
    }, 1500);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full overflow-hidden bg-[#2A2A2A] p-3 sm:p-5 gap-3 sm:gap-5">
      {/* Left Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl relative overflow-hidden">
        <div className="w-full max-w-md space-y-6 sm:space-y-8 relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center bg-transparent hover:scale-105 transition-transform duration-300">
              <Image
                src={Logo}
                alt="Logo"
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Signup Header */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Sign Up
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm">
              {currentStep === 1
                ? "Create your account"
                : "Complete your profile"}
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2">
            <div
              className={`h-2 w-16 rounded-full transition-all duration-300 ${
                currentStep === 1 ? "bg-[#FFF312]" : "bg-gray-600"
              }`}
            ></div>
            <div
              className={`h-2 w-16 rounded-full transition-all duration-300 ${
                currentStep === 2 ? "bg-[#FFF312]" : "bg-gray-600"
              }`}
            ></div>
          </div>

          {/* Step 1: Email & Password */}
          {currentStep === 1 && (
            <form onSubmit={handleNext} className="space-y-5 sm:space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-gray-300"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="hellonexample@gmail.com"
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#3A3A3A] border ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  } rounded-lg text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFF312] focus:border-transparent transition-all`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-xs sm:text-sm font-medium text-gray-300"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    placeholder="••••••••••••"
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#3A3A3A] border ${
                      errors.password ? "border-red-500" : "border-gray-600"
                    } rounded-lg text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFF312] focus:border-transparent transition-all pr-10 sm:pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff size={18} className="sm:w-5 sm:h-5" />
                    ) : (
                      <Eye size={18} className="sm:w-5 sm:h-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs sm:text-sm font-medium text-gray-300"
                >
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleChange("confirmPassword", e.target.value)
                    }
                    placeholder="••••••••••••"
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#3A3A3A] border ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-600"
                    } rounded-lg text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFF312] focus:border-transparent transition-all pr-10 sm:pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} className="sm:w-5 sm:h-5" />
                    ) : (
                      <Eye size={18} className="sm:w-5 sm:h-5" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Next Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#FFF312] hover:bg-[#FFEE00] cursor-pointer text-black font-bold rounded-lg transition-all duration-300 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Next
                <ArrowRight size={20} />
              </button>

              {/* Sign In Link */}
              <div className="text-center pt-3 sm:pt-4">
                <p className="text-xs sm:text-sm text-gray-400">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => router.push("/login")}
                    className="text-[#FFF312] hover:text-[#FFEE00] cursor-pointer font-semibold underline transition-colors"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </form>
          )}

          {/* Step 2: Personal Details */}
          {currentStep === 2 && (
            <form onSubmit={handleSignup} className="space-y-5 sm:space-y-6">
              {/* Full Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-xs sm:text-sm font-medium text-gray-300"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="John Doe"
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#3A3A3A] border ${
                    errors.fullName ? "border-red-500" : "border-gray-600"
                  } rounded-lg text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFF312] focus:border-transparent transition-all`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Designation Field */}
              <div className="space-y-2">
                <label
                  htmlFor="designation"
                  className="block text-xs sm:text-sm font-medium text-gray-300"
                >
                  Designation <span className="text-red-500">*</span>
                </label>
                <input
                  id="designation"
                  type="text"
                  value={formData.designation}
                  onChange={(e) => handleChange("designation", e.target.value)}
                  placeholder="Software Engineer"
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#3A3A3A] border ${
                    errors.designation ? "border-red-500" : "border-gray-600"
                  } rounded-lg text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFF312] focus:border-transparent transition-all`}
                />
                {errors.designation && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.designation}
                  </p>
                )}
              </div>

              {/* Date of Joining Field */}
              <div className="space-y-2">
                <label
                  htmlFor="dateOfJoining"
                  className="block text-xs sm:text-sm font-medium text-gray-300"
                >
                  Date of Joining <span className="text-red-500">*</span>
                </label>
                <input
                  id="dateOfJoining"
                  type="date"
                  value={formData.dateOfJoining}
                  onChange={(e) =>
                    handleChange("dateOfJoining", e.target.value)
                  }
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#3A3A3A] border ${
                    errors.dateOfJoining ? "border-red-500" : "border-gray-600"
                  } rounded-lg text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFF312] focus:border-transparent transition-all`}
                />
                {errors.dateOfJoining && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.dateOfJoining}
                  </p>
                )}
              </div>

              {/* Date of Birth Field */}
              <div className="space-y-2">
                <label
                  htmlFor="dateOfBirth"
                  className="block text-xs sm:text-sm font-medium text-gray-300"
                >
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#3A3A3A] border ${
                    errors.dateOfBirth ? "border-red-500" : "border-gray-600"
                  } rounded-lg text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFF312] focus:border-transparent transition-all`}
                />
                {errors.dateOfBirth && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.dateOfBirth}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {/* Back Button */}
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-1/3 py-3.5 bg-gray-700 hover:bg-gray-600 cursor-pointer text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ArrowLeft size={20} />
                  Back
                </button>

                {/* Sign Up Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 py-3.5 bg-[#FFF312] hover:bg-[#FFEE00] cursor-pointer text-black font-bold rounded-lg transition-all duration-300 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Creating account...
                    </span>
                  ) : (
                    "Sign up"
                  )}
                </button>
              </div>

              {/* Sign In Link */}
              <div className="text-center pt-3 sm:pt-4 mb-3">
                <p className="text-xs sm:text-sm text-gray-400">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => router.push("/login")}
                    className="text-[#FFF312] hover:text-[#FFEE00] cursor-pointer font-semibold underline transition-colors"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Right Side - Product Image (Changes based on step) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden rounded-2xl">
        {/* Step 1 Image */}
        {currentStep === 1 && (
          <div className="w-full h-full relative animate-fadeIn">
            <Image
              src={SignupStep1}
              alt="Signup Step 1"
              className="w-full h-full object-cover rounded-2xl"
              priority
            />
          </div>
        )}

        {/* Step 2 Image */}
        {currentStep === 2 && (
          <div className="w-full h-full relative animate-fadeIn">
            <Image
              src={Signup}
              alt="Signup Step 2"
              className="w-full h-full object-cover rounded-2xl"
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
}
