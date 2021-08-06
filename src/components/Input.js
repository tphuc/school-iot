import React from 'react';
import './index.css'


const Input = ({style,  disabled, ...props}) => {
    return <input className='input'  {...props}>
    </input>
}

export default Input