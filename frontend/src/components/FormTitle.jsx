import React from 'react';

const FormTitle = ({ title }) => {
    return (
        <h1 className='text-3xl font-semibold text-center text-gray-300 pb-4'>
            { title } <span className='text-blue-500'> FriendlyChat</span>
        </h1>
    );
};

export default FormTitle;
