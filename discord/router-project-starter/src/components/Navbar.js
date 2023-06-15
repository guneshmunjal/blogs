import React from "react";
import { Link } from "react-router-dom";
//import logo from "../assets/frame.png";
import logoo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";

export const Navbar = (props) => {

  let isloggedIn = props.isloggedIn;
  let setloggedIn = props.setloggedIn;
  
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <Link to="/">
        <img src={logoo} alt="img" width={160} height={32} loading="lazy" />
      </Link>

      <nav className="flex gap-3">
        <ul className='text-richblack-100 flex gap-x-6'>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">ABOUT</Link>
          </li>
          <li>
            <Link to="/">CONTACT</Link>
          </li>
        </ul>
      </nav>

      {/* now we need to create buttons for the signup login logout */}

      <div className="flex ml-4 gap-4">
        {!isloggedIn &&
          <button className='bg-richblack-800 text-richblack-100 py-[8px] 
          px-[12px] rounded-[8px] border border-richblack-700'>
            <Link to="/login">Login</Link>
          </button>
        }
        {!isloggedIn &&
          <button className='bg-richblack-800 text-richblack-100 py-[8px] 
          px-[12px] rounded-[8px] border border-richblack-700'>
          <Link to="/signup"onClick={()=>{
              setloggedIn(false);
         
            }}>signup</Link>
          </button>
        }

        { isloggedIn &&
          <button className='bg-richblack-800 text-richblack-100 py-[8px] 
          px-[12px] rounded-[8px] border border-richblack-700'>
            <Link to="/"onClick={()=>{
              setloggedIn(false);
          toast.success("logged out");
            }}>logout</Link>
          </button>
        }

        {  isloggedIn &&
          <button className='bg-richblack-800 text-richblack-100 py-[8px] 
          px-[12px] rounded-[8px] border border-richblack-700'>
            <Link to="/dashboard">dashboard</Link>
          </button>
        }
      </div>
    </div>
  );
};
