import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const AddADoctor = () => {
  const { loading } = useContext(AuthContext);

  const {register,handleSubmit,reset,formState: { errors }} = useForm();

  const { data: specilaties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  const navigate = useNavigate()

  const imageKey = process.env.REACT_APP_IMAGEBB_API_KEY;

  const handleAddADoctor = (data) => {
    const formData = new FormData();
    const image = data.image[0];
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;

    fetch(url, {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(imageData => {
        if(imageData.success){
            const doctor = {
                name: data.fullName, 
                email: data.email,
                specialty: data.specialty,
                image: imageData.data.url
            }
            fetch('http://localhost:5000/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.fullName} is added successfully`);
                    navigate('/dashboard/managedoctors')
                })
        }
    })

    reset();
  };

  if (isLoading) {
    return <h1 className="text-2xl font-bold">Loading....</h1>;
  }

  return (
    <section className="login w-96 h-full justify-center items-center py-20 mx-auto">
      <div className="bg-white rounded-lg shadow-2xl p-8">
        <h2 className="text-2xl text-center mb-4 font-bold">Add a Doctor</h2>
        <form onSubmit={handleSubmit(handleAddADoctor)}>
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
              <span className="label-text">Specialty</span>
            </label>
            <select
              {...register("specialty")}
              className="select select-bordered w-full max-w-xs"
            >
              {specilaties.map((specialty) => (
                <option key={specialty._id} value={specialty.name}>
                  {specialty.name}
                </option>
              ))}

              <option>Greedo</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Photo is Required",
              })}
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>
          <input
            type="submit"
            className="btn btn-primary w-full mt-6"
            value={loading ? "Loading..." : "Add A Doctor"}
          />
        </form>
      </div>
    </section>
  );
};

export default AddADoctor;
