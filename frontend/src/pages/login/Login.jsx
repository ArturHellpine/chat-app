import React from 'react'
import Input from "../../components/Input.jsx";
import FormTitle from "../../components/FormTitle.jsx";

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <FormTitle title='Login' />

            <form>
                <Input type='text' placeholder='Enter username' label='Username' />
                <Input type='password' placeholder='Enter Password' label='Password' />
                <a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
                    Don't have an account?
                </a>
                <div>
                    <button className='btn btn-block btn-sm mt-2'>Login</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Login
