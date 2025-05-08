import React from "react";
import { Background } from "./Background.jsx";
import { ChevronLeft, ChevronRight, EllipsisVertical } from "lucide-react";
import ChatBubble from "./ChatBubble.jsx";
import Option from "./Option.jsx";
import ChatImage from "./ChatImage.jsx";

export const HeroSection = () => {
  return (
    <>
      <div className="min-h-screen">
        <Background customClass="bg-gradient-to-t from-Light-Violet to-Light-Magenta min-h-[85vh] w-[30%] rounded-b-full -translate-x-26 absolute" />
        <div className="grid grid-cols-2 place-items-center min-h-screen relative z-10">
          <div className="outline-[12px] outline-white bg-Light-Grayish-Violet max-w-[47%] rounded-2xl min-h-[90vh] shadow-2xl   ">
            <div className="bg-gradient-to-r from-Light-Violet to-Light-Magenta min-h-16 overflow-hidden  rounded-t-3xl rounded-b-lg relative">
              <div className="absolute bg-white w-[55%] h-9 rounded-full inset-0 mx-auto -top-3 "></div>
              <div className="flex gap-3 items-center justify-between py-4 mt-5 px-3  ">
                <div className="flex gap-2 items-center">
                  <ChevronLeft className=" text-white" />
                  <img
                    src="/images/avatar.jpg"
                    alt="avater"
                    className="rounded-full outline-2 outline-white w-6 h-6"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm">
                      Samuel Green
                    </h4>
                    <p className="text-Grayish-Blue text-[10px]">
                      Available to Walk
                    </p>
                  </div>
                </div>

                <EllipsisVertical className="text-Light-Grayish-Violet " />
              </div>
            </div>
            {/* Left Chat messages */}
            <div className="">
              <ChatBubble
                bgColor="bg-Light-Grayish-Violet"
                textColor="text-Moderate-Violet"
                text="That sounds great. I'd be happy with that."
              />
              <ChatBubble
                bgColor="bg-Light-Grayish-Violet"
                textColor="text-Moderate-Violet"
                text=" Could you send over some pictures of your dog, please?"
              />
            </div>
            {/* Right Messages*/}

            <div className="">
              <div className="flex justify-end gap-2 mx-3">
               <ChatImage img="/images/dog-image-1.jpg" />
               <ChatImage img="/images/dog-image-2.jpg" />
               <ChatImage img="/images/dog-image-3.jpg" />

              </div>
              <div className="flex flex-col items-end">
                <ChatBubble
                  bgColor="bg-White"
                  textColor="text-Dark-Grayish-Violet"
                  text=" Here are a few pictures. She's a happy girl!"
                />
                <ChatBubble
                  bgColor="bg-White"
                  textColor="text-Dark-Grayish-Violet"
                  text="Can you make it?"
                />
              </div>
            </div>
            {/* Left Chat messages */}
            <div className="">
              <ChatBubble
                bgColor="bg-Light-Grayish-Violet"
                textColor="text-Moderate-Violet"
                text=" She looks so happy! The time we discussed works. How long
                  shall I take her out for?"
              />
            </div>
            <div className="px-2 pb-2 mx-1 space-y-3 w-[80%]">
              <Option text="30 minute walk" price="$29" />
              <Option text="1 hour walk" price="$49" />
            </div>
            <div className="bg-White mx-2 my-2 flex justify-between items-center rounded-4xl px-2 py-2">
              <h6 className="text-[12px] text-Dark-Grayish-Violet mx-4">
                Type a message..
              </h6>
              <div className="rounded-4xl max-w-[10%] bg-Very-Dark-Desaturated-Violet">
                <ChevronRight className=" text-white" />
              </div>
            </div>
          </div>
          <div className="w-[60%]">
            <h1 className="text-4xl font-bold tracking-wide">Simple booking</h1>
            <p className="leading-8 text-Dark-Grayish-Violet">
              Stay in touch with our dog walkers through the chat interface.
              This makes it easy to discuss arrangements and make bookings. Once
              the walk has been completed you can rate your walker and book
              again all through the chat.
            </p>
          </div>
        </div>

        <Background customClass="bg-Light-Grayish-Violet min-h-[85vh] w-[30%] rounded-t-full absolute right-0 translate-x-16 bottom-0 " />
      </div>
    </>
  );
};
