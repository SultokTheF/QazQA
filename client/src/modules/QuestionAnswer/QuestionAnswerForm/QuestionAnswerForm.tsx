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
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ minWidth: '300px', maxWidth: '500px' }}>
        <h2 className="text-center mb-4">Question Answer Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="context" className="form-label">Context:</label>
            <textarea
              className="form-control"
              id="context"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Enter context"
              rows={5} // Set the number of rows to make it larger
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
          <div className="mb-3">
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </div>
        </form>
        {error && <p className="text-danger mt-3">{error}</p>}
        {answer && <p className="mt-3">Answer: {answer}</p>}
      </div>
    </div>
  );
};

export default QuestionAnswerForm;
