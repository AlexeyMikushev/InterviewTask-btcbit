import RegistrationForm from "./RegistrationForm";

export default function Registration() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-lg font-semibold">Sign up</h2>
      <div className="mt-8">
        <RegistrationForm />
      </div>
    </div>
  );
}
