"use client"
import React from "react";
import { Button, Checkbox, Input } from "@nextui-org/react";
import Image from "next/image";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const Page = () => {
  const [isVisible, setIsVisible] = React.useState(false);
   
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col justify-center items-center py-10 bg-gray-50  h-screen">
      <div className="rounded-xl px-10 py-10 bg-white w-[500px]  shadow-2xl">
        <div className="flex justify-center">
          <Image
            src="https://gymove.dexignzone.com/xhtml/images/logo-full.png"
            height={200}
            width={200}
          />
        </div>
        <div className="flex justify-center">
          {" "}
          <p className="mt-5 text-lg font-semibold">Sign in your account</p>
        </div>
        <div>
          <p className="text-lg mt-7 text-gray-500">Email</p>
          <Input
            type="email"
            placeholder="hello@example.com"
            className=" "
          />
        </div>
        <div>
          <p className="text-lg mt-3 text-gray-500">Password</p>
          <div className="relative flex items-center justify-end">
            <Input
              placeholder="Enter your password"
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <FaEye className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
          </div>
        </div>

        <div className="flex mt-7 gap-8 ">
        <Checkbox radius="sm"><span className="text-slate-400">Remember my preference</span></Checkbox>
          <p className="text-gray-500  hover:text-blue-500  ">Forgot Password?</p>
        </div>
        <div className="">
          <Button className="w-full mt-7 hover:bg-blue-700 hover:text-white " >
            <p className=" text-base text-blue-800  ">Sign in me</p>
          </Button>
        </div>
        <div>
          <p className="text-gray-500 mt-5">
            Don't have an account?
            <span className="text-blue-700"> Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
