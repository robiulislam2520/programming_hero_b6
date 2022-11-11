import React from "react";
import PrimaryButton from "../../components/PrimaryButton";

const Contact = () => {
  return (
    <section className="contact_bg py-20 my-20 rounded-lg">
      <h3 className="text-2xl font-bold text-center text-[#19D3AE]">
        Contact Us
      </h3>
      <h2 className="text-4xl font-semibold text-center text-white">
        Stay connected with us
      </h2>
      <div className="card w-full lg:w-1/2 mx-auto">
        <form className="card-body">
          <div className="form-control">
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered"
              rows="4"
            />
          </div>
          <div className="form-control mt-8 w-1/3 mx-auto">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
