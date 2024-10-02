import React, {useEffect, useRef} from 'react';
import Message from "./Message.jsx";
import useGetMessages from "../../hooks/useGetMessages.js";
import MessageSkeleton from "../skeletons/MessageSkeleton.jsx";
import useConversation from "../../zustand/useConversation.js";
import useListenMessages from "../../hooks/useListenMessages.js";

const Messages = () => {
    const {loading, messages} = useGetMessages()
    useListenMessages()
    const {selectedConversation} = useConversation()
    const lastMessageRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: 'auto' })
        }, 0)
    }, [messages])

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {!loading && messages.length > 0 && messages.map((message) => (
                <div key={message._id} ref={lastMessageRef}>
                    <Message message={message} />
                </div>
            ))}
            {loading && [...Array(4)].map((_, idx) => <MessageSkeleton key={idx} />)}
            {!loading && messages.length === 0 && (
                <p className='text-center text-gray font-bold'>Send message to {selectedConversation.fullName}👋</p>
            )}
        </div>
    );
};

export default Messages;
