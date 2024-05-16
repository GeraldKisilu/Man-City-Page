import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes instead of Switch
import FirstPage from './Components/FirstPage'; // Adjust path accordingly
import Cards from './Components/Cards'; // Adjust path accordingly

function App() {
    return (
        <Router>
            <Routes> 
                <Route exact path="/" element={<FirstPage />} /> 
                <Route path="/cards" element={<Cards />} /> 
            </Routes> 
        </Router>
    );
}

export default App;
