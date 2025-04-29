import React from "react";
import Client from "./Client.jsx";

function Testimony() {
  return (
    <>
      <div>
        <h4 className="text-center">Client Testimonials</h4>
        <div className="grid grid-cols-1 grid-cols-3">
          <Client />
          <Client />
          <Client />
        </div>
      </div>
    </>
  );
}

export default Testimony;
