"use client"

import Link from 'next/link';
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    console.log('Login Data:', loginData);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0e0e12] overflow-hidden">
      {/* Background effect */}
      <div className="absolute w-[700px] h-[700px] bg-red-600 rounded-full blur-[200px] opacity-30 animate-pulse"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-sm p-6 space-y-6 bg-[#1c1c22] rounded-lg shadow-lg">
          <h1 className='text-2xl font-bold text-center text-white'>Welcome to Ecommerce</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-white">Email</label>
            <input
              type="email"
              placeholder="Exemplo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-[#2a2a32] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="text-sm text-white">Password</label>
            <input
              type="password"
              placeholder="************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-[#2a2a32] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <Link href="#" className="text-sm mb-5 block text-gray-400 hover:underline">
            Esqueceu sua senha?
          </Link>

          <button
            type="submit"
            className="w-full py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition duration-200 cursor-pointer"
          >
            Login
          </button>
        </form>
        <div>
          <p className='text-center text-white'>***** Or login with *****</p>
        </div>
        <div className='flex justify-between'>
          <Link href={"#"}>
            <button className='ring-1 ring-primary rounded-full py-2 px-10 text-white cursor-pointer'>
                Google
            </button>
          </Link>
          <Link href={"#"}>
            <button className='ring-1 ring-primary rounded-full py-2 px-10 text-white cursor-pointer'>
                Facbook
            </button>
          </Link>
        </div>
        <div>
          <p className='text-white'>Dont'have an acount <Link className='text-primary hover:underline' href={"/register"}>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
