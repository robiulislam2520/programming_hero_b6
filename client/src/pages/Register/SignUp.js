import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useTitles from "../../hooks/useTitles";

const SignUp = () => {
  const [passwordType, setPasswordType] = useState(true);
  const { registerUser, setUser, updateUser, signInGoogle } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // handle google login
  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Google Login Success");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);

    registerUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("User Create Success");

        // update user
        updateUser(data.fullName)
          .then(() => {
            toast.success("User name Update");
            navigate(from, { replace: true });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => toast.error(err.message));

    reset();
  };

  // page title
  useTitles("Register");
  return (
    <section className="login w-96 h-full justify-center items-center py-20 mx-auto">
      <div className="bg-white rounded-lg shadow-2xl p-8">
        <h2 className="text-2xl text-center mb-4 font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("fullName", { required: "Please provided a name" })}
            />
            {errors.fullName && (
              <p role="alert" className="text-red-500 mt-2">
                {errors.fullName?.message}
              </p>
            )}
          </div>
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
              <span
                className="label-text cursor-pointer font-bold"
                onClick={() => setPasswordType(!passwordType)}
              >
                {passwordType ? "Show" : "Hide"}
              </span>
            </label>
            <input
              type={passwordType ? "password" : "text"}
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: "Ki re vai, password den nah kno?",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6})/,
                  message: "Password must be strong",
                },
              })}
            />
          </div>
          {errors.password && (
            <p role="alert" className="text-red-500 mt-2">
              {errors.password?.message}
            </p>
          )}
          <input
            type="submit"
            className="btn btn-primary w-full mt-6"
            value="Sign Up"
          />
        </form>
        <div className="text-center my-6">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-400 underline">
              Login
            </Link>
          </p>
        </div>
        <div className="divider">OR</div>

        <div>
          <button
            className="btn btn-outline btn-info uppercase w-full"
            onClick={handleGoogleLogin}
          >
            Continue with google
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
