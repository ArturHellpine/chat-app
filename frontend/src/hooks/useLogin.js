import React, {useState} from 'react';
import {useAuthContext} from "../context/AuthContext.jsx";
import toast from "react-hot-toast";

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const {authUser, setAuthUser} = useAuthContext()

    const login = async (username, password) => {
        const success = handleInputError({ username, password })
        if(!success) return

        setLoading(true)

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })

            const data = await response.json()
            if(data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem('user', JSON.stringify(data))
            setAuthUser(data)

            toast.success(`Welcome ${data?.fullName}`)

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return {login, loading}
};

export default useLogin;

const handleInputError = ({ username, password }) => {
    if(!username || !password) {
        toast.error('Please fill in all fields')
        return false
    }

    return true
}
