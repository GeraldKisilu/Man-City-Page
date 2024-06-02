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
    'Ederson': {
        position: 'Goalkeeper', rating: 88, country: 'Brazil',
        previousTeams: ['Rio Ave', 'Benfica'], achievements: ['Premier League Winner', 'EFL Cup Winner'],
        image: 'ederson.jpg', background: 'A highly skilled goalkeeper known for his distribution and reflexes.'
    },
    'Kyle Walker': {
        position: 'Right Back', rating: 85, country: 'England',
        previousTeams: ['Sheffield United', 'Tottenham Hotspur'], achievements: ['Premier League Winner', 'FA Cup Winner'],
        image: 'kyle_walker.jpg', background: 'A fast and experienced right back with great defensive abilities.'
    },
    'Rúben Dias': {
        position: 'Center Back 1', rating: 88, country: 'Portugal',
        previousTeams: ['Benfica'], achievements: ['Premier League Winner', 'EFL Cup Winner'],
        image: 'ruben_dias.jpg', background: 'A solid central defender with excellent leadership and tackling skills.'
    },
    'Nathan Aké': {
        position: 'Center Back 2', rating: 82, country: 'Netherlands',
        previousTeams: ['Chelsea', 'Bournemouth'], achievements: ['Premier League Winner'],
        image: 'nathan_ake.jpg', background: 'A versatile defender who can play in multiple positions.'
    },
    'Manuel Akanji': {
        position: 'Left Back', rating: 86, country: 'Switzerland',
        previousTeams: ['Borussia Dortmund'], achievements: ['DFB-Pokal Winner'],
        image: 'manuel_akanji.jpg', background: 'A strong and reliable defender with great passing abilities.'
    },
    'Rodri': {
        position: 'Defensive Midfield', rating: 89, country: 'Spain',
        previousTeams: ['Villarreal', 'Atletico Madrid'], achievements: ['Premier League Winner', 'EFL Cup Winner'],
        image: 'rodri.jpg', background: 'A key defensive midfielder known for his positioning and ball control.'
    },
    'Kevin De Bruyne': {
        position: 'Right Midfield', rating: 91, country: 'Belgium',
        previousTeams: ['Genk', 'Chelsea', 'Wolfsburg'], achievements: ['Premier League Winner', 'FA Cup Winner'],
        image: 'kevin_de_bruyne.jpg', background: 'One of the best midfielders in the world with exceptional vision and passing.'
    },
    'Mateo Kovacic': {
        position: 'Central Midfield', rating: 84, country: 'Croatia',
        previousTeams: ['Dinamo Zagreb', 'Inter Milan', 'Real Madrid'], achievements: ['Champions League Winner'],
        image: 'mateo_kovacic.jpg', background: 'A creative midfielder with excellent dribbling and playmaking skills.'
    },
    'Phil Foden': {
        position: 'Left Midfield', rating: 84, country: 'England',
        previousTeams: ['Manchester City Academy'], achievements: ['Premier League Winner', 'EFL Cup Winner'],
        image: 'phil_foden.jpg', background: 'A young and talented midfielder with great technical skills.'
    },
    'Bernardo Silva': {
        position: 'Right Wing', rating: 87, country: 'Portugal',
        previousTeams: ['Benfica', 'Monaco'], achievements: ['Premier League Winner', 'FA Cup Winner'],
        image: 'bernardo_silva.jpg', background: 'A versatile attacking player known for his dribbling and creativity.'
    },
    'Erling Haaland': {
        position: 'Striker', rating: 90, country: 'Norway',
        previousTeams: ['Molde', 'Red Bull Salzburg', 'Borussia Dortmund'], achievements: ['Bundesliga Top Scorer'],
        image: 'erling_haaland.jpg', background: 'A prolific striker with incredible goal-scoring abilities.'
    },
    'Jack Grealish': {
        position: 'Left Wing', rating: 84, country: 'England',
        previousTeams: ['Aston Villa'], achievements: ['Premier League Winner'],
        image: 'jack_grealish.jpg', background: 'An exciting winger known for his dribbling and creativity.'
    }
};

function Review() {
    const { playerName } = useParams();
    const playerData = playerPositions[playerName] || {};
    const playerPosition = playerData.position || 'Unknown';
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const handlePositionClick = (position) => {
        const player = Object.entries(playerPositions).find(([_, value]) => value.position === position);
        setSelectedPlayer(player ? player[0] : null);
    };

    return (
        <div className="review-container">
            <h1>Review for {playerName}</h1>
            <p>This is the review page for {playerName}. Here are some details about the player:</p>
            {playerData && (
                <div className="player-info">
                    <img src={`/images/${playerData.image}`} alt={playerName} className="player-image" />
                    <h2>{playerName}</h2>
                    <p><strong>Position:</strong> {playerPosition}</p>
                    <p><strong>Country:</strong> {playerData.country}</p>
                    <p><strong>Previous Teams:</strong> {playerData.previousTeams.join(', ')}</p>
                    <p><strong>Achievements:</strong> {playerData.achievements.join(', ')}</p>
                    <p><strong>Background:</strong> {playerData.background}</p>
                </div>
            )}
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
