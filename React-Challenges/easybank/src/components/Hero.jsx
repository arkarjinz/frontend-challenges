import React from 'react'
import Button from "./Button.jsx";
import Content from "./Content.jsx";

const Hero = () => {
    return (
        <>
            <div className="w-screen relative flex">
                <div className="flex items-center mx-auto h-[85vh] w-6xl">
                    <div className="w-xl">
                        {/*<h1 className="text-6xl text-dark-blue leading-16">*/}
                        {/*    */}
                        {/*</h1>*/}
                        {/*<p className="text-xl text-grayish-blue mt-6 mb-8 leading-8">*/}

                        {/*</p>*/}
                        <Content customStyles="text-5xl" title="Next generation digital banking" description=" Take your financial life online. Your Easybank account will be a one-stop-shop
                            for spending, saving, budgeting, investing, and much more."/>

                        <Button text="request invite"/>
                    </div>


                </div>
                <div className="absolute top-[-13%] right-[-20%]  w-5xl self-end ">
                    <img className="absolute w-6xl" src="/images/bg-intro-desktop.svg" alt="intro"/>
                    <img className="absolute w-3xl right-[13rem] " src="/images/image-mockups.png"
                         alt="mockup"/>
                </div>
            </div>
        </>
    )
}
export default Hero
