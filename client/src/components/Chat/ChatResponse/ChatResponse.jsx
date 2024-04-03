import React from 'react';
import "./ChatResponse.css";

const ChatResponse = ({ question, answer, loading = false }) => {
  return (
    <>
      {loading ? (
        <div>Loading...</div>
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

export default ChatResponse;
