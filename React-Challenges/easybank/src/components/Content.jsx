import React from 'react'

const Content = ({title,description, customStyles, customParaStyles}) => {
    return (
        <>
       <h3 className= {`text-dark-blue ${customStyles}`}>
           {title}
       </h3>
            <p className={`text-grayish-blue mt-3 mb-8 leading-7 ${customParaStyles}`}>
                {description}
            </p>
        </>
    )
}
export default Content
