import React, { useState } from 'react'
import Input from "../../components/Input.jsx";
import FormTitle from "../../components/FormTitle.jsx";
import GenderCheckbox from "./GenderCheckbox.jsx";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";

const Signup = () => {
    const [values, setValues] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const { loading, signup } = useSignup()

    const handleCheckboxChange = (gender) => {
        setValues({...values, gender})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(values)
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-0'>
                <FormTitle title='Sign Up' />

                <form onSubmit={handleSubmit}>
                    <Input
                        value={values.fullName}
                        onChange={(e) => setValues({...values, fullName: e.target.value})}
                        type='text' placeholder='Full Name' label='Full Name'
                    />
                    <Input
                        value={values.username}
                        onChange={(e) => setValues({...values, username: e.target.value})}
                        type='text' placeholder='Username' label='Username'
                    />
                    <Input
                        value={values.password}
                        onChange={(e) => setValues({...values, password: e.target.value})}
                        type='password' placeholder='Password' label='Password'
                    />
                    <Input
                        value={values.confirmPassword}
                        onChange={(e) => setValues({...values, confirmPassword: e.target.value})}
                        type='password' placeholder='Confirm Password' label='Confirm Password'
                    />

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={values.gender} />

                    <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
                        Already have an account?
                    </Link>
                    <div>
                        <button
                            disabled={loading}
                            className='btn btn-block btn-sm mt-2 border border-slate-700'>
                            { loading ? <span className='loading loading-spinner'></span> : 'Sign Up' }
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Signup
