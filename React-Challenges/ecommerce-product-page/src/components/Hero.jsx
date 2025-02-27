import SelectedImage from "./SelectedImage.jsx";
import ProductDetail from "./ProductDetail.jsx";

const Hero = () => {
    return (
        <div className="grid grid-cols-2 gap-10 w-5xl mx-auto my-28 ">
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
