import Image from "next/image";
import logo from "../../../public/images/logo.png";

const ForgotPassword = () => {
  return (
    <div>
      <div className=" lg:px-[20rem]">
        {" "}
        <div className=" p-6">
          <Image src={logo} alt="biznez.lk" className=" w-auto h-8" />
        </div>
      </div>
      <div className=" lg:px-[20rem] lg:py-[10rem]">
        <div className=" lg:px-[10rem] py-6">
          <h1 className=" text-4xl">Reset Your Password</h1>
          <p className=" py-3">
            Type in your email and we will send you a link to reset your
            password
          </p>
        </div>
        <div className=" lg:px-[10rem] ">
          <form action="">
            <div>
              <h3 className=" py-2 text-black/60">Email</h3>
              <div className=" pb-8">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className=" py-4 px-4 rounded-md w-full border border-slate-200"
                />
              </div>

              <div className=" py-4 w-full justify-center items-center flex bg-blue-600 rounded-md border border-blue-700 ">
                <button className=" text-white">Send Reset Email</button>
              </div>
              <div className=" text-center items-center justify-center py-6">
                <h6>
                  Already have an account?{" "}
                  <span className=" hover:text-blue-600 cursor-pointer underline hover:underline">
                    Sign In
                  </span>{" "}
                </h6>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
