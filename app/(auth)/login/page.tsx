"use client";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const LogInPage = () => {
  const [breakdown, setBreakdown] = useState([
    {
      title: "📌 Learn what makes a successful profile",
      description:
        "The visitor who receives the service from you will identify you through your profile. That is, your profile defines you. So enter your details clearly.",
      id: 1,
    },
    {
      title: "📌 Create your seller Profile",
      description:
        "After you learn how to create a successful profile, create a beautiful, neat and accurate profile.",
      id: 1,
    },
    {
      title: "📌 Publish your Service Area",
      description:
        "After you successfully create a profile, select the appropriate package and confirm your digital workplace.",
      id: 1,
    },
  ]);
  return (
    <div className=" flex h-[100%] ">
      <div className=" items-center justify-center lg:w-1/3 bg-slate-50 shadow-sm min-h-screen px-7">
        <div className=" p-6">
          <Image src={logo} alt="biznez.lk" className=" w-auto h-8" />
        </div>

        <div className=" p-10">
          <h1 className=" text-3xl pb-2">Welcome Back !</h1>
          <h6 className=" text-md pb-5">Sign in to your account</h6>

          {/* Facebook Login */}
          <div className=" py-3">
            <div className=" border rounded-md py-3 items-center justify-center flex border-black hover:bg-slate-200">
              <Link href="github.com" className=" flex gap-3 items-center">
                <span className=" text-blue-600 text-xl">
                  <FaFacebook />
                </span>
                Continue with Facebook
              </Link>
            </div>
          </div>

          {/* Google Login */}
          <div className=" py-3">
            <div className=" border rounded-md py-3 items-center justify-center flex border-black hover:bg-slate-200">
              <Link href="github.com" className=" flex gap-3 items-center">
                <span className="  text-xl">
                  <FcGoogle />
                </span>
                Continue with Google
              </Link>
            </div>
          </div>

          {/* Email Login */}
          <div className=" py-3 ">
            <div className=" flex gap-2 items-center justify-center opacity-50">
              <span className="">-----------------</span>
              <div>or</div>
              <span className="">-----------------</span>
            </div>

            <div>
              <form action="">
                <div>
                  <h3 className=" py-2 text-black/60">Email</h3>
                  <div className=" pb-4">
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className=" py-4 px-4 rounded-md w-full border border-slate-200"
                    />
                  </div>
                </div>
                <div>
                  <div className=" flex justify-between">
                    <h3 className=" py-2 text-black/60">Password</h3>
                    <h3 className=" py-2 text-black/60">
                      <Link
                        href="/forgot-password"
                        className=" hover:underline">
                        Forgot Password
                      </Link>
                    </h3>
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="********"
                      className=" py-4 px-4 rounded-md w-full border border-slate-200"
                    />
                  </div>
                  <div className=" py-6">
                    <div className=" py-4 w-full justify-center items-center flex bg-blue-600 rounded-md border border-blue-700 ">
                      <button className=" text-white">Log In</button>
                    </div>
                    <div className="  ">
                      <h6 className=" w-full py-8 justify-center items-center flex">
                        Dont have an account.?
                        <span className=" underline hover:text-blue-600 cursor-pointer">
                          Sign Up Now
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <p className=" text-sm text-center">
            By continuing, you agree to Biznez.lk{" "}
            <span className=" underline opacity-60">Terms of Service</span> and
            ,<span className=" underline opacity-60">Privacy Policy</span> , and
            to receive periodic emails with updates.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className=" hidden lg:block lg:w-2/3 p-[10rem] min-h-screen">
        <div className=" ">
          <h1 className=" text-4xl font-bold">
            Ready to start selling on Biznez.lk ? Here’s the Breakdown :
          </h1>
        </div>
        <div>
          <div className=" py-10 ">
            <div className=" py-2 ">
              {breakdown.map((items) => (
                <div key={items.id} className="   ">
                  <h2 className=" py-2 text-lg font-semibold">{items.title}</h2>
                  <p className=" text-sm pb-6">{items.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
