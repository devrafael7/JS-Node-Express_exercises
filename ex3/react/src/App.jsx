import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function FormInput(props){
  return <input className="w-full h-8 border-b border-black border-solid px-1 bg-gray-200 outline-none text-lg mb-10 pb-2" {...props}/>
}

function FormButton({ children, className, ...props}){
  return <button className={`self-center w-5/6 h-11 bg-blue-600 rounded-sm text-white ${className}`} type="submit" {...props}>
    {children}
  </button>
}

function SocialMediaIcon(){
  return <img src="" alt="" />
}

function App() {
  return (
    <div className="w-full h-screen bg-gray-200">
      <form className="w-full h-screen flex flex-col px-10 pt-14" action="">
        <h1 className="text-4xl font-normal">Hi!</h1>
        <p className="text-gray-800 mb-9">Create a new account</p>

        <FormInput placeholder="Enter your name"/>
        <FormInput placeholder="Enter your e-mail"/>
        <FormInput placeholder="Enter your password"/>

        <FormButton className='hover:bg-blue-800 mb-12 mt-4'>Submit</FormButton>

        <div className='w-full flex items-center h-auto mb-7'>
          <hr className='border-t-1 border-black w-full'/>
          <p className='font-bold mx-3'>or</p>
          <hr className='border-t-1 border-black w-full'/>
        </div>

        <div className='w-full h-auto flex flex-col items-center'>
          <p className='text-gray-500 font-semibold'>Social Media Signup</p>
          <div className='flex justify-center gap-6'>

          </div>
        </div>
      </form>
    </div>



    
  )
}

export default App
