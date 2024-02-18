import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar/Navbar';

import QuestionAnswerFormPage from './pages/QuestionAnswerFormPage';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/QAForm" element={ <QuestionAnswerFormPage /> } />
      </Routes>
    </>
  );
};

export default App;