import React from 'react';
import useConversation from "../../zustand/useConversation.js";
import {useSocketContext} from "../../context/SocketContext.jsx";

const Conversation = ({conversation, lastIndex}) => {
    const {selectedConversation, setSelectedConversation} = useConversation()
    const isSelected = selectedConversation?._id === conversation._id
    const {onlineUsers} = useSocketContext()
    const isOnline = onlineUsers.includes(conversation._id)

    return (
        <>
            <div
                onClick={() => setSelectedConversation(conversation)}
                className={`flex gap-2 items-center transition ease-in-out py-1 cursor-pointer px-2
                ${!isSelected ? 'hover:bg-sky-500/30' : 'bg-sky-500/80'}`}
            >
                <div className={`avatar ${isOnline ? 'online' : ''}`}>
                    <div className='w-9 rounded-full'>
                        <img
                            src={conversation.profilePic}
                            alt="User Avatar"
                        />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 items-center justify-between'>
                        <p className='text-sm text-gray-200'>{conversation.fullName}</p>
                        <span className='text-xl'></span>
                    </div>
                </div>
            </div>
            {!lastIndex && <div className='divider my-0 py-2 h-1' />}
        </>
    );
};

export default Conversation;
