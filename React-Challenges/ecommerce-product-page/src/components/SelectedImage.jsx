import { useState } from "react";

function SelectedImage() {
    const images = [
        {
            id: 1,
            bigImage: "/images/image-product-1.jpg",
            smallImage: "/images/image-product-1-thumbnail.jpg",
        },
        {
            id: 2,
            bigImage: "/images/image-product-2.jpg",
            smallImage: "/images/image-product-2-thumbnail.jpg",
        },
        {
            id: 3,
            bigImage: "/images/image-product-3.jpg",
            smallImage: "/images/image-product-3-thumbnail.jpg",
        },
        {
            id: 4,
            bigImage: "/images/image-product-4.jpg",
            smallImage: "/images/image-product-4-thumbnail.jpg",
        },
    ];

    const [selectedImageId, setSelectedImageId] = useState(images[0].id);


    const handleClick = (id) => {
        setSelectedImageId(id);
    };

    const currentImage = images.find((img) => img.id === selectedImageId);

    return (
        <><img
                className="rounded-lg"
                src={currentImage.bigImage}
                alt="selected product"
            />
            <div className="gap-8 mt-8 grid grid-cols-4">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className={`relative ${
                            image.id === selectedImageId
                                ? "before:content-[''] before:w-full before:h-full before:bg-amber-50/70 before:border-2 before:border-orange-700 before:rounded-lg before:absolute before:top-0 before:z-10"
                                : ""
                        }`}
                    >
                        <img
                            className="rounded-lg w-auto"
                            onClick={() => handleClick(image.id)}
                            src={image.smallImage}
                            alt="thumbnail"
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default SelectedImage;
