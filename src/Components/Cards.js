import React, { useEffect, useRef } from 'react';
import './Cards.css';
import GuardiolImage from './Assets/Guardiol.jpg';
import HaalandImage from './Assets/Haaland.jpg';
import DebruyneImage from './Assets/Debruyne.jpg';
import KovacicImage from './Assets/Kovacic.jpg';
import FodenImage from './Assets/Foden.jpg';
import WalkerImage from './Assets/Walker.jpg';
import EdersonImage from './Assets/Ederson.jpg';
import AkeImage from './Assets/Ake.jpg';
import AlvarezImage from './Assets/Alvarez.jpg';
import BernadoImage from './Assets/Bernado.jpg'; 
import DiasImage from './Assets/Dias.jpg';
import DokuImage from './Assets/Doku.jpg';
import RodriImage from './Assets/Rodri.jpg';
import StonesImage from './Assets/Stones.jpg'; 
import BobbImage from './Assets/Bobb.jpg';
import OrtegaImage from './Assets/Ortega.jpg';
import LewisImage from './Assets/Lewis.jpg';
import NunesImage from './Assets/Nunes.jpg';
import GrealishImage from './Assets/Grealish.jpg';
import AkanjiImage from './Assets/Akanji.jpg';

function Cards({ players }) {
    const cardRefs = useRef([]);

    useEffect(() => {
        cardRefs.current.forEach((cardRef, index) => {
            cardRef.classList.add(`animate-${index}`);
        });
    }, [players]);

    const imageMapping = {
        'Gvardiol': GuardiolImage,
        'Erling Haaland': HaalandImage,
        'Kevin De Bruyne': DebruyneImage,
        'Mateo Kovacic': KovacicImage,
        'Phil Foden': FodenImage,
        'Kyle Walker': WalkerImage,
        'Ederson': EdersonImage,
        'Nathan Aké': AkeImage,
        'Julián Álvarez': AlvarezImage,
        'Bernardo Silva': BernadoImage,
        'Rúben Dias': DiasImage,
        'Jeremy Doku': DokuImage,
        'Rodri': RodriImage,
        'John Stones': StonesImage,
        'Oscar Bobb': BobbImage,
        'Stefan Ortega': OrtegaImage,
        'Rico Lewis': LewisImage,
        'Matheus Nunes': NunesImage,
        'Jack Grealish': GrealishImage,
        'Manuel Akanji': AkanjiImage
    };

    return (
        <div className="deck">
            <div className='header'>
                <h1>
                    <center>The Stars</center>
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
                        src={imageMapping[player.name] || '/default.jpg'} // Fallback to a default image
                        className="card-img-top"
                        alt={player.name}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{player.name}</h5>
                        
                        <button>Rate</button>
                        <p>⭐</p>
                    </div>
                </div>
            ))}
            <button id='nxtButton'>Next</button>
        </div>
    );
}

export default Cards;
