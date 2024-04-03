import { useState } from "react";
import "./ChatForm.css";

const ChatForm = ({ onGenerateResponse }) => {
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
    <div className="formDiv">
      <textarea
        rows={10}
        className="formControl"
        placeholder="Контекст..."
        value={context}
        onChange={handleContextChange}
      ></textarea>
      <input 
        type="text"
        className="formControl form-question"
        placeholder="Маған сұрақ қойыңыз"
        value={question}
        onChange={handleQuestionChange}
      />
      <br />
      <button
        onClick={handleClick}
        className="formBtn"
      >
        Жауап
      </button>
    </div>
  );
};

export default ChatForm;
