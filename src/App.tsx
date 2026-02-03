import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ValentinePage from './pages/ValentinePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<ValentinePage />} />
      </Routes>
    </Router>
  );
}

export default App;
