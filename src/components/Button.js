import React from 'react';



const Button = ({style, variant='basic',  disabled, ...props}) => {
    return <div className={`button ${variant}`}  {...props}>
        {props.children}
    </div>
}



export default Button