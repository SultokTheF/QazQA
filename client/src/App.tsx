import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar/Navbar';

import MainPage from './pages/MainPage';
import ChatPage from './pages/ChatPage';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/chat' element={<ChatPage />} />
      </Routes>
    </>
  );
};

export default App;