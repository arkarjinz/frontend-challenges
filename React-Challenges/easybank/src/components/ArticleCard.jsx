import React from 'react'
import Content from "./Content.jsx";

const ArticleCard = ({article}) => {

    const {
        img,authorName,title,description
    } = article;

    return (
        <>
            <div className="rounded-sm overflow-hidden ">
                <img className=" h-48 w-full" src={img} alt="photo"/>
                <div className="bg-white px-6 pt-6 pb-1">
                    <small className="text-grayish-blue  pb-5 text-sm">{authorName}</small>
                    <Content title={title} description={description} customStyles="text-md leading-[1.2]" customParaStyles="text-[16px] leading-[1.3]"/>
                </div>
            </div>

        </>
    )
}
export default ArticleCard

