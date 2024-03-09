// ChatAnswer.tsx
import React from 'react';
import "./ChatAnswer.css";

import { Loader } from '../../../components/UI';

interface ChatAnswerProps {
  context: string;
  question: string;
  answer: string;
  loading: boolean;
}

const ChatAnswer: React.FC<ChatAnswerProps> = ({ context, question, answer, loading }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {answer && (
            <div className="answerDiv">
              <div className="answerSubDiv">
                <hr className="hrLine" />
                <div className="answerContainer">
                  <div className="answerSection" key={1}>
                    <p className="question">{question}</p>
                    <p className="answer">{answer}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ChatAnswer;
