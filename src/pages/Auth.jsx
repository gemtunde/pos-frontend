import React, { useState } from "react";
import restaurant from "../assets/images/restaurant-img.jpg";
import logo from "../assets/logo.png";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* left section */}
      <div className="w-1/2 relative flex items-center justify-center bg-cover">
        {/* BG Image */}
        <img
          className="absolute z-0 inset-0 w-full h-full object-cover"
          src={restaurant}
          alt="restaurant image"
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        {/* quote at bottom */}
        <blockquote className="absolute z-20 bottom-10 px-8 mb-10 text-2xl italic text-white">
          " Serve customers the best food with prompt and friendly service in a
          welcoming atmosphere, and they will keep coming back "
          <br />
          <span className="block mt-4 text-yellow-400">gemtunde stars</span>
        </blockquote>
      </div>
      {/* Right section */}
      <div className="w-1/2 min-h-screen bg-[#1a1a1a] p-10">
        <div className="flex flex-col items-center gap-2">
          <img
            src={logo}
            alt="gem logo"
            className="h-14 w-14 border-2 rounded-full p-1"
          />
          <h1 className="text-lg text-[#f5f5f5] font-semibold tracking-wide">
            Gemtunde
          </h1>
        </div>
        <h2 className="text-4xl text-center mt-10 font-semibold text-yellow-400 mb-10">
          {isRegister ? " Employee Registration" : " Employee Log in"}
        </h2>
        {/* Component */}
        {isRegister ? <Register /> : <Login />}
        <div className="flex justify-center mt-6">
          <p className="text-sm text-[#ababab]">
            {isRegister ? " Already have an account" : "Don't have an account?"}
            <a
              onClick={() => setIsRegister(!isRegister)}
              href="#"
              className="mx-2 text-yellow-400 font-semibold hover:underline"
            >
              {isRegister ? " Sign in" : "Sign up"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
