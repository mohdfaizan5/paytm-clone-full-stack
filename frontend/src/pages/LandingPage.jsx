import Header from "@/components/Header";
import React from "react";
import paytmLogo from '../assets/paytm_icon-icons.com_62778.png'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <main className="flex items-center px-10 h-[60vh]">
        <section>
          <h1 className="w-2/3 text-6xl font-semibold">
            We basically made payments frictionless with paytm
          </h1>
        </section>
        <section>
          <img src={paytmLogo} className="w-8/12"/>
          {/* <div className="text-white size-32 bg-slate-900 rounded-3xl ">P</div> */}
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
