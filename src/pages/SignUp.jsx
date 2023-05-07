import React from 'react'

const SignUp = () => {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center h-screen'>
      <div className="flex flex-col items-center justify-center lg:w-[40%]  md:w-[50%] w-[90%]">
        <h3 className='h3'>Please Sign Up here</h3>
            <input className='w-full py-1 px-2 my-4 border-2 border-blue-700 rounded-md' type="text" placeholder='Name' />
            <input className='w-full py-1 px-2 my-4 border-2 border-blue-700 rounded-md' type="email" placeholder="Email" />
            <input className='w-full py-1 px-2 my-4 border-2 border-blue-700 rounded-md' type="password" placeholder='Password' />
      </div>
      <div className='flex flex-col items-center justify-center'>
            <button className='bg-blue-950 text-white lg:px-[180px] md:px-[150px] px-[180px] py-1 mb-4 my-8 hover:bg-blue-700 hover:px-[190px] scroll-smooth duration-300'>Sign Up</button>
      </div>
    </div>
  )
}

export default SignUp