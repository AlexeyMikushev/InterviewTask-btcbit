"use client";
import { FormEvent, useState } from "react";
import OTPForm from "./OTPForm";
import Loader from "@/components/Loader";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorPassword, setErrorPassword] = useState("");
  const [isFormVisible, setFormVisible] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setErrorEmail("");
    setErrorPassword("");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (email === "incorrect@email.com") {
        setErrorEmail("Incorrect email");
      } else if (password === "incorrect-password") {
        setErrorPassword("Incorrect password");
      } else {
        setFormVisible(true);
      }
    }, 1000);
  };

  return (
    <>
      <Loader isLoading={isLoading} />
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
          />
          {errorEmail && (
            <p className="text-red-600 text-sm mt-1">{errorEmail}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
          />
          {errorPassword && (
            <p className="text-red-600 text-sm mt-1">{errorPassword}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          login
        </button>
      </form>
      {isFormVisible ? <OTPForm setFormVisible={setFormVisible} /> : null}
    </>
  );
}
