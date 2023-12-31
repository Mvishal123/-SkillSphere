"use client"

import { useState } from "react";
import Link from "next/link";
import { Button } from "ui";
import TypeAnimation from "@/components/TypeAnimation";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-0 bg-gradient-to-t from-fuchsia-100 white h-[88vh]">
      <section className="flex items-start justify-center md:items-center col-span-1">
        <div className="w-full h-[80vh] flex justify-center items-center">
          <div className="w-[20rem]">
            <h1 className="text-center pt-0 md:pt-4 font-sans text-2xl md:text-3xl md:font-semi-bold">
              Welcome back
            </h1>
            <div className="flex flex-col px-4 pt-6">
              <label htmlFor="username">username</label>
              <input
                className=" bg-transparent w-72 rounded-md h-8 p-2 border border-[#7b2cbf]  focus:outline-[#7b2cbf]"
                type="text"
                id="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col px-4 pt-2">
              <div className="flex justify-between mt-5">
                <label htmlFor="password">password</label>
                <a className="text-blue-950" href="#">
                  forgot password?
                </a>
              </div>
              <input
                className=" bg-transparent w-72 rounded-md h-8 p-2 border border-[#7b2cbf]  focus:outline-[#7b2cbf]"
                type="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center">
              <div className="mt-10 text-center text-purple-950">
                <Link className="text-sm" href="/signup">
                  Don't have an account?
                </Link>
                <Button className="w-72 bg-[#7b2cbf] rounded-md text-white px-3 py-1">
                  Sign in
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex justify-start items-center order-first md:order-last h-20 md:h-full pt-6 md:p-0">
        <TypeAnimation />
      </section>
    </main>
  );
};

export default SignIn;
