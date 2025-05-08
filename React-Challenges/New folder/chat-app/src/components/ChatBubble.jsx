import React from "react";

const ChatBubble = ({ text, bgColor, textColor }) => {
  return (
    <div
      className={`  ${bgColor} ${textColor} rounded-xl px-4 py-2 shadow-sm max-w-[60%] `}
    >
      <h6 className="text-[12px]">{text}</h6>
    </div>
  );
};

export default ChatBubble;
