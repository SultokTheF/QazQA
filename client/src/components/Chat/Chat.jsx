import ChatHeader from "./ChatHeader/ChatHeader";
import ChatForm from "./ChatForm/ChatForm";
import ChatResponse from "./ChatResponse/ChatResponse";

export default function() {
  return (
    <>
      <div className="chat">
        <ChatHeader />
        <ChatForm />
        <ChatResponse />
      </div>
    </>
  );
}