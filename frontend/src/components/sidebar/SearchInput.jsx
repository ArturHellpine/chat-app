import React from 'react';
import {IoSearchSharp} from "react-icons/io5";

const SearchInput = () => {
    return (
        <form className='flex items-center gap-2'>
            <input type="text" placeholder='Search..' className='input input-bordered rounded-full bg-transparent'/>
            <button type='submit' className='btn btn-circle text-white bg-transparent'>
                <IoSearchSharp className='w-5 h-5 outline-none' />
            </button>
        </form>
    );
};

export default SearchInput;
