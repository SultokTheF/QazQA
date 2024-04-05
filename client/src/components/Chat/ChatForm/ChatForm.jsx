import { useState } from "react";
import "./ChatForm.css";

export default function({ onGenerateResponse }) {
  const [context, setContext] = useState("");
  const [question, setQuestion] = useState("");

  const handleContextChange = (e) => {
    setContext(e.target.value);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleClick = () => {
    onGenerateResponse(context, question);
  };

  return (
    <div className="chat-form">
      <textarea
        rows={10}
        className="form-input"
        placeholder="Контекст..."
        value={context}
        onChange={handleContextChange}
      ></textarea>
      <input 
        type="text"
        className="form-input form-question"
        placeholder="Маған сұрақ қойыңыз"
        value={question}
        onChange={handleQuestionChange}
      />
      <br />
      <button
        onClick={handleClick}
        className="form-button"
      >
        Жауап
      </button>
    </div>
  );
};
