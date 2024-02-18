import React, { useState } from 'react';
import QAServices from '../../../api/qaServices';
import { QuestionAnswer } from '../../../models/questionAnswer';

const QuestionAnswerForm: React.FC = () => {
  const [context, setContext] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await QAServices.qaResponse({ context, question } as QuestionAnswer);
      setAnswer(response);
      setError('');
    } catch (error) {
      setError('Failed to get answer. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h2>Question Answer Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="context" className="form-label">Context:</label>
          <input
            type="text"
            className="form-control"
            id="context"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Enter context"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="question" className="form-label">Question:</label>
          <input
            type="text"
            className="form-control"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter question"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {answer && <p>Answer: {answer}</p>}
    </div>
  );
};

export default QuestionAnswerForm;
