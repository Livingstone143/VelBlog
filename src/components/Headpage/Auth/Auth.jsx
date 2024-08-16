import React, { useState } from "react";
import Model from "../../../utilites/Model";
import { LiaTimesSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function Auth() {
    const [createUser ,setUser]= useState(false);
  return (
    <div>
   
      <Model>
        <section className="bg-white  z-50 fixed top-0 bottom-0 left-0 md: left-[10rem] overflow-auto right-0 md: right-[10rem]  box-s">
          
          <button className="absolute top-8 right-8 text-3xl hover:opacity-50">
           
            <LiaTimesSolid />
          </button>
          <div className="flex flex-col justify-center items-center top-10 gap-5 transition-all duration-100 ">
            
              <h1 className="text-2xl pt-[5rem]  "> {createUser?"Get Started": "Welcome back!"}</h1>
           
            <div className="text-black">
              <Button icon={<FcGoogle className="text-2xl"/>} text={`${createUser?"Signup":"Signin"}  with Google`} />
            </div>
            <div className="text-black">
              <Button icon={<MdFacebook className="text-2xl"/>} text={`${createUser?"Signup":"Signin"}  with Facebook`} />
            </div>
            <div className="text-black">
              <Button icon={<MdEmail className="text-2xl "/>} text={`${createUser?"Signup":"Signin"}  with Email` } />
              
            </div>
            <p>
                {createUser?"No Account.":"Already have an account?"} &nbsp;
                <button className="text-green-700 font-semibold" onClick={()=>setUser(!createUser)}>
                    {createUser? "Create": "Signin"}
                </button>
              </p>
              <p className="font-light text-gray-600 pt-8">Click "{createUser?'Sign In':"Create"}" to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</p>
          </div>
 
        </section>
      </Model>
    </div>
  );
}

export default Auth;

const Button = ({ icon, text, click }) => {
  return (
    <button className="rounded-full flex item center gap-10 sm:px-3 py-2 w-[20rem] border border-black ">
      {icon }{text}
    </button>
  );
};
