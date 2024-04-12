import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="">
      <Header />
      <h1 className="text-3xl font-bold text-center">SignUp</h1>
      <div className="flex flex-col items-center mt-5">
        <form className="flex flex-col items-center gap-1 px-5 py-10 border max-w-96">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="password" type="password" />
          <Button>Signup</Button>
          <h5 className="text-xs">Already have and account <Link className="underline " to={"/signin"}>SignIn</Link></h5>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
