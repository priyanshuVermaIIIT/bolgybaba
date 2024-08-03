import { Alert, Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [fromData , setFromData] = useState({});
  const [errorMessage , setErrorMessage] = useState(null);
  const [loading , setLoading] = useState(false);
  const handleChange=(e)=>{
    setFromData({...fromData , [e.target.id] : e.target.value.trim()})
};
const handleSubmit = async (e)=>{
  e.preventDefault();
  if(!fromData.usename || !fromData.email || !fromData.password){
    setErrorMessage('please fill out all fields ');
    return;
  }
  try {
    const res = await fetch('api/auth/signup', {
      method : 'POST' , 
      headers: {'Content-Type' : 'application/json'},
      body : JSON.stringify(fromData) 
    });
    const data = await res.json();
    
  } catch (error) {
    
  }
}

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className=" flex-1">
          <Link to="/" className=" font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Blogy
            </span>
            BABA
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus rem deserunt sit eveniet perspiciatis repellendus,
            voluptas impedit ducimus inventore quasi.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Username" />
              <TextInput type="text" placeholder="Username" id="username"  onChange={handleChange} />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput type="email" placeholder="xyxcompany@gmail.com" id="email" onChange={handleChange} />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="password" placeholder="Password" id="password" onChange={handleChange} />
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit">
              SIGNUP
            </Button>
          </form>
          <div className="Flex gap-2 text-sm mt-5">
            <span>Have an account ?</span>
            <Link to='/sign-in' className="text-blue-500">
            Sign in
            </Link>
          </div>
          {
            errorMessage && (
             
              <Alert className="mt-5 " color='failure' >
                 {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}
