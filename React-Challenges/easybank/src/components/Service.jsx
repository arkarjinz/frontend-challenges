import React from 'react'
import Content from "./Content.jsx";
import Cards from "./Cards.jsx";

const Service = () => {
    return (
        <>
            <div className="w-screen bg-light-grayish-blue">
                <div className="max-w-6xl mx-auto py-28">
                    <div className="max-w-2xl">
                        <Content customStyles="text-3xl" title="Why choose Easybank?" description="We leverage Open Banking to turn your bank account into your financial hub. Control
  your finances like never before."/>
                    </div>
                    <div className="grid grid-cols-4 gap-5 mt-16">
                        <Cards/>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Service
