import React from "react";

const Userpage = () => {
  const userName = "User"; // You can replace this with dynamic user data

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome, {userName}!
        </h1>
        <p className="text-gray-600">We're glad to have you back.</p>
      </div>
    </div>
  );
};

export default Userpage;
