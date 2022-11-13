import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitles from "../../hooks/useTitles";

const Login = () => {

  const {login, setUser} = useContext(AuthContext)


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    

    login(data.email, data.password)
    .then(result => {
      setUser(result.user);
      toast.success("User Login Success")
    })
    .catch(err => toast.error(err.message))




    reset();
  };

  // page title
  useTitles("Login");
  return (
    <section className="login w-96 h-full justify-center items-center py-20 mx-auto">
      <div className="bg-white rounded-lg shadow-2xl p-8">
        <h2 className="text-2xl text-center mb-4 font-bold">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: "Email Address is required" })}
            />
            {errors.email && (
              <p role="alert" className="text-red-500 mt-2">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: "Ki re vai, password den nah kno?",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character",
                }
              })}
            />
            {errors.password && (
              <p role="alert" className="text-red-500 mt-2">
                {errors.password?.message}
              </p>
            )}
          </div>
          <p className="underline text-base hover:no-underline cursor-pointer mt-3">
            Forgot Password?
          </p>
          <input
            type="submit"
            className="btn btn-primary w-full mt-6"
            value="Login"
          />
        </form>
        <div className="text-center my-6">
          <p className="text-sm">
            New to Doctors Portal?{" "}
            <Link to="/register" className="text-teal-400 underline">
              Create new account
            </Link>
          </p>
        </div>
        <div className="divider">OR</div>
        <div>
          <button className="btn btn-outline btn-info uppercase w-full">
            Continue with google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
