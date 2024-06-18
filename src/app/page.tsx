"use client";
import React, { useEffect } from "react";

import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const router = useRouter();
  const isAuthenticated = false;

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isAuthenticated, router]);

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-3xl font-bold mb-8">Home Page</h1>
        <div className="flex justify-center"></div>
      </main>
    </div>
  );
};

export default Home;
