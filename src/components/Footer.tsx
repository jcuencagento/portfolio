"use client";

import {useState, useEffect} from "react";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {BiCodeAlt} from "react-icons/bi";

import Contact from "./Contact";

function Footer() {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        setMobile(window.innerWidth < 620);
    }, []);

    return (
        <div className="fixed bottom-0 m-auto mb-6 mt-6 flex w-4/5 justify-between text-gray-500 lg:mb-12 lg:w-1/2">
            <div className="flex flex-row items-center space-x-1">
                <p style={mobile ? {fontSize: "0.65em"} : {}}>Javier Cuenca Gento</p>
                <div className="flex gap-1 lg:gap-2">
                    <p style={mobile ? {fontSize: "0.65em"} : {}}>© {new Date().getFullYear()}</p>
                </div>
            </div>
            <div className="flex gap-2 lg:gap-6">
                <Contact />
                <a aria-label="Open code" href="https://github.com/jcuencagento/portfolio" rel="noreferrer" target="_blank">
                    <BiCodeAlt className="transition-colors duration-100 hover:text-primary" size={22} />
                </a>
                <a aria-label="GitHub" href="https://github.com/jcuencagento" rel="noreferrer" target="_blank">
                    <BsGithub className="transition-colors duration-100 hover:text-primary" size={20} />
                </a>
                <a aria-label="Linkedin" href="https://www.linkedin.com/in/javiercuencagento/" rel="noreferrer" target="_blank">
                    <BsLinkedin className="transition-colors duration-100 hover:text-primary" size={20} />
                </a>
            </div>
        </div>
    );
}

export default Footer;
