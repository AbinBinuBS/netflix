import react,{useState} from 'react'
import Header from './header'
function Login() {
  const [isSignInForm,setSignInForm] = useState(true)
  const toggleSignInForm = () =>{
    setSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="main-img" />
      </div>
      <form className='p-12 w-3/12 my-36 right-0 left-0 mx-auto text-white  bg-black absolute rounded-lg bg opacity-80' >
        <h1 className='font-bold test-3xl py-4'>{ isSignInForm ? 'Sign in' : 'Sign up'}</h1>
        {isSignInForm ? <input type="text" placeholder='Full Name' className='p-4 bg-gray-700 my-4 w-full' /> : ''}
        <input type="text" placeholder='Email Address' className='p-4 bg-gray-700 my-4 w-full' />
        <input type="password" placeholder=' password' className='p-4 my-4 bg-gray-700 w-full' />
        <button className='p-4 my-4 bg-red-700   w-full'>{ isSignInForm ? 'Sign in' : 'Sign up'}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{ isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already Registerd? Sign in'}</p>
      </form>
    </div>
  );
}

export default Login;