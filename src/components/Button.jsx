import React, { useState } from 'react';
import { signInWithGoogle } from '../authentication/Firebase';

const Button = ({
    isDisabled, btnType, containerStyle, textStyle, title, rightIcon, handleClick
}) => {
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true);
        // You can also call any additional click handlers here
        signInWithGoogle()
        if (handleClick) {
            handleClick();
        }
    }

    return (
        <div>
            {!buttonClicked ? (
                <button
                    disabled={isDisabled ?? false}
                    type={btnType || "button"}
                    className={`custom-btn ${containerStyle}`}
                    onClick={handleButtonClick}
                >
                    <span className='flex-1'>{title}</span>
                    {rightIcon && <div className='relative w-6 h-6'>{rightIcon}</div>}
                </button>
            ) : (
                <div>
                    {/* Display your image here */}
                    <img src={localStorage.getItem("profilePic")} />
                    {/* Display your text here */}
                    <p className='text-white'>{localStorage.getItem("name")}</p>
                </div>
            )}
        </div>
    )
}

export default Button;
