import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FacebookIcon from "../assets/images/icons/fb.png";
import GoogleIcon from "../assets/images/icons/google.png";
import { AuthContext } from "../contexts/UserContext";


const Login = () => {

  // Auth Context use
  const {signInWithGoogle, setUser, login} = useContext(AuthContext)

  // Navigate route or Redirect
  const navigate = useNavigate();
  const location = useLocation();

  // Google login
  const handleGoogleLogin = () => {
    signInWithGoogle()
    .then(result => {
      
      const user = result.user;
      setUser(user);
      navigate(location.state?.from?.pathname)
    })
    .catch(err => {
      console.error(err.message)
    })
  }

  // Form handler
  const handleSubmit = e =>{
    // disable auto reload form
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // login user by email and password
    login(email, password)
    
    // navigate user
    navigate('/')

    form.reset()

  }

  
  return (
    <div className="w-1/2 mx-auto border p-8 bg-white mt-12 rounded shadow">
      <h2 className="text-4xl font-semibold text-black text-center">Login</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="password" className="block">
            User password :{" "}
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
          <Link to="#" className="underline">
            <p>Forgot Password?</p>
          </Link>
        </div>
        <input
          type="submit"
          value="Login"
          className="w-full bg-red-600 p-3 rounded text-white font-semibold text-2xl cursor-pointer my-8"
        />
      </form>

      <div className="mb-8 text-center">
        <p>
        Don't Have any Account? <Link to='/register' className="text-blue-600 underline">Create New Account</Link>
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

export default Login;
