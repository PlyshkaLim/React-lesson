import React from "react";
import "./styles.scss";
import ToggleButtonAnimate from "./components/ToggleButtonAnimate/ToggleButtonAnimate";
import Select1 from "./components/Select1/Select1";
import Button from "./components/Button/Button";
import Select from "./components/Select/Select";

const App = () => {
    return (
         <div className={'page'}>
             <div className={'block'}>
                 <h1>Colours</h1>
                 <div className="colours">
                     <div className="colours__item neutral900"/>
                     <div className="colours__item neutral800"/>
                     <div className="colours__item neutral700"/>
                     <div className="colours__item neutral600"/>
                     <div className="colours__item neutral500"/>
                     <div className="colours__item neutral400"/>
                     <div className="colours__item neutral300"/>
                     <div className="colours__item neutral200"/>
                     <div className="colours__item neutral150"/>
                     <div className="colours__item neutral100"/>
                     <div className="colours__item neutral0"/>
                 </div>
                 <div className="colours">
                     <div className="colours__item primary700"/>
                     <div className="colours__item primary600"/>
                     <div className="colours__item primary500"/>
                     <div className="colours__item primary200"/>
                     <div className="colours__item primary100"/>
                 </div>
                 <div className="colours">
                     <div className="colours__item danger700"/>
                     <div className="colours__item danger600"/>
                     <div className="colours__item danger500"/>
                     <div className="colours__item danger200"/>
                     <div className="colours__item danger100"/>
                 </div>
             </div>
             <div className={'block buttons'}>
                 <Button text={'Text'}/>
                 <Button text={'Submit'}/>
                 <Button text={'Click'} disabled={'true'}/>
             </div>
             <div className={'block'}>
                 <input className={'input'}
                        type={"text"}
                        placeholder={"Placeholder"}/>
             </div>
             <div className={'block'}>
                 <ToggleButtonAnimate/>
                 <br/>
                 <ToggleButtonAnimate/>
             </div>
             <div className={'block'}>
                <Select/>
             </div>
             {/*<div className={'block'}>
                 <div className={'select} tabIndex="1">
                     <input className={'selectopt} name="test" type="radio" id="opt1" checked/>
                     <label htmlFor="opt1" className={'selectopt'}>Oranges</label>
                     <input className={'select} name="test" type="radio" id="opt2"/>
                     <label htmlFor="opt2" className={'selectopt'}>Apples</label>
                     <input className={'select} name="test" type="radio" id="opt3"/>
                     <label htmlFor="opt3" className={'selectopt'}>Grapefruit</label>
                     <input className={'select} name="test" type="radio" id="opt4"/>
                     <label htmlFor="opt4" className={'selectopt'}>Bananas</label>
                     <input className={'select} name="test" type="radio" id="opt5"/>
                     <label htmlFor="opt5" className={'selectopt'}>Watermelon</label>
                 </div>
             </div>*/}
             <div className={'block'}>
                 <Select1/>
             </div>
             <div className={'block'}>

             </div>
         </div>
    );
}

export default App;
