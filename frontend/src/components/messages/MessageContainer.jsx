import React from 'react';
import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import { TiMessages, TiArrowLeft } from "react-icons/ti";

const MessageContainer = () => {
    const noChatSelected = true
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {!noChatSelected ? (
                <NoChatSelected />
            ) : (
                <>
                    {/* Header */}
                    <div className='px-2 py-2 mb-4 flex items-center'>
                        <TiArrowLeft size={30} className='cursor-pointer text-gray-400' />
                        <span className='text-gray-300 text-[18px] pl-1'>John Doe</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
};

const NoChatSelected = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 Full Name ❄</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
}

export default MessageContainer;
