import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGenerateResponse = () => {
  const [context, setContext] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateResponse = async (newContext, newQuestion) => {
    try {
      setLoading(true);
      setError(null); // Clear any previous errors

      const response = await axios.post(
        "http://localhost:8000/api/v1/answer_question/",
        { context: newContext, question: newQuestion }
      );

      setContext(response.data.context);
      setQuestion(newQuestion);
      setAnswer(response.data.answer);
    } catch (error) {
      console.error("Error fetching answer:", error);
      setError(error); // Store the error for handling
    } finally {
      setLoading(false);
    }
  };

  return { context, question, answer, loading, error, generateResponse };
};
