import {useState} from "react";


function SelectedImage() {
    const images = [
        {
            bigImage: "/images/image-product-1.jpg",
            smallImage: "/images/image-product-1-thumbnail.jpg"
        },
        {
            bigImage: "/images/image-product-2.jpg",
            smallImage: "/images/image-product-2-thumbnail.jpg"
        },
        {
            bigImage: "/images/image-product-3.jpg",
            smallImage: "/images/image-product-3-thumbnail.jpg"
        },
        {
            bigImage: "/images/image-product-4.jpg",
            smallImage: "/images/image-product-4-thumbnail.jpg"
        }
    ]

    const [selectedImage, setSelectImage] = useState(images[0].bigImage);

    const handleClick  = (image) =>  {
        setSelectImage(image)
    }

    return (
        <>
            <p className="before:content-['Hello_World'] ...">

            </p>
            <img className="rounded-lg" src={selectedImage} alt=""/>
            <div className="gap-8 mt-8 grid grid-cols-4">
                {

                    images.map((image, index) => (
                        <img
                            className=" inline-block  relative  before:content-['Hello_World']  before:block before:bg-pink-500 rounded-lg w-auto border-orange "
                            onClick={() => handleClick(image.bigImage)} key={index} src={image.smallImage}
                            alt="thumbnail"/>
                    ))
                }
            </div>
        </>
    )
}

export default SelectedImage
