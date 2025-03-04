import React from 'react'
import Button from "./Button.jsx";

const Hero = () => {
    return (
        <>
            <div className="w-screen bg-amber-300 relative flex">
                <div className="flex items-center mx-auto h-[85vh] w-6xl">
                    <div className="w-2xl">
                        <h1 className="text-6xl text-dark-blue leading-16">
                            Next generation digital banking
                        </h1>
                        <p className="text-xl text-grayish-blue mt-6 mb-8 leading-8">
                            Take your financial life online. Your Easybank account will be a one-stop-shop
                            for spending, saving, budgeting, investing, and much more.
                        </p>
                        <Button text="request invite"/>
                    </div>


                </div>
                <div className="relative w-5xl self-end ">
                    <img className="absolute   bottom-[-10%]" src="/images/bg-intro-desktop.svg" alt="intro"/>
                    <img className="absolute translate-x-56 bottom-[-200px]" src="/images/image-mockups.png"
                         alt="mockup"/>
                </div>
            </div>
        </>
    )
}
export default Hero
