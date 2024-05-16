import React, { useEffect, useRef } from 'react';
import './Cards.css';

function Cards({ players }) {


    const cardRefs = useRef([]);

    useEffect(() => {
        cardRefs.current.forEach((cardRef, index) => {
            cardRef.classList.add(`animate-${index}`);
        });
    }, [players]);

    return (
        <div className="deck">
            <div className='header'>
                <h1>
                    <center>The Team</center>
                </h1>
            </div>
            {players.map((player, index) => (
                <div
                    key={index}
                    ref={el => cardRefs.current[index] = el}
                    className="card"
                    style={{ width: '18rem', opacity: 0 }}
                >
                    <img
                        src={`/${player.image}`}
                        className="card-img-top"
                        alt={player.name}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{player.name}</h5>
                        <p className="card-text">Shirt Number: {player.shirtNumber}</p>
                        <p className="card-text">Position: {player.position}</p>
                        <p className="card-text">Age: {player.age}</p>
                        <p className="card-text">Country: {player.country}</p>
                        <button>View</button>
                    </div>
                </div>
            ))}
            <button id='nxtButton'>Next</button>
        </div>
    );
}

export default Cards;
