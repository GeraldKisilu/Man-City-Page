import React from 'react';
import './Cards.css';

function Cards({ players }) {
    return (
        <div className="deck">
            {players.map((player, index) => (
                <div key={index} className={`card animate-${index}`}>
                    <h2>{player.name}</h2>
                    <p>Shirt Number: {player.shirtNumber}</p>
                    <p>Position: {player.position}</p>
                    <p>Age: {player.age}</p>
                    <p>Country: {player.country}</p>
                </div>
            ))}
        </div>
    );
}

export default Cards;
