// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Eye, EyeOff } from "lucide-react";
// import Image from "next/image";
// import Login from "../../public/images/login.png";
// import Logo from "../../public/images/logo.png";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Simulate login - replace with actual authentication
//     setTimeout(() => {
//       setIsLoading(false);
//       router.push("/dashboard");
//     }, 1000);
//   };

//   return (
//     <div className="flex flex-col lg:flex-row h-screen w-full overflow-hidden bg-[#2A2A2A] p-3 sm:p-5 gap-3 sm:gap-5">
//       {/* Left Side - Login Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl relative overflow-hidden">
//         {/* Diagonal Blue Strokes Background
//         <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60 lg:opacity-100">
//           <div className="absolute top-0 left-[-10%] w-[2px] h-[150%] bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent transform -rotate-[25deg] opacity-40"></div>
//           <div className="absolute top-0 left-[5%] w-[2px] h-[150%] bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent transform -rotate-[25deg] opacity-30"></div>
//           <div className="absolute top-0 left-[20%] w-[1px] h-[150%] bg-gradient-to-b from-cyan-400 via-blue-400 to-transparent transform -rotate-[25deg] opacity-20"></div>
//           <div className="absolute top-0 left-[-20%] w-[1px] h-[150%] bg-gradient-to-b from-cyan-600 via-blue-600 to-transparent transform -rotate-[25deg] opacity-25"></div>
//           <div className="absolute top-0 left-[35%] w-[1px] h-[150%] bg-gradient-to-b from-blue-500 to-transparent transform -rotate-[25deg] opacity-15"></div>
//         </div> */}

//         <div className="w-full max-w-md space-y-6 sm:space-y-8 relative z-10">
//           {/* Logo */}
//           <div className="flex justify-center mb-6 sm:mb-8">
//             <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center bg-transparent hover:scale-105 transition-transform duration-300">
//               <Image
//                 src={Logo}
//                 alt="Logo"
//                 className="w-full h-full object-contain"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Login Header */}
//           <div className="text-center space-y-2">
//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
//               Login
//             </h1>
//             <p className="text-gray-400 text-xs sm:text-sm">
//               Please enter your account details
//             </p>
//           </div>

//           {/* Login Form */}
//           <form
//             onSubmit={handleLogin}
//             className="space-y-5 sm:space-y-6 mt-6 sm:mt-8"
//           >
//             {/* Email Field */}
//             <div className="space-y-2">
//               <label
//                 htmlFor="email"
//                 className="block text-xs sm:text-sm font-medium text-gray-300"
//               >
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="hellonexample@gmail.com"
//                 required
//                 className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#3A3A3A] border border-gray-600 rounded-lg text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFF312] focus:border-transparent transition-all"
//               />
//             </div>

//             {/* Password Field */}
//             <div className="space-y-2">
//               <label
//                 htmlFor="password"
//                 className="block text-xs sm:text-sm font-medium text-gray-300"
//               >
//                 Password <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••••••"
//                   required
//                   className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#3A3A3A] border border-gray-600 rounded-lg text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFF312] focus:border-transparent transition-all pr-10 sm:pr-12"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
//                 >
//                   {showPassword ? (
//                     <EyeOff size={18} className="sm:w-5 sm:h-5" />
//                   ) : (
//                     <Eye size={18} className="sm:w-5 sm:h-5" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Sign Up Button */}
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full py-3.5 bg-[#FFF312] cursor-pointer text-black font-bold rounded-lg transition-all duration-300 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
//             >
//               {isLoading ? (
//                 <span className="flex items-center justify-center gap-2">
//                   <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                       fill="none"
//                     />
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                     />
//                   </svg>
//                   Signing in...
//                 </span>
//               ) : (
//                 "Sign up"
//               )}
//             </button>

//             {/* Sign Up Link */}
//             <div className="text-center pt-3 sm:pt-4">
//               <p className="text-xs sm:text-sm text-gray-400">
//                 Dont have an account?{" "}
//                 <button
//                   type="button"
//                   onClick={() => router.push("/signup")}
//                   className="text-[#FFF312] hover:text-[#FFEE00] cursor-pointer font-semibold underline transition-colors"
//                 >
//                   Sign up
//                 </button>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Right Side - Product Image */}
//       <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden rounded-2xl">
//         <Image
//           src={Login}
//           alt="Login"
//           className="w-full h-full object-cover rounded-2xl"
//           priority
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Login from "../../public/images/login.png";
import Logo from "../../public/images/logo.png";
import BgImage from "../../public/images/bg.png"; // Add your background image

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login - replace with actual authentication
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="relative flex flex-col lg:flex-row h-screen w-full overflow-hidden p-3 sm:p-5 gap-3 sm:gap-5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BgImage}
          alt="Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        {/* Optional: Add overlay for better readability */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
      </div>

      {/* Left Side - Login Form */}
      <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl">
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

          {/* Login Header */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Login
            </h1>
            <p className="text-gray-200 text-xs sm:text-sm">
              Please enter your account details
            </p>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleLogin}
            className="space-y-5 sm:space-y-6 mt-6 sm:mt-8"
          >
            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-medium text-gray-200"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hellonexample@gmail.com"
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-sm sm:text-base text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFF312] focus:border-transparent transition-all"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-xs sm:text-sm font-medium text-gray-200"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-sm sm:text-base text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFF312] focus:border-transparent transition-all pr-10 sm:pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeOff size={18} className="sm:w-5 sm:h-5" />
                  ) : (
                    <Eye size={18} className="sm:w-5 sm:h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-[#FFF312] cursor-pointer text-black font-bold rounded-lg transition-all duration-300 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
                  Signing in...
                </span>
              ) : (
                "Sign in"
              )}
            </button>

            {/* Sign Up Link */}
            <div className="text-center pt-3 sm:pt-4">
              <p className="text-xs sm:text-sm text-gray-200">
                Dont have an account?{" "}
                <button
                  type="button"
                  onClick={() => router.push("/signup")}
                  className="text-[#FFF312] hover:text-[#FFEE00] cursor-pointer font-semibold underline transition-colors"
                >
                  Sign up
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Product Image */}
      <div className="relative z-10 hidden lg:flex lg:w-1/2 overflow-hidden rounded-2xl">
        <Image
          src={Login}
          alt="Login"
          className="w-full h-full object-cover rounded-2xl"
          priority
        />
      </div>
    </div>
  );
}
