import React, {useState} from 'react'

export default function HeroSection() {

    let [clicked, setClicked] = useState(false)



    return (
        <>
            <section className="bg-[url(/images/mobile/image-header.jpg)] md:bg-[url(/images/desktop/image-header.jpg)] bg-contain bg-center min-h-[80vh] lg:min-h-screen ">
                <nav className="flex justify-between px-10 py-7 font-barlow">
                    <div>
                        <img src="/images/logo.svg" alt="logo"/>
                    </div>

                    <button onClick={() => setClicked(!clicked)}>
                        <img src="/images/icon-hamburger.svg" alt="menu" className="md:hidden"
                             />
                    </button>

                    <div className="gap-10 items-center hidden  md:flex lg:visible ">
                    <ul className="flex gap-10 text-white">
                            <li>About</li>
                            <li>Services</li>
                            <li>Projects</li>
                        </ul>
                        <button className="bg-white py-2 px-4 rounded-full font-fraunces  hover:text-white hover:bg-sky-300 uppercase hover:duration-500 ease-in-out">
                            Contact
                        </button>
                    </div>
                </nav>
                <div className="flex justify-center flex-col items-center relative top-16 lg:top-20">
                    <h1 className="uppercase text-white font-fraunces text-5xl text-center leading-14 lg:text-6xl font-bold tracking-widest mb-6 lg:mb-24 ">
                        We are creatives
                    </h1>
                    <img src="/images/icon-arrow-down.svg" alt="icon"/>
                </div>

                {
                    clicked &&
                    <div>
                        <div className="absolute top-20 left-0 w-full bg-Very-dark-desaturated-blue mx-auto md:hidden ">
                            <div className="flex flex-col items-center py-6 s text-white font-barlow font-bold">
                                <ul className="flex flex-col gap-6 text-lg">
                                    <li>About</li>
                                    <li>Services</li>
                                    <li>Projects</li>
                                </ul>
                                <button
                                    className="bg-white py-2 px-4 rounded-full font-fraunces text-Dark-desaturated-cyan uppercase hover:duration-500 ease-in-out">
                                    Contact
                                </button>
                            </div>
                        </div>
                    </div>
                }

            </section>
        </>
    )
}
