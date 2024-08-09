import React from 'react'
import Input from "../../components/Input.jsx";
import FormTitle from "../../components/FormTitle.jsx";
import GenderCheckbox from "./GenderCheckbox.jsx";

const Signup = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <FormTitle title='Sign Up' />

                <form>
                    <Input type='text' placeholder='John Doe' label='Full Name' />
                    <Input type='text' placeholder='johndoe' label='Username' />
                    <Input type='password' placeholder='Password' label='Password' />
                    <Input type='password' placeholder='Confirm Password' label='Confirm Password' />

                    <GenderCheckbox />

                    <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
                        Already have an account?
                    </a>
                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Signup
