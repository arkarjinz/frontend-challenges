import React from 'react'
import {articles} from "../dummyData.js";
import ArticleCard from "./ArticleCard.jsx";

const ArticleCards = () => {
    return (
        <>

            {
                articles.map((article,index)=> {
                    return(
                        <React.Fragment key={index}>
                            <ArticleCard article={article}/>
                        </React.Fragment>
                    )
                })
            }


        </>
    )
}
export default ArticleCards
