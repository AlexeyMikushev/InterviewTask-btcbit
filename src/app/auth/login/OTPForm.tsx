import { useRouter } from "next/navigation";
import { useState, FormEvent, SetStateAction } from "react";

type OTPFormProps = {
  setFormVisible: (otp: SetStateAction<boolean>) => void;
};

export default function OTPForm({ setFormVisible }: OTPFormProps) {
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      if (otp !== "incorrect") {
        router.push("/currencies");
      } else {
        alert("incorrent One-Time Password");
      }
    }, 1000);
  };

  const handleOutsideClick = (event: React.MouseEvent) => {
    if ((event.target as Element).id === "otp-modal") {
      setFormVisible(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="otp-modal"
      onClick={handleOutsideClick}
    >
      <div className="relative top-20 mx-auto p-8 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            One-Time Password
          </h3>
          <form onSubmit={handleSubmit} className="mt-2 px-4">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="mt-2 w-full py-2 border rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
            <div className="items-center py-3">
              <button
                id="submitBtn"
                type="submit"
                className="px-4 py-2 bg-teal-600 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
