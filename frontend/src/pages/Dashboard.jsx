import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div>
      <header className="flex justify-between px-5 py-10">
        <div className="text-2xl font-semibold">Paytm</div>
        <nav className="flex items-center gap-2">
          <h3>Hello User</h3>
          <Avatar>
            <AvatarFallback>UR</AvatarFallback>
          </Avatar>
        </nav>
      </header>

      <main className="px-10">
        <div className="font-semibold text-md">Your balance $5000</div>
        <section>
          <Input placeholder="Search users ..." />
          <div className="flex flex-col gap-0 py-3">
            <SendMoneyDiv/>
            <SendMoneyDiv/>
            <SendMoneyDiv/>
          </div>
        </section>
      </main>
    </div>
  );
};

const SendMoneyDiv = () => {
  return (
    <div className="flex items-center justify-between px-2 py-1 rounded-md hover:bg-slate-100">
      <div className="flex items-center gap-1">
        <Avatar className="text-xs size-7">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h4>User 1</h4>
      </div>
      <div>
        <Button onClick={() => {}}>Send money</Button>
      </div>
    </div>
  );
};

export default Dashboard;
