import React, { useState } from 'react';
import './Rules.css';
import rulesInfo from '../images/image-rules-bonus.svg';
import close from '../images/icon-close.svg';

export default function Rules() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
        document.body.style.overflow = open ? 'auto' : 'hidden';
    };

    return (
        <>
            <button className='rulesBtn' onClick={handleToggle}>Rules</button>
            <div className="rulesInfo" style={{ display: open ? 'grid' : 'none' }}>
                <h2>RULES</h2>
                <img src={rulesInfo} alt=""  className='ruleImg'/>
                <img src={close} alt="" onClick={handleToggle}  className='ruleClose' />
            </div>
        </>
    );
}
