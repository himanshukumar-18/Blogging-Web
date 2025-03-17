import { Link } from "react-router";
import footerLogo from "../Components/logo.svg";

const Footer = () => {
    return (
        <>
            <footer className="w-full pt-[10rem]">
                <div className="header-foot w-full  border-b-2 border-[#fafafa1d] pb-[2rem]">
                    <div className="footer-img">
                        <Link to={"/"}>
                            <img className="h-10 logo" src={footerLogo} alt="Logo" />
                        </Link>
                    </div>


                </div>

                <div className="bottom-footer w-full pt-10 flex gap-40">
                    <div className="fot-link">
                        <h3 className="text-[2rem] text-[#fafafa]">About</h3>
                        <ul className="text-[#fafafa] text-[1.2rem] pt-3">
                            <li className="pb-2 hover:underline">
                                <Link to={"/SystemGuide"}>Style Guide </Link>
                            </li>

                            <li className="pb-2 hover:underline">
                                <Link to={"https://eihei-dark.fueko.net/features/"}>Features</Link>
                            </li>

                            <li className="pb-2 hover:underline">
                                <Link to={"https://themeforest.net/item/eihei-multipurpose-ghost-blog-theme/52927273"}>Get Theme</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="fot-link">
                        <h3 className="text-[2rem] text-[#fafafa]">Resources</h3>
                        <ul className="text-[#fafafa] text-[1.2rem] pt-3">
                            <li className="pb-2 hover:underline">
                                <Link to={"https://fueko.net/themes/eihei/"}>Demos</Link>
                            </li>

                            <li className="pb-2 hover:underline">
                                <Link to={"https://fueko.net/docs/eihei/"}>Docs</Link>
                            </li>

                            <li className="pb-2 hover:underline">
                                <Link to={"https://fueko.net/showcase/"}>Showcase</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="fot-link">
                        <h3 className="text-[2rem] text-[#fafafa]">Features</h3>
                        <ul className="text-[#fafafa] text-[1.2rem] pt-3">
                            <li className="pb-2 hover:underline">
                                <Link to={"https://eihei-dark.fueko.net/recommendations/"}>Web Picks</Link>
                            </li>

                            <li className="pb-2 hover:underline">
                                <Link to={"https://eihei-dark.fueko.net/authors/"}>Authors</Link>
                            </li>

                            <li className="pb-2 hover:underline">
                                <Link to={"https://eihei-dark.fueko.net/tags/"}>Tags</Link>
                            </li>

                            <li className="pb-2 hover:underline">
                                <Link to={"https://eihei.fueko.net/"}>Light version</Link>
                            </li>

                            <li className="pb-2 hover:underline">
                                <Link to={"/"}>Dark version</Link>
                            </li>

                            <li className="pb-2 hover:underline">
                                <Link to={"https://eihei-dark.fueko.net/404/"}>404</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="fot-link">
                        <h3 className="text-[2rem] text-[#fafafa]">Members</h3>
                        <ul className="text-[#fafafa] text-[1.2rem] pt-3">
                            <li className="pb-2 hover:underline">
                                <Link to={"/Plane"}>Plans</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="fot-link">
                        <h3 className="text-[2rem] text-[#fafafa]">Contact</h3>
                        <ul className="text-[#fafafa] text-[1.2rem] pt-3">
                            <li className="pb-2 hover:underline">
                                <Link to={"/Contact"}>Contact</Link>
                            </li>

                            <li className="pb-2 hover:underline">
                                <Link to={"https://fueko.net/themes/"}>All themes</Link>
                            </li>

                            <li className="pb-2 hover:underline">
                                <Link to={"/"}>fueko.net</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="copy text-[#fafafa] text-[.9rem] py-[2rem]">
                    © 2025 Eihei. Develop By Himanshu Kumar.
                </div>
            </footer>
        </>
    )
}

export default Footer