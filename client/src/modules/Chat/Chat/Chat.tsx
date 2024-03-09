// Chat.tsx
import React, { useState } from "react";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatForm from "../ChatForm/ChatForm";
import ChatAnswer from "../ChatAnswer/ChatAnswer";

import axios from "axios";

const Chat: React.FC = () => {
  const [context, setContext] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerateResponse = async (context: string, question: string) => {
    try {
      setLoading(true); // Start loading
      const response = await axios.post(
        "http://localhost:8000/api/v1/answer_question/",
        { context, question }
      );
      setContext(context);
      setQuestion(question);
      setAnswer(response.data.answer);
    } catch (error) {
      console.error("Error fetching answer:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <div className="chat">
        <ChatHeader />
        <ChatForm onGenerateResponse={handleGenerateResponse} />
        <ChatAnswer context={context} question={question} answer={answer} loading={loading} />
      </div>
    </>
  );
}

export default Chat;
