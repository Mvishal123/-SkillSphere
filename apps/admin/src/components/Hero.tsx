"use client";
import { Button } from "ui";

const TeacherLandingPage = () => {
  return (
    <main className="py-12 bg-gradient-to-t from-fuchsia-100 white h-[88vh]">
      <h1 className="text-center font-bold text-3xl">
        Welcome <span className="text-[#7b2cbf]">Username!</span>
      </h1>
      <div className="flex flex-col items-center my-20">
        <div className="text-center">
          <h2 className="text-7xl font-ui font-extrabold tracking-tighter">
            Start teaching
          </h2>
          <span className="text-3xl font-ui text-slate-600 tracking-tight">
            over 100,000's of students online
          </span>
        </div>
        <Button className="bg-[#7b2cbf] mt-12" size="lg">
          get started
        </Button>
      </div>
    </main>
  );
};

export default TeacherLandingPage;
