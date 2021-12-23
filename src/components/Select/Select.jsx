import React from "react";
import "./Select.scss";

const Select = () => {
    return (
        <>
            <div className={'box'}>
                <select placeholder={'Select'}>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                </select>
            </div>
        </>)
}

export default Select;