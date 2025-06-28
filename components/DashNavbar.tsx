"use client"

import Image from 'next/image'
import logo from "@/public/SR-Rony.jpeg"
import Link from 'next/link'

const DashNavbar = () => {
    const menu =[
        {
            name:'Users',
            href : 'dashboard/users'
        },
        {
            name:'Product',
            href : 'dashboard/product'
        },
        {
            name:'Product',
            href : 'dashboard/category'
        },
        {
            name:'Product',
            href : 'dashboard/users'
        },
    ]
    


  return (
    <div className='py-4 bg-black text-white'>
        <div className="container mx-auto px-2">
            <div className="flex justify-between items-center">
                <div className='flex items-center gap-2 '> 
                    <Link href={"/dashboard"} className='w-10 h-10 rounded-full ring-2 ring-primary overflow-hidden'>
                        <Image className='w-full object-cover'
                        src={logo}
                        alt="logo"
                        />
                    </Link>
                    <h1 className='text-primary'>SR</h1>
                </div>
                <Link href='/dashboard/login'>
                    <button className='cursor-pointer py-2 px-6 ring-primary ring-2 rounded-full font-bold'>Login</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default DashNavbar