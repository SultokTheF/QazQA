import { useGenerateResponse } from "../../hooks/useGenereateResponse";

import ChatHeader from "./ChatHeader/ChatHeader";
import ChatForm from "./ChatForm/ChatForm";
import ChatResponse from "./ChatResponse/ChatResponse";
import ChatConversations from "./ChatConversations/ChatConversations";

import { Loader } from "../Layouts";

import "./Chat.css";

export default function Chat() {
  const { context, question, answer, loading, error, generateResponse } = useGenerateResponse();

  const handleGenerateResponse = (newContext, newQuestion) => {
    generateResponse(newContext, newQuestion);
  };

  return (
    <>
      <div className="chat">
        {/* <div className="chat-content">
          <div className="chat-sidebar">
            <ChatConversations />
          </div>
          <div className="chat-main">
            <ChatHeader />
            <ChatForm onGenerateResponse={handleGenerateResponse} />
            {loading ? (
              <Loader />
            ) : (
              <ChatResponse
                context={context}
                question={question}
                answer={answer}
                error={error}
              />
            )}
          </div>
        </div> */}
        <ChatHeader />
        <ChatForm onGenerateResponse={handleGenerateResponse} />
        {loading ? (
          <Loader />
        ) : (
          <ChatResponse
            context={context}
            question={question}
            answer={answer}
            error={error}
          />
        )}
      </div>
    </>
  );
}