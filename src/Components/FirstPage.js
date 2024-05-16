import React from 'react';
import { Link } from 'react-router-dom'; // Import Link instead of useHistory
import './FirstPage.css';
import Background from "../Components/Assets/Background.jpg";

function FirstPage() {
    const backgroundImageStyle = {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
    };

    return (
        <div className='first-page' style={backgroundImageStyle}>
            {/* Use Link to navigate to the Cards component */}
            <Link to="/cards" id='content-Button'>
                Get Started
            </Link>
        </div>
    );
}

export default FirstPage;
