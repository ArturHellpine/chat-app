import React from 'react';
import Conversation from "./Conversation.jsx";
import useGetConversations from '../../hooks/useGetConversations.js';

const Conversations = () => {
    const {loading, conversations} = useGetConversations()

    if(conversations.length < 1) {
        return <h4 className='text-center'>You have no conversations</h4>
    }

    return (
        <div className='flex flex-col overflow-auto pr-4'>
            {conversations.map((conversation, index) =>
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    lastIndex={index === conversations.length - 1}
                />
            )}
            { loading ? <span className='loading loading-spinner mx-auto'></span> : null }
        </div>
    );
};

export default Conversations;
