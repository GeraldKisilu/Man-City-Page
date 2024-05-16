import React from 'react';
import Cards from './Cards';

function Players() {
    const players = [
        {
            "name": "Ederson",
            "shirtNumber": 1,
            "position": "Goalkeeper",
            "age": 28,
            "country": "Brazil"
        },
        {
            "name": "Kyle Walker",
            "shirtNumber": 2,
            "position": "Right-back",
            "age": 31,
            "country": "England"
        },
        {
            "name": "Rúben Dias",
            "shirtNumber": 3,
            "position": "Centre-back",
            "age": 24,
            "country": "Portugal"
        },
        {
            "name": "John Stones",
            "shirtNumber": 5,
            "position": "Centre-back",
            "age": 27,
            "country": "England"
        },
        {
            "name": "Rodri",
            "shirtNumber": 16,
            "position": "Defensive midfielder",
            "age": 25,
            "country": "Spain"
        },
        {
            "name": "Kevin De Bruyne",
            "shirtNumber": 17,
            "position": "Midfielder",
            "age": 30,
            "country": "Belgium"
        },
        {
            "name": "Phil Foden",
            "shirtNumber": 47,
            "position": "Forward",
            "age": 21,
            "country": "England"
        },
        {
            "name": "Jack Grealish",
            "shirtNumber": 10,
            "position": "Midfielder",
            "age": 26,
            "country": "England"
        },
        {
            "name": "Jeremy Doku",
            "shirtNumber": 11,
            "position": "Forward",
            "age": 19,
            "country": "Belgium"
        },
        {
            "name": "Erling Haaland",
            "shirtNumber": 18,
            "position": "Forward",
            "age": 20,
            "country": "Norway"
        },
        {
            "name": "Mateo Kovacic",
            "shirtNumber": 19,
            "position": "Midfielder",
            "age": 27,
            "country": "Croatia"
        },
        {
            "name": "Manuel Akanji",
            "shirtNumber": 22,
            "position": "Centre-back",
            "age": 26,
            "country": "Switzerland"
        },
        {
            "name": "Marcos Ortega",
            "shirtNumber": 23,
            "position": "Goalkeeper",
            "age": 25,
            "country": "Spain"
        },
        {
            "name": "Rico Lewis",
            "shirtNumber": 26,
            "position": "Forward",
            "age": 22,
            "country": "England"
        },
        {
            "name": "Guardiol",
            "shirtNumber": 9,
            "position": "Forward",
            "age": 32,
            "country": "Argentina"
        }
    ];

    return (
        <div>
            <Cards players={players} />
        </div>
    );
}

export default Players;
