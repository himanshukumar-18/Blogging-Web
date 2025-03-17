import { Link } from "react-router"

const ProductCard = () => {
    return (
        <>
            <div className="product-c w-130 border-2 border-[#7f7f7f24] p-5 rounded-3xl">
                <div className="p-img h-[50%] rounded-3xl overflow-hidden">
                    <img className="w-[100%] h-[100%] object-cover" src="https://eihei-dark.fueko.net/content/images/2024/06/GALkJR1XwAAZ-C2.jpeg" alt="" />
                </div>
                <div className="p-dec">
                    <h2 className="text-[#fafafa] text-[1.5rem] mt-2">Myoan</h2>

                    <p className="text-[#fafafa] text-[1.1rem]">Explore the versatility of Myoan, a Ghost theme that provides diverse layouts, a full spectrum of colors, and a variety of fonts, enabling you to craft a truly unique digital publication for your exceptional stories.</p>

                    <button className="w-full bg-[#7D29ff] mt-5 rounded-3xl py-3 text-[#fafafa] text-[1.1rem]">
                        <Link to={"https://fueko.net/themes/myoan/"}>
                            Get Theme
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductCard