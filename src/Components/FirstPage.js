import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FirstPage.css';
import Background from "../Components/Assets/Background.jpg";

function FirstPage() {
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcome(false);
        }, 50000); // Set time for the welcome message to disappear (in milliseconds)

        return () => clearTimeout(timer); // Clear the timer when component unmounts
    }, []);

    return (
        <div className='first-page' style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', position: 'relative' }}>

            {/* Use Link to navigate to the Cards component */}
            <Link to="/cards" id='content-Button'>
                Get Started
            </Link>
            <div className="blinking-hand">➺</div>
            {showWelcome && (
                <div className="welcome-container">
                    <h1>Welcome Man City Fans!</h1>
                    <p>
                        Welcome to our football universe! 🎉 Get ready to dive into the world of Manchester City with us.
                        Here, every goal scored is celebrated with as much enthusiasm as a winning lottery ticket! ⚽🥳
                    </p>
                    <p>
                        We promise you a rollercoaster ride of emotions, from the edge-of-your-seat excitement to the
                        heartwarming camaraderie that comes with being part of the City family. 🎢❤️
                    </p>
                    <p>
                        And hey, don't worry about the occasional offside. After all, even the best strikers can sometimes
                        kick the ball into the wrong net! 😜 Let's embrace the highs and lows together,
                        because that's what makes being a City fan so special! 💙
                    </p>
                    <p>
                        So grab your scarf, put on your lucky jersey, and let's embark on this thrilling adventure together.
                        Are you ready? Because the journey begins now! 🚀⚽ #CityTillWeDie #BlueMoonRising
                    </p>
                </div>
            )}
        </div>
    );
}

export default FirstPage;
