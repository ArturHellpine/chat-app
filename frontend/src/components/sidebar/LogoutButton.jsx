import React from 'react';
import {BiLogOut} from "react-icons/bi";

const LogoutButton = () => {
    return (
        <div className='mt-auto pt-4 flex items-center'>
            <BiLogOut className='w-6 h-6 cursor-pointer' />
            {/*<span className='loading loading-spinner'></span>*/}
            <span className='pl-2 text-sm'>Artur Bachynskiy</span>
        </div>
    );
};

export default LogoutButton;
