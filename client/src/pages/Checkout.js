import React from "react";
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const Checkout = () => {
  const { title, description, price, _id } = useLoaderData();
  const { user } = useContext(AuthContext);

  const navigate = useNavigate()

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
      time: new Date().toLocaleString()
    };
    

    // if(phone.length > 10){
    //     alert('Phone number should be 10 characters or longer')
    // }
    // else{

    // }

    fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
    })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Order placed successfully')
                form.reset();
                navigate('/')
            }
        })
        .catch(er => {
            console.error(er)
            toast.error(er)
        });
  };

  return (
    <div>
      <h2 className="text-5xl underline font-semibold mt-6">Checkout</h2>
      <h2 className="text-3xl my-6 font-base">
        Your Chosen Service :{" "}
        <span className="text-green-500 font-bold">{title}</span>
      </h2>
      <h2 className="text-3xl my-6">
        Price : <span className="text-green-500 font-bold">${price}</span>
      </h2>
      <form className="w-3/4 mx-auto mb-6" onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-2 gap-4 my-6 ">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered input-info rounded-lg"
            defaultValue={user?.displayName}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered input-info   rounded-lg"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered input-info   rounded-lg"
          />
          <input
            type="email"
            defaultValue={user?.email}
            placeholder="your email here"
            className="input input-bordered input-info   rounded-lg"
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-info w-full rounded-lg"
          placeholder="Message"
          defaultValue={description}
        ></textarea>
        <button
          type="submit"
          className="w-1/5 py-3 bg-teal-500 rounded-lg mt-4 text-center"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
