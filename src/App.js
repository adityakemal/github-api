import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProfileContainer from './features/profile/ProfileContainer';

import DashboardContainer from './features/dashboard/DashboardContainer';
import DetailRepo from './features/profile/pages/DetailRepo';

function App() {
  console.log = () => { }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<DashboardContainer />} />
          <Route exact path="/profile/:id" element={<ProfileContainer />} />
          <Route exact path="/profile/:id/:repoId" element={<DetailRepo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
