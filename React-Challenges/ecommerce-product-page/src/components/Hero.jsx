import SelectedImage from "./SelectedImage.jsx";
import ProductDetail from "./ProductDetail.jsx";

const Hero = () => {
    return (
        <div className="grid grid-cols-2 gap-30 w-5xl mx-auto my-28 place-items-center ">
            <div>
                <SelectedImage/>
            </div>
            <div>
                <ProductDetail/>
            </div>

        </div>
    )
}
export default Hero
