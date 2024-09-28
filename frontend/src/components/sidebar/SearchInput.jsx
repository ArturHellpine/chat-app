import React, {useState} from 'react';
import {IoSearchSharp} from "react-icons/io5";
import useGetConversations from "../../hooks/useGetConversations.js";
import useConversation from "../../zustand/useConversation.js";
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState('')
    const {setSelectedConversation} = useConversation()
    const {conversations} = useGetConversations()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!search) return

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

        if(conversation) {
            setSelectedConversation(conversation)
            setSearch('')
        } else {
            setSelectedConversation(null)
            toast.error('Not such user found')
            setSearch('')
        }
    }

    return (
        <form className='flex items-center gap-2' onSubmit={handleSubmit}>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder='Search..'
                className='input input-bordered rounded-full bg-transparent'
            />
            <button type='submit' className='btn btn-circle text-white bg-transparent'>
                <IoSearchSharp className='w-5 h-5 outline-none' />
            </button>
        </form>
    );
};

export default SearchInput;
