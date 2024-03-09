import React from "react";
import { Chat } from "../modules/Chat";

const ChatPage: React.FC = () => {
  return (
    <>
      <div className="chat">
        <Chat />
      </div>
    </>
  );
}

export default ChatPage;