import React from 'react';
import useLogout from "../../hooks/useLogout.js";
import { useAuthContext } from "../../context/AuthContext.jsx";
import {CiLogout} from "react-icons/ci";

const LogoutButton = () => {
    const { logout, loading } = useLogout()
    const { authUser } = useAuthContext()

    return (
        <div className='mt-auto pt-4 flex items-center'>
            {!loading ? (
                <CiLogout className=' text-white cursor-pointer' onClick={logout} size={22} />
            ) : (
                <span className='loading loading-spinner'></span>
            )}
            <span className='pl-2 text-sm'>{authUser?.fullName}</span>
        </div>
    );
};

export default LogoutButton;
