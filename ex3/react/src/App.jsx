import { Children, useState } from 'react';
import './App.css';
import FormInput from './elements/form_input';
import FormButton from './elements/form_button';
import SocialMediaIcon from './elements/sm_icons';

function App() {
  const [isSignUp, setIsSignUp] = useState(true);

  const showSignIn = ()=> setIsSignUp(false);
  const showSignUp = ()=> setIsSignUp(true);

  document.querySelectorAll('.inputName').forEach( (inputNames) =>{
    nameValue = inputNames.value
  })

  return (
    <div className="w-full h-screen bg-gray-200">
      <form className={`w-full h-screen flex flex-col px-10 pt-10 relative ${isSignUp ? '': 'hidden'}`} action="">
        <h1 className="text-4xl font-normal">Hi!</h1>
        <p className="text-gray-800 mb-9">Create a new account</p>

        <FormInput className='inputName' placeholder="Enter your name"/>
        <FormInput className='inputEmail' placeholder="Enter your e-mail"/>
        <FormInput className="inputPassword" placeholder="Enter your password"/>

        <FormButton className='hover:bg-blue-800 mb-12 mt-4' type="submit">Submit</FormButton>

        <div className='w-full flex items-center h-auto mb-7'>
          <hr className='border-t-1 border-black w-full'/>
          <p className='font-bold mx-3'>or</p>
          <hr className='border-t-1 border-black w-full'/>
        </div>

        <div className='w-full h-auto flex flex-col items-center'>

          <p className='text-gray-500 font-semibold mb-3'>Social Media Signup</p>

          <div className='flex justify-center gap-6'>
            <SocialMediaIcon src="../public/icon/google.color.png" alt="Facebook" />
            <SocialMediaIcon src="../public/icon/facebook.color.png" alt="Facebook" />
            <SocialMediaIcon src="../public/icon/icons8-mac-os-30.png" alt="Facebook" />
          </div>

        </div>

        <p className='absolute bottom-3 text-sm' onClick={showSignIn}>Already have an accout? <span className='font-semibold'>Sign in</span></p>
      </form>



      <form className={`signInForm w-full h-screen flex flex-col px-10 pt-10 relative ${isSignUp ? 'hidden': ''}`} action="">
        <h1 className="text-4xl font-normal">Welcome!</h1>
        <p className="text-gray-800 mb-9">Sign in to continue</p>

        <FormInput className="inputEmail" placeholder="Enter your e-mail"/>
        <FormInput className="inputPassword" placeholder="Enter your password"/>

        <FormButton className='hover:bg-blue-800 mb-3 mt-4'>Login</FormButton>
        <p className='font-semibold self-center mb-12 text-gray-700'>Forgot Password?</p>

        <div className='w-full flex items-center h-auto mb-7'>
          <hr className='border-t-1 border-black w-full'/>
          <p className='font-bold mx-3'>or</p>
          <hr className='border-t-1 border-black w-full'/>
        </div>

        <div className='w-full h-auto flex flex-col items-center'>

          <p className='text-gray-500 font-semibold mb-3'>Social Media Login</p>

          <div className='flex justify-center gap-6'>
            <SocialMediaIcon src="../public/icon/google.color.png" alt="Facebook" />
            <SocialMediaIcon src="../public/icon/facebook.color.png" alt="Facebook" />
            <SocialMediaIcon src="../public/icon/icons8-mac-os-30.png" alt="Facebook" />
          </div>

        </div>

        <p className='absolute bottom-3 text-sm' onClick={showSignUp}>Don't have an account?<span className='font-semibold'> Sign up</span></p>
      </form>
    </div>
  )

}

export default App
