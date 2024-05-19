import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Review.css';

const positions = {
    'Goalkeeper': { top: '85%', left: '45%' },
    'Right Back': { top: '70%', left: '10%' },
    'Center Back 1': { top: '70%', left: '30%' },
    'Center Back 2': { top: '70%', left: '60%' },
    'Left Back': { top: '70%', left: '90%' },
    'Defensive Midfield': { top: '50%', left: '45%' },
    'Right Midfield': { top: '40%', left: '25%' },
    'Central Midfield': { top: '40%', left: '45%' },
    'Left Midfield': { top: '40%', left: '65%' },
    'Right Wing': { top: '20%', left: '10%' },
    'Striker': { top: '20%', left: '45%' },
    'Left Wing': { top: '20%', left: '80%' }
};

const playerPositions = {
    'Ederson': { position: 'Goalkeeper', rating: 88 },
    'Kyle Walker': { position: 'Right Back', rating: 85 },
    'Rúben Dias': { position: 'Center Back 1', rating: 88 },
    'Nathan Aké': { position: 'Center Back 2', rating: 82 },
    'Manuel Akanji': { position: 'Left Back', rating: 86 },
    'Rodri': { position: 'Defensive Midfield', rating: 89 },
    'Kevin De Bruyne': { position: 'Right Midfield', rating: 91 },
    'Mateo Kovacic': { position: 'Central Midfield', rating: 84 },
    'Phil Foden': { position: 'Left Midfield', rating: 84 },
    'Bernardo Silva': { position: 'Right Wing', rating: 87 },
    'Erling Haaland': { position: 'Striker', rating: 90 },
    'Jack Grealish': { position: 'Left Wing', rating: 84 }
};

function Review() {
    const { playerName } = useParams();
    const playerPosition = playerPositions[playerName]?.position || 'Unknown';
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const handlePositionClick = (position) => {
        const player = Object.entries(playerPositions).find(([_, value]) => value.position === position);
        setSelectedPlayer(player ? player[0] : null);
    };

    return (
        <div className="review-container">
            <h1>Review for {playerName}</h1>
            <p>This is the review page for {playerName}. You can add more details here.</p>
            <div className="field">
                {Object.entries(positions).map(([position, style]) => (
                    <button
                        key={position}
                        className="position-button"
                        style={{
                            ...style,
                            backgroundColor: position === playerPosition ? 'red' : 'blue'
                        }}
                        onClick={() => handlePositionClick(position)}
                    >
                        {position}
                    </button>
                ))}
                {selectedPlayer && (
                    <div className="rating-card">
                        <h2>{selectedPlayer}</h2>
                        <p>Rating: {playerPositions[selectedPlayer].rating}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Review;
