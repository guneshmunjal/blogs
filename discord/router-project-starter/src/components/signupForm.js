import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";

export const SignupForm = ({ setloggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [showPassword, setshowpassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevents the form from refreshing the page
    setloggedIn(true);
    console.log(formData); // Perform any further actions with the form data here
    toast.success("signed in");
    navigate("/dashboard");
  }

  return (
    <div>
      <div  className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button >student</button>
        <button>instructor</button>
      </div>

      <form onSubmit={handleSubmit}>
        <label className='w-full'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>firstName</p>
          <input
            required
            type="text"
            value={formData.firstName}
            placeholder="enter your first name"
            name="firstName"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            onChange={changeHandler}
          />
        </label>

        <label className='w-full'>
          <p>lastName</p>
          <input
            required
            type="text"
            value={formData.lastName}
            name="lastName"
            placeholder="enter your last name"
            onChange={changeHandler}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          />
        </label>

        <label className='w-full'>
          <p>email address</p>
          <input
            required
            type="text"
            value={formData.email}
            name="email"
            placeholder="enter your email"
            onChange={changeHandler}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          />
        </label>

        <label className='w-full'>
          <p>password</p>
          <input
            required
            type={setshowpassword ? "text" : "password"}
            value={formData.password}
            name="password"
            placeholder="enter your password"
            onChange={changeHandler}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          />
        </label>
        <span onClick={() => setshowpassword((prev) => !prev)}>
          {/* the above on click method is just changing the setshowpassword as - if the previous value is false just negate the value and make it true */}
          {showPassword ? <AiFillEye /> : <AiOutlineEyeInvisible />}
        </span>
    
     <div>

        <button>Signup</button>

      </div>
      </form>
    </div>
  );
};
