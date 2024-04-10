import "./ChatResponse.css";

export default function ChatResponse({ question, answer }) {
  return (
    <>
      {answer && (
        <div className="chat-response">
          <div className="response-div">
            <hr className="hr-line" />
            <div className="response-container">
              <div className="response-section" key={1}>
                <p className="response-question">{question}</p>
                <p className="response-answer">{answer}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
