import React from 'react';
import './App.css'; // Import your global styles
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="App">
      <h1>User Profiles</h1>
      <ProfileCard />
    </div>
  );
}

export default App;
