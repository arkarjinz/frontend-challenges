import React from "react";

function ChatImage({img}) {
  return (
    <img
      src={img}
      alt="dog"
      className="w-12 h-12 rounded-lg object-cover"
    />
  );
}

export default ChatImage;
