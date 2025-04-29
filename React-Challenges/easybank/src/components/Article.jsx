import React from 'react'
import ArticleCards from "./ArticleCards.jsx";

const Article = () => {
    return (
        <>
            <div className="w-screen bg-very-light-gray">
                <div className="max-w-6xl mx-auto py-28">
                    <h3>
                        Latest Articles
                    </h3>
                    <div className="grid grid-cols-4 gap-5 mt-16 ">
                        <ArticleCards/>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Article
