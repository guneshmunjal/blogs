import React from "react";
import students from"../assets/signup.png";
import frame from "../assets/frame.png";
import { SignupForm } from "./signupForm.js";
import { LoginForm } from "./loginForm.js";


export const Template = ({
  title,
  description,
  image,
  formType,
  desc1,
  desc2,
  setloggedIn,
}) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
      <div className='w-11/12 max-w-[450px]'>
        <h1     className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]' >{title}</h1>
        <h3>{description}</h3>

        <p className='text-[1.125rem] leading[1.625rem] mt-4' >
          <span className='text-richblack-100'>{desc1}</span>
          <span className='text-richblack-100'>{desc2}</span>
        </p>

        {formType === "signup" ? <SignupForm setloggedIn = {setloggedIn}/>:<LoginForm setloggedIn={setloggedIn}/>}
      </div>

      <div className='flex w-full items-center my-4 gap-x-2'>
        <p className='text-richblack-700 font-medium leading[1.375rem]'>OR</p>
        <div className='w-full h-[1px] bg-richblack-700'></div>
      </div>

      {/* <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>signup with google</button> */}



<div className='relative w-11/12 max-w-[450px] '>

    <img src={frame} alt="img" width={558} height={504}loading="lazy"/>


    <img src = {students} alt="img" width={558} height={490}  className='absolute -top-4 right-4'/>
</div>


    </div>
  );
};
