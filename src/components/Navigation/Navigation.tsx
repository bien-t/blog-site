import React from "react";
import { Link } from "gatsby";
import { Transition } from 'react-transition-group';

const Navigation = () => {
    const [toggleNav, setToggleNav] = React.useState(false);
    const toggleNavigation = () => {
        setToggleNav(!toggleNav)
    }

    const nodeRef = React.useRef(null);
    const defaultStyle = {
        transition: `max-height 0.8s linear`,
        maxHeight: 0,
    }
    const transitionStyles = {
        entering: { maxHeight: 170, marginBottom: 20 },
        entered: { maxHeight: 170, marginBottom: 20 },
        exiting: { maxHeight: 0, marginBottom: 0 },
        exited: { maxHeight: 0, marginBottom: 0 },
        unmounted: { maxHeight: 0, marginBottom: 0 }

    };
    return (
        <nav className="flex flex-wrap text-[#080C50] md:flex-nowrap pt-5 md:mb-5 md:items-center ">
            <Link to="/" className="font-bold uppercase  text-3xl pl-5 md:pl-10">PageName</Link>
            <button className="w-10 h-10 border border-black ml-auto rounded-md mb-5 mr-5 md:hidden" onClick={toggleNavigation}>...</button>
            <Transition nodeRef={nodeRef} in={toggleNav} timeout={800}>
                {state => (
                    <ul className="uppercase w-full text-center text-xl font-bold flex flex-col gap-y-2 md:flex-row md:justify-end md:ml-auto md:gap-y-0 md:items-center md:w-[40%]   md:pr-10 " ref={nodeRef} style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        <li><Link to="/" className="md:mr-5">Home</Link></li>
                        <li><Link to="/about" className="md:mr-5">About</Link></li>
                        <li><Link to="/blog" className="md:mr-5">Blog</Link></li>
                        <li><Link to="/contact" >Contact Us</Link></li>
                    </ul>
                )
                }
            </Transition>
        </nav>
    )
}

export default Navigation