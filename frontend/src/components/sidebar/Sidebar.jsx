import React from 'react';
import SearchInput from "./SearchInput.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";

const Sidebar = () => {
    return (
        <div className=' p-4 flex flex-col sidebar'>
            <SearchInput />
            <div className='divider px-3' />
            <Conversations />
            <LogoutButton />
        </div>
    );
};

export default Sidebar;
