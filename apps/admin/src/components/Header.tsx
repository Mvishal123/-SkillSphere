"use client";
import { Button } from "ui";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import Headersheet from "./Headersheet";
import { useRouter } from "next/navigation";

const Header = () => {
  const [mode, setMode] = useState("dark");
  const router = useRouter();
  return (
    <header className="px-4 md:px-6 lg:px-8 py-5  flex justify-between items-center bg-transparent">
      <Headersheet mode={mode} setMode={setMode} />
      <h1
        className="text-4xl font-extrabold text-slate-800 cursor-pointer"
        onClick={() => router.push("/admin")}
      >
        Skill<span className="text-[#7b2cbf]">Sphere</span>
      </h1>
      <div className="hidden lg:flex lg:gap-12 gap-1">
        <Button variant={"ghost"} className="">
          About
        </Button>
        <Button variant={"ghost"}>Add course</Button>
        <Button variant={"ghost"}>Courses</Button>
        <Button variant={"ghost"}>Dashboard</Button>
      </div>
      <div className="lg:flex gap-2 hidden">
        <div className="">
          <Button
            onClick={() => {
              mode === "dark" ? setMode("light") : setMode("dark");
            }}
            variant={"ghost"}
          >
            {mode === "dark" ? <Moon /> : <Sun />}
          </Button>
        </div>
        <div className="hidden lg:block space-x-2">
          <Button
            variant={"ghost"}
            className="bg-[#7b2cbf] text-white"
            size="lg"
            onClick={() => {
              router.push("/admin/signup");
            }}
          >
            Sign in
          </Button>
          <Button
            variant={"ghost"}
            size="lg"
            className="hover:bg-[#7b2cbf] text-black hover:text-white"
          >
            Student
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
