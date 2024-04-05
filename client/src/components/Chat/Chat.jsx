import { useState } from "react";
import axios from "axios";

import ChatHeader from "./ChatHeader/ChatHeader";
import ChatForm from "./ChatForm/ChatForm";
import ChatResponse from "./ChatResponse/ChatResponse";
import ChatConversations from "./ChatConversations/ChatConversations";

import "./Chat.css";

export default function() {
  const [context, setContext] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateResponse = async (context, question) => {
    try {
      setLoading(true);
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
      setLoading(false);
    }
  };

  return (
    <>
      {/* <div className="chat">
        <div className="row">
          <div className="col-4">
            <ChatConversations />
          </div>
          <div className="col-8">
            <ChatHeader />
            <ChatForm onGenerateResponse={handleGenerateResponse} />
            <ChatResponse context={context} question={question} answer={answer} loading={loading} />
          </div>
        </div>
      </div> */}
      <div className="chat">
        <ChatHeader />
        <ChatForm onGenerateResponse={handleGenerateResponse} />
        <ChatResponse context={context} question={question} answer={answer} loading={loading} />
      </div>
    </>
  );
}