import React from "react";
import "./Button.scss";

const Button = (props) => {
    return (
        <>
            <button className={'button'}
                    disabled={props.disabled}>
                {props.text}
            </button>
        </>
    )
}

export default Button;