import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-teal-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link className="text-white" href="/currencies">
                Currencies
              </Link>
            </li>
            <li>
              <Link className="text-white" href="/auth/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="text-white" href="/auth/registration">
                Registration
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
