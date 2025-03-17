import { Link } from 'react-router';
import logo from './logo.svg'
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faXmark } from '@fortawesome/free-solid-svg-icons'


const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggelMenu = () => {
        setIsOpen(prevState => !prevState);
    }


    return (
        <>
            <nav className="w-full h-[10vh] bg-[#11131d] flex justify-between items-center px-[3rem] relative">
                {/* logo */}
                <div id="logo" className='flex items-center'>
                    <Link to={"/"}>
                    <img className="h-10 logo" src={logo} alt="Logo" />
                    </Link>
                </div>

                {/* res togelbtn */}
                <div className=" hamburger" onClick={toggelMenu}></div>

                {/* navlinks */}
                <div id="right" className={`flex gap-[4rem] items-center ${isOpen ? 'open' : ''}`}>
                    <div id="links" className='text-[1.1rem]'>
                        <Link to={"/"} className="text-[#fafafa] hover:underline duration-200 l-res">Home</Link>
                        <Link to={"/SystemGuide"} className="text-[#fafafa] mx-[2rem] hover:underline duration-200 l-res">SystemGuide</Link>
                        <Link to={"/Plane"} className="text-[#fafafa] hover:underline duration-200 l-res">Plane</Link>
                    </div>

                    <div id="navBtn">
                        <Link to={"/Contact"}>
                            <button className='text-[#fafafa] bg-[#7D29ff] px-6  py-3 rounded-4xl text-[1.1rem] hover:scale-[.98] duration-300 cursor-pointer'>
                                Join The Club
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav;