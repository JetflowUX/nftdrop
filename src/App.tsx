import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MintDetailPage } from './pages/MintDetailPage';
import { SubmitPage } from './pages/SubmitPage';
import { WatchlistPage } from './pages/WatchlistPage';
import { CalendarPage } from './pages/CalendarPage';
import { CommunityPage } from './pages/CommunityPage';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mint/:id" element={<MintDetailPage />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </Router>);
}