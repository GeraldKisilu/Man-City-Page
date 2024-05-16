import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './Components/FirstPage';
import Cards from './Components/Cards';

function App() {
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/players');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPlayers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FirstPage />} />
        <Route path="/cards" element={<Cards players={players} />} />
      </Routes>
    </Router>
    
  );
}

export default App;
