import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useTitles from "../../hooks/useTitles";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  // page title
  useTitles("Register");
  return (
    <section className="login w-96 h-full justify-center items-center py-20 mx-auto">
      <div className="bg-white rounded-lg shadow-2xl p-8">
        <h2 className="text-2xl text-center mb-4 font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("fullName")}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              {...register("email")}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password")}
            />
          </div>
          <p>{data}</p>
          <input type="submit" className="btn btn-primary w-full mt-6" value="Sign Up"/>
        </form>
        <div className="text-center my-6">
          <p className="text-sm">Already have an account?{" "}
          <Link to='/login' className="text-teal-400 underline">
            Login
          </Link>
          </p>
        </div>
        <div className="divider">OR</div>

        <div>
        <button className="btn btn-outline btn-info uppercase w-full">Continue with google</button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
