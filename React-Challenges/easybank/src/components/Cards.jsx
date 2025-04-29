import React from 'react'
import {services} from "../dummyData.js";
import Card from "./Card.jsx";



const Cards = () => {

    return (
        <>
            {
                services.map((service, index) => {
                    return (
                    <React.Fragment key={index} >
                        <Card service={service}/>
                    </React.Fragment>
                )
            })
            }
        </>
    )
}
export default Cards
