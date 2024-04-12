import Header from "@/components/Header";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <main className="flex items-center px-10 h-[60vh]">
        <section>
          <h1 className="w-2/3 text-5xl font-bold">
            We basically made payments frictionless with paytm
          </h1>
        </section>
        <section>
          <div className="text-white size-32 bg-slate-900 rounded-3xl ">P</div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
