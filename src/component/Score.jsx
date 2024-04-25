import React from 'react'
import './Score.css';
import logo from '../images/logo-bonus.svg'

export default function Score({score}) {
    return (
        <div className='scoreBoard'>
            <img src={logo} alt="" />
            <div className="score">
                <p>SCORE</p>
                <h2>{score}</h2>
            </div>
        </div>

    )
}
