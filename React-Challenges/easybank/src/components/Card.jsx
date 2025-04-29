import React from 'react'
import Content from "./Content.jsx";

const Card = ({service}) => {
    const {img, title, description} = service;
    return (
        <>
            <div>
                <img className="mb-8" src={img} alt="logo"/>
                <Content title={title} description={description}/>
            </div>
        </>
    )
}
export default Card
