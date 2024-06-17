import React from "react";
import RegistrationForm from "./LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-lg font-semibold">Login</h2>
      <div className="mt-8">
        <RegistrationForm />
      </div>
    </div>
  );
}
