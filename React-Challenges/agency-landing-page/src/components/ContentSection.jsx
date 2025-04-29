import React from 'react'
import Content from "./Content.jsx";
import ContentWithText from "./ContentWithText.jsx";

function ContentSection() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <Content title="Transform your brand" description="We are a full-service creative agency specializing in helping brands grow fast.
                        Engage your clients through compelling visuals that do most of the marketing for you."/>
                <img src="/images/desktop/image-transform.jpg" alt="egg" className="w-screen order-1 md:order-2"/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <img src="/images/desktop/image-stand-out.jpg" alt="stand" className="w-screen"/>
                <Content title=" Stand out to the right audience"
                         description="  Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <ContentWithText imgUrl="/images/desktop/image-graphic-design.jpg" title="Graphic Design"
                                 description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."/>
                <ContentWithText imgUrl="/images/desktop/image-photography.jpg" title="Photography" description="  Increase your credibility by getting the most stunning, high-quality photos that improve your business image."/>
            </div>
        </>
    )
}

export default ContentSection
