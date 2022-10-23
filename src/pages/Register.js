import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import FacebookIcon from "../assets/images/icons/fb.png";
import GoogleIcon from "../assets/images/icons/google.png";
import { AuthContext } from "../contexts/UserContext";

const Register = () => {

  // Auth context
  const {createUser, setUser , signInWithGoogle} = useContext(AuthContext);

  // Navigate user 
  const navigate = useNavigate();

  // handleUser create
  const handleRegisterUser = (email, password) =>{
    createUser(email, password)
    .then( result => {
      const user = result.user;
      setUser(user)
      console.log(user);
    })
    .catch(err => console.log(err.message))
  }

  // Google Login
  const handleGoogleLogin = () => {
    signInWithGoogle()
    .then(result => {
      const user = result.user;
      setUser(user);
      navigate('/')
    })
    .catch(err => {
      console.error(err.message)
    })
  }


  // Form handler
  const handleSubmit = (e) => {
    // disable auto reload form
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    handleRegisterUser(password, email);
    
    form.email.value = '';
    form.password.value = '';
  };

  return (
    <div className="w-1/2 mx-auto border p-8 bg-white mt-12 rounded shadow">
      <h2 className="text-4xl font-semibold text-black text-center">
        Register
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control mb-4">
          <label htmlFor="name" className="block">
            Your Name :{" "}
          </label>
          <input
            type="name"
            name="name"
            id="name"
            required
            placeholder="full name"
            className="w-full border-[2px] rounded p-3 mt-2"
          />
        </div>
        <div className="form-control mb-4">
          <label htmlFor="email" className="block">
            User Email :{" "}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Your email"
            className="w-full border-[2px] rounded p-3 mt-2"
          />
        </div>
        <div className="form-control mb-4">
          <label htmlFor="photo" className="block">
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Your photo url"
            className="w-full border-[2px] rounded p-3 mt-2"
          />
        </div>
        <div className="form-control mb-4">
          <label htmlFor="password" className="block">
            Password :{" "}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="****"
            className="w-full border-[2px] rounded p-3 mt-2"
          />
        </div>
        <div className="form-control mb-4">
          <label htmlFor="confirm-password" className="block">
            Confirm Password :{" "}
          </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            required
            placeholder="****"
            className="w-full border-[2px] rounded p-3 mt-2"
          />
        </div>
        <div className="form-control mb-4 flex justify-between items-center">
          <div>
            <input type="checkbox" name="checkbox" id="" />
            <label htmlFor="checkbox">
              {" "}
              To Continue with{" "}
              <Link to="#" className="text-blue-600 underline">
                Terms & Condition
              </Link>
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Register"
          className="w-full bg-teal-600 p-3 rounded text-white font-semibold text-2xl cursor-pointer my-8"
        />
      </form>

      <div className="mb-8 text-center">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </div>

      <button className="w-full border-[2px] rounded flex justify-around items-center py-2 mb-2">
        <img src={FacebookIcon} alt="" className="w-[40px]" />
        <h3 className="text-2xl">Facebook login</h3>
      </button>
      <button className="w-full border-[2px] rounded flex justify-around items-center py-2 mb-2" onClick={handleGoogleLogin}>
        <img src={GoogleIcon} alt="" className="w-[40px]" />
        <h3 className="text-2xl">Google login</h3>
      </button>
    </div>
  );
};

export default Register;
