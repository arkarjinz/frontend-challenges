import React from 'react'
import {Background} from "./Background.jsx";
import {ChevronLeft, ChevronRight, EllipsisVertical} from "lucide-react";

export const HeroSection = () => {
    return (
        <>
            <div className="min-h-screen">
                <Background customClass="bg-gradient-to-t from-Light-Violet to-Light-Magenta min-h-[85vh] w-[30%] rounded-b-full -translate-x-26 absolute"/>
                <div className="grid grid-cols-2 place-items-center min-h-screen relative z-10">
                    <div className="outline-[12px] outline-white bg-Light-Grayish-Violet max-w-[47%] rounded-2xl max-h-[90vh] shadow-2xl   ">
                        <div className="bg-gradient-to-r from-Light-Violet to-Light-Magenta min-h-16 overflow-hidden  rounded-t-3xl rounded-b-lg relative">
                            <div className="absolute bg-white w-[55%] h-9 rounded-full inset-0 mx-auto -top-3 ">

                            </div>
                            <div className="flex gap-3 items-center justify-between py-4 mt-5 px-3  ">
                                <div className="flex gap-2 items-center">
                                    <ChevronLeft className=" text-white" />
                                    <img src="/images/avatar.jpg" alt="avater" className="rounded-full outline-2 outline-white w-6 h-6"/>
                                    <div >
                                        <h4 className="text-white font-bold text-sm">
                                            Samuel Green

                                        </h4>
                                        <p className="text-Grayish-Blue text-[10px]">
                                            Available to Walk
                                        </p>
                                    </div>
                                </div>

                                <EllipsisVertical className="text-Light-Grayish-Violet "  />
                            </div>
                        </div>
                        {/* Left Chat messages */}
                        <div className="">
                            <div className=" mx-3 my-5 bg-Light-Grayish-Violet rounded-xl px-4 py-2 shadow-sm max-w-[60%] text-Moderate-Violet">
                                <h6 className="text-[12px]">
                                    That sounds great. I'd be happy with that.
                                </h6>
                            </div>
                            <div className="  mx-3 my-5 bg-Light-Grayish-Violet rounded-xl px-4 py-2 shadow-sm max-w-[60%] text-Moderate-Violet">
                                <h6 className="text-[12px]">
                                    Could you send over some pictures of your dog, please?
                                </h6>
                            </div>
                        </div>
                        {/* Right Messages*/}
                        <div className="flex flex-col justify-end ">
                            <div className="flex justify-end gap-2 mx-3">
                                <img src="/images/dog-image-1.jpg" alt="dog"  className="w-16 h-16 rounded-lg object-cover" />
                                <img src="/images/dog-image-2.jpg" alt="dog"  className="w-16 h-16 rounded-lg object-cover" />
                                <img src="/images/dog-image-3.jpg" alt="dog"  className="w-16 h-16 rounded-lg object-cover" />
                            </div>
                            <div className=" self-end mx-3 my-3 bg-White rounded-xl px-4 py-2 shadow-sm max-w-[60%] text-Dark-Grayish-Violet">
                                <h6 className="text-[12px]">
                                    Here are a few pictures. She's a happy girl!
                                </h6>
                            </div>
                            <div className=" self-end mx-3 bg-White rounded-xl px-4 py-2 shadow-sm max-w-[60%] text-Dark-Grayish-Violet">
                                <h6 className="text-[12px]">
                                    Can you make it?
                                </h6>
                            </div>
                        </div>
                        {/* Left Chat messages */}
                        <div className="">
                            <div className=" mx-3 my-5 bg-Light-Grayish-Violet rounded-xl px-2 py-1 shadow-sm max-w-[50%] text-Moderate-Violet">
                                <h6 className="text-[12px]">
                                    She looks so happy! The time we discussed works. How long shall I take her out for?
                                </h6>
                            </div>
                        </div>
                        <div className="px-2 pb-2 mx-1 space-y-3 max-w-[60%]">
                            <div className="flex items-center justify-between bg-gradient-to-r from-Light-Magenta to-Light-Violet  rounded-lg px-4 py-3">
                                <label className="flex items-center gap-3">
                                    <input type="radio" name="duration" className="accent-Light-Violet " />
                                    <span className="text-sm text-Pale-Violet">30 minute walk</span>
                                </label>
                                <span className="font-bold text-White">$29</span>
                            </div>
                            <div className="flex items-center justify-between bg-gradient-to-r from-Light-Magenta to-Light-Violet rounded-lg px-4 py-3">
                                <label className="flex items-center gap-3">
                                    <input type="radio" name="duration" className="accent-Light-Violet" />
                                    <span className="text-sm text-Pale-Violet">1 hour walk</span>
                                </label>
                                <span className="font-bold text-White">$49</span>
                            </div>
                        </div>
                        <div className="bg-White mx-2 my-2 flex justify-between items-center rounded-4xl px-2 py-2">
                              <h6 className="text-[12px] text-Dark-Grayish-Violet mx-4">Type a message..</h6>
                            <div className="rounded-4xl max-w-[10%] bg-Very-Dark-Desaturated-Violet">
                                <ChevronRight className=" text-white" />
                            </div>
                        </div>

                    </div>
                    <div className="w-[60%]">
                        <h1 className="text-4xl font-bold tracking-wide">
                            Simple booking
                        </h1>
                        <p className="leading-8 text-Dark-Grayish-Violet">
                            Stay in touch with our dog walkers through the chat interface. This makes it easy to
                            discuss arrangements and make bookings. Once the walk has been completed you can rate
                            your walker and book again all through the chat.
                        </p>
                    </div>

                </div>


                <Background
                    customClass="bg-Light-Grayish-Violet min-h-[85vh] w-[30%] rounded-t-full absolute right-0 translate-x-16 bottom-0 "/>
            </div>
        </>
    )
}
