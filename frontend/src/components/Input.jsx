import React from 'react';

const Input = ({ type, placeholder, value, onChange, label }) => {
    return (
        <div>
            <label className='label'>
                <span className='text-base label-text'>{label}</span>
            </label>
            <input
                value={value}
                onChange={onChange}
                type={ type }
                placeholder={ placeholder }
                className='w-full input input-bordered h-10 placeholder:opacity-60'
            />
        </div>
    );
};

export default Input;
