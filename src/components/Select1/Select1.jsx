import React from "react";
import "./Select1.scss";


const Select1 = () => {
    return (
        <>
            <div id={'components'} className={'select'}>
                Select
                <span className={'polygon'}/>
                <div className={'submenu'}>
                    <div className={'submenu_item'}>
                        Option 1
                    </div>
                    <div className={'submenu_item'}>
                        Option 2
                    </div>
                    <div className={'submenu_item'}>
                        Option 3
                    </div>
                    <div className={'submenu_item'}>
                        Option 4
                    </div>
                </div>
            </div>
        </>)
}

export default Select1;