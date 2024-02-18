import React from 'react';
import { Routes, Route } from 'react-router-dom';

import QuestionAnswerFormPage from './pages/QuestionAnswerFormPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/QAForm" element={ <QuestionAnswerFormPage /> } />
    </Routes>
  );
};

export default App;