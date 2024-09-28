import React, {useEffect, useState} from 'react'
import Input from "../../components/Input.jsx";
import FormTitle from "../../components/FormTitle.jsx";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin.js";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login, loading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(username, password)
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <FormTitle title='Login' />

            <form onSubmit={handleSubmit}>
                <Input
                    type='text'
                    placeholder='Enter username'
                    label='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type='password'
                    placeholder='Enter Password'
                    label='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
                    Don't have an account?
                </Link>
                <div>
                    <button
                        disabled={loading}
                        className='btn btn-block btn-sm mt-2'>
                        { loading ? <span className='loading loading-spinner'></span> : 'Login' }
                    </button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Login
