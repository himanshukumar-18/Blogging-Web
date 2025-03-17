import { Link } from "react-router"
import logo from './logo.svg'


const Contact = () => {
    return (
        <>
            <div className="contact-container w-full bg-[#11131d] flex">
                <div className="c-img w-[50vh] h-[90vh]">
                    <img className="h-[100%] w-[100%] object-center object-cover" src="https://eihei-dark.fueko.net/content/images/size/w1200/format/webp/2023/11/harrison-chang-_E3qUAiLKHU-unsplash.jpg" alt="" />
                </div>

                <div className="contact m-30">
                    <div className="c-logo">
                        <Link>
                            <img className="h-8 object-cover" src={logo} alt="" />
                        </Link>
                    </div>

                    <div className="c-header mt-50">
                        <h2 className="text-[#fafafa] text-[3rem] font-bold">Create Account</h2>

                        <div className="inputs flex flex-col">
                            <input type="text" placeholder="Your Name" className=" bg-[#1c2028] text-[#fafafa] placeholder:text-[#fafafa] w-[500px] rounded-4xl p-4 mt-5 outline-0 inputs-res" />

                            <input type="text" placeholder="Your Email Address" className="bg-[#1c2028] text-[#fafafa] placeholder:text-[#fafafa] w-[500px] rounded-4xl p-4 mt-5 outline-0 inputs-res" />
                        </div>

                        <div className="check flex gap-2 mt-2">
                            <input className="text-[#fafafa]" type="checkbox" />
                            <p className="text-[#fafafa] text-[.9rem] check-p">
                                You have read and agreed to the
                                <Link target="blank" to={"https://fueko.net/privacy/"} className="ml-1.5 underline">Privacy Policy</Link>
                            </p>
                        </div>

                        <div className="c-btn mt-10">
                            <button className="text-[1.4rem] text-[#fafafa] bg-[#7D29ff] rounded-4xl px-10 py-2">
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact