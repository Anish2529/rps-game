import React, { useEffect, useRef, useState } from 'react';
import './Structure.css';
import Score from './Score';
import pentagon from '../images/bg-pentagon.svg';
import lizard from '../images/icon-lizard.svg';
import paper from '../images/icon-paper.svg';
import rock from '../images/icon-rock.svg';
import scissors from '../images/icon-scissors.svg';
import spock from '../images/icon-spock.svg';

export default function Structure() {
    const [pick, setPick] = useState('');
    const [comPick, setComPick] = useState('');
    const [message, setMessage] = useState('');
    const [display, setDisplay] = useState(true);
    const [score, setScore] = useState(0)

    const gameItem = ['scissors', 'paper', 'rock', 'lizard', 'spock'];

    const scissorsRef = useRef(null);
    const paperRef = useRef(null);
    const rocksRef = useRef(null);
    const lizardRef = useRef(null);
    const spockRef = useRef(null);

    const ComRandom = () => {
        const index = Math.floor(Math.random() * gameItem.length);
        setComPick(gameItem[index]);
    }

    const Pick = (ref) => {
        const Picked = ref.current.dataset.game;
        setPick(Picked);
        ComRandom();
        setDisplay(!display);
    }

    useEffect(() => {
        if (pick == '' & comPick == '') {
            setMessage('');
        } else if (pick === comPick) {
            setMessage('TIED!');

        }
        else if (pick == 'scissors' && comPick == 'paper' || pick == 'scissors' && comPick == 'lizard' || pick == 'paper' && comPick == 'rock' || pick == 'paper' && comPick == 'spock' || pick == 'rock' && comPick == 'lizard' || pick == 'rock' && comPick == 'scissors' || pick == 'lizard' && comPick == 'spock' || pick == 'lizard' && comPick == 'paper' || pick == 'spock' && comPick == 'scissors' || pick == 'spock' && comPick == 'rock') {
            setMessage('YOU WIN');
            const updateScore = score + 1;
            setScore(updateScore)
        } else {
            setMessage('YOU LOSE');

            if (score == 0) {
                const updateScore = 0;
                setScore(updateScore);
            } else {
                const updateScore = score - 1;
                setScore(updateScore);
            }
        }

    }, [pick, comPick])

    const getImagePath = (pick) => {
        switch (pick) {
            case 'scissors':
                return scissors;
            case 'paper':
                return paper;
            case 'rock':
                return rock;
            case 'lizard':
                return lizard;
            case 'spock':
                return spock;
            default:
                return ''; // or a default image path if necessary
        }
    };

    return (
        <>
            <Score score={score} />
            <div className="structureMain" style={{ display: display ? 'flex' : 'none' }}>
                <div className="structure">
                    <img src={pentagon} alt="" />
                    <div ref={scissorsRef} className="image-container scissors" onClick={() => Pick(scissorsRef)} data-game="scissors">
                        <img src={scissors} alt="scissors" />
                    </div>
                    <div ref={paperRef} className="image-container paper" onClick={() => Pick(paperRef)} data-game="paper">
                        <img src={paper} alt="paper" />
                    </div>
                    <div ref={rocksRef} className="image-container rock" onClick={() => Pick(rocksRef)} data-game="rock">
                        <img src={rock} alt="rock" />
                    </div>
                    <div ref={lizardRef} className="image-container lizard" onClick={() => Pick(lizardRef)} data-game="lizard">
                        <img src={lizard} alt="lizard" />
                    </div>
                    <div ref={spockRef} className="image-container spock" onClick={() => Pick(spockRef)} data-game="spock">
                        <img src={spock} alt="spock" />
                    </div>
                </div>
            </div>
            <div className="gameApp" style={{ display: !display ? 'flex' : 'none' }}>
                <div className="playArea">
                    <div className="pickes" id="youPick">
                        <h2>YOU PICKED</h2>
                        <div className={`gamePick ${message === 'YOU WIN' ? ' winner' : ''}`} id={pick}>
                            <img src={getImagePath(pick)} alt={pick} />
                        </div>
                    </div>
                    <div className="result">
                        <h1>{message}</h1>
                        <button onClick={() => setDisplay(true)}>PLAY AGAIN</button>
                    </div>
                    <div className="pickes" id="housePick">
                        <h2>HOUSE PICKED</h2>
                        <div className={`gamePick ${message === 'YOU LOSE' ? ' winner' : ''}`} id={comPick}>
                            <img src={getImagePath(comPick)} alt={comPick} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
