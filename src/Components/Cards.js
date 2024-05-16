import React from 'react';
import './Cards.css';
import Players from './Players';

function Cards({ players }) {
    return (
        <div className="deck">
            {players.map((player, index) => (
                <div key={index} className={`card animate-${index}`} style={{ width: '18rem' }}>
                    <img src={`https://example.com/${player.image}`} className="card-img-top" alt={player.name} />
                    <div className="card-body">
                        <h5 className="card-title">{player.name}</h5>
                        <p className="card-text">Shirt Number: {player.shirtNumber}</p>
                        <p className="card-text">Position: {player.position}</p>
                        <p className="card-text">Age: {player.age}</p>
                        <p className="card-text">Country: {player.country}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            ))}
            <Players />
        </div>
    );
}

export default Cards;
