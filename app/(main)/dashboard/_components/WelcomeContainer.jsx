// app/(main)/dashboard/_components/WelcomeContainer.jsx
"use client";
import { useUser } from "@/context/UserDetailContext";
import Image from "next/image";
import React from "react";

function WelcomeContainer() {
  const { user, login, loading, logout } = useUser();

  if (loading) {
    return (
      <div className="w-full">
        <div className="bg-white p-4 sm:p-6 rounded-2xl max-w-full">
          <h2 className="text-lg sm:text-xl font-bold">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="bg-white p-4 sm:p-6 rounded-2xl max-w-full shadow-md ring-1 ring-green-200 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {user ? (
          <>
           <div className="flex-1 flex items-center space-x-4">
           {user.picture && (
            <Image 
               src = {user.picture}
               alt = {"${user.name}'s avatar"}
               width={48}
               height={48}
               className="rounded-full object-cover"
            />
           )}
           <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-bold text-green-600">
              Welcome Back, {user.name || "Guest"}
            </h2>
            <h2 className="text-cyan-700 text-sm sm:text-base">
              AI-Driven Interviews, Hassle-Free Hiring
            </h2>
            </div>
            </div>
            <button
              onClick={() => logout()}
              className="mt-3 sm:mt-0 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm sm:text-base"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
           <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-bold">Please Log In</h2>
           </div>
            <button
              onClick={() => login()}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm sm:text-base"
            >
              Log in with Google
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default WelcomeContainer;