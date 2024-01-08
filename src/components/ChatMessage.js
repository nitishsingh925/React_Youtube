import React from "react";

function ChatMessage({ name, message }) {
  return (
    <div className="flex shadow-sm m-2">
      <img
        className="h-6"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user icon"
      />
      <span className="px-4 font-bold text-sm ">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
}

export default ChatMessage;
