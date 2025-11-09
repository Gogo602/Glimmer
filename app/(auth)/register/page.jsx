"use client"

import Link from 'next/link'
import { FaPlus, FaUser } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa6'
import { FaLock } from "react-icons/fa";
import EmailInput from '@/components/inputs/EmailInput';
import PasswordInput from '@/components/inputs/PasswordInput';
import React from 'react';
import TextInput from '@/components/inputs/TextInput';


export default function RegisterPage() {
  const [user, setUser] = React.useState({
          full_name: "",
          email: "",
          password: "",
          confirm_password: "",
    })

  
  return (
    <section className="min-h-screen w-full bg-black relative flex items-center justify-center px-3">
        {/* Dark Noise Colored Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
        background: "#000000",
        backgroundImage: `
          radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
          radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
          radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
        `,
        backgroundSize: "20px 20px, 30px 30px, 25px 25px",
        backgroundPosition: "0 0, 10px 10px, 15px 5px",
        }}
      />
        <div className="text-white border-4 rounded-tl-4xl border-[#270A63E5] p-5 w-full md:w-2/5 mt-25 mb-5 relative">
            <div className="space-y-5">
                  <div className="space-y-2 text-center">
                    <div className="flex items-center justify-center">
                        <h5 className="font-bold border-b-4  border-[#270A63E5] text-2xl">Signup</h5>
                    </div>
                    <p>GliimerId is built for you! Create an account for free</p>
                  </div>
                <form action="" className="flex flex-col w-full space-y-2">
                    <div className="relative">
                        <TextInput 
                          label="Full Name"
                          name="full_name"
                          value={user.full_name}
                          onChange={(e) => setEmail({...user, full_name: e.target.value})}
                          required={true}
                        />
                        <FaUser size={26} className='text-yellow-600 absolute top-10 left-2'/>
                    </div>
                    <div className="relative">
                        <EmailInput 
                          label="Email"
                          name="email"
                          value={user.email}
                          onChange={(e) => setEmail({...user, email: e.target.value})}
                          required={true}
                        />
                        <FaEnvelope size={26} className='text-yellow-600 absolute top-10 left-2'/>
                    </div>
                    <div className='relative'>
                        <PasswordInput 
                          label="Password" 
                          name="password" 
                          value={user.password} 
                          onChange={(e) => setUser({...user, password: e.target.value})} 
                          required={true}
                        />
                        <FaLock size={26} className='text-yellow-600 absolute top-10 left-2'/>
                    </div>
                    
                    <div className='relative'>
                        <PasswordInput 
                          label="Confirm Password" 
                          name="confirm_password" 
                          value={user.confirm_password} 
                          onChange={(e) => setUser({...user, confirm_password: e.target.value})} 
                          required={true}
                        />
                        <FaLock size={26} className='text-yellow-600 absolute top-10 left-2'/>
                    </div>
                    
                    <button
                          type="submit"
                          className="py-2 px-5  bg-gradient-to-r from-[#050505]/20 to-[#270A63E5]/50 border border-white rounded-md md:px-10 cursor-pointer"
                      >Signup</button>
                </form>
                <div className='font-semibold flex items-center justify-center'>
                    <p>Already have an Account? </p> 
                    <Link href="/login" className="text-right font-semibold ml-2">Login</Link>
                </div>
                <FaPlus className="absolute h-6 w-6 -top-3.5 -right-3.5 text-yellow-600" />
            </div>
        </div>
    </section>
  )
}
