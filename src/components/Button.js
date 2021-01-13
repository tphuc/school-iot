import React from 'react';
import './index.css'


const Button = ({style,  disabled, ...props}) => {
    return <div className='button'  {...props}>
        {props.children}
    </div>
}

export default Button