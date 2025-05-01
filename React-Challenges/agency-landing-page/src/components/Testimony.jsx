import React from "react";
import Client from "./Client.jsx";

function Testimony() {
  return (
    <>
      <div className="min-h-screen flex items-center py-20">
          <div className="text-center min-h-96">
              <h3 className="text-center text-xl uppercase tracking-[5px] font-bold text-Dark-grayish-blue">Client
                  Testimonials</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-10 max-w-[80%] mx-auto">
                  <Client clientImg="/images/image-emily.jpg" position="Marketing Director" name="Emily R." testimony=" We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."/>
                  <Client clientImg="/images/image-thomas.jpg" position="  Chief Operating Officer" name="Thomas S." testimony="   Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
"/>
                  <Client clientImg="/images/image-jennie.jpg" position="Business Owner" testimony="  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!" name="Jennie F."/>
              </div>
          </div>

      </div>
    </>
  );
}

export default Testimony;
