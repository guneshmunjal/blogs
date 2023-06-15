import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import {AiOutlineEyeInvisible ,AiFillEye} from"react-icons/ai"
import { useNavigate } from 'react-router-dom';


export const LoginForm = ({setloggedIn}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword,setshowpassword] = useState(false);


  const navigate = useNavigate();// is used to navigate to another page when clicked on button. basically allows you to 
  // send the user to another page when user clicks on the button .



  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevents the form from refreshing the page
    setloggedIn(true);
    console.log(formData); // Perform any further actions with the form data here
    toast.success('logged in');
    navigate("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit}className="flex flex-col w-full gap-y-4 mt-6">
      <label className='w-full'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
          <input
            type='text'
            value={formData.email}
            name='email'
            placeholder='Enter your email address here'
            onChange={changeHandler}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          />
        </p>
      </label>
      <label>
        <p>
          <input
            type= {showPassword ? ("text") :("password")}
            // the above type is using a ternary operator and says that if showpassword is true then show the text value and if it 
            // is false then kindly use the value of password which means that you cannot see the value but just the dots 
            
            value={formData.password}
            name='password'
            placeholder='Enter your password here'
            onChange={changeHandler}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          />
        </p>
      </label>
      <span onClick={()=> setshowpassword((prev)=>!prev)} 
            className='absolute right-3 top-[38px] cursor-pointer'> 

{/* the above on click method is just changing the setshowpassword as - if the previous value is false just negate the value and make it true */}
          {showPassword ?(<AiFillEye/>):(<AiOutlineEyeInvisible/>)}

      </span>
      <div>
        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>login</button>
      </div>
    </form>
  );
};
