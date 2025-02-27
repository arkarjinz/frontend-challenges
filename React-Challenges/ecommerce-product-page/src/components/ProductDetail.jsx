import React from 'react'

const ProductDetail = () => {
    return (
        <>
            <h6 className="uppercase text-dark-grayish-blue font-bold">
                Sneaker Company
            </h6>
            <h1 className="text-very-dark-blue font-bold text-5xl mt-3">
                Fall Limited Edition Sneakers
            </h1>
            <p className="text-dark-grayish-blue mt-8 mb-4 ">
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
         <div className="flex items-center gap-3">
             <h4 className="text-very-dark-blue font-bold text-3xl">
                 $125.00
             </h4>
             <p className="bg-very-dark-blue text-white inline px-1.5 rounded-sm text-sm">
                 50%
             </p>
         </div>
            <p className="text-dark-grayish-blue line-through mt-2">
                $250.00
            </p>
            <div className="flex items-center gap-4 mt-7">
                <div className="flex bg-light-grayish-blue items-center py-4 px-4 gap-12 rounded-lg">
                    <img src="/images/icon-minus.svg" alt="minus"/>
                    <p className="font-bold">
                        0
                    </p>
                    <img src="/images/icon-plus.svg" alt="plus"/>
                </div>

                     <a href="#" className="flex bg-orange grow justify-center py-4 rounded-lg items-center gap-3 ">
                         <img className="w-4 h-4 fill-very-dark-blue" src="/images/icon-cart.svg" alt="cart"/>
                         <p className="font-bold">
                             Add to cart
                         </p>
                     </a>

            </div>
        </>
    )
}
export default ProductDetail
