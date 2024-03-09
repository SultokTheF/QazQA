// ChatForm.tsx
import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import "./ChatForm.css";

interface ChatFormProps {
  onGenerateResponse: (context: string, question: string) => void;
}

const ChatForm: React.FC<ChatFormProps> = ({ onGenerateResponse }) => {
  const [context, setContext] = useState<string>("");
  const [question, setQuestion] = useState<string>("");

  const handleContextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContext(e.target.value);
  };

  const handleQuestionChange = (e: ChangeEvent<HTMLInputElement>) => {
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
