import {BsGithub, BsLinkedin} from "react-icons/bs";
import {BiCodeAlt} from "react-icons/bi";

import Contact from "./Contact";

function Footer() {
    return (
        <div className="mb-2 mt-6 flex flex-col lg:mb-4">
            <hr className="mb-4 w-full border-t border-primary/60" />
            <div className="relative bottom-0 m-auto  flex w-4/5 justify-between lg:w-1/2">
                <div className="flex flex-row items-center space-x-1 text-primary">
                    <p className="text-xs font-semibold lg:text-lg">Javier Cuenca Gento</p>
                    <p className="font-extralight"> - </p>
                    <div className="flex gap-1 lg:gap-2">
                        <p className="text-base text-xs font-bold lg:text-lg">
                            {" " + new Date().getFullYear() + " "}
                            <span className="wave transform-gpu">🛰️ </span>
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 lg:gap-6">
                    <Contact />
                    <a aria-label="Open code" href="https://github.com/jcuencagento/portfolio" rel="noreferrer" target="_blank">
                        <BiCodeAlt
                            className="text-primary/60 transition-colors duration-100 hover:scale-110 hover:text-primary"
                            size={22}
                        />
                    </a>
                    <a aria-label="GitHub" href="https://github.com/jcuencagento" rel="noreferrer" target="_blank">
                        <BsGithub className="text-primary/60 transition-colors duration-100 hover:scale-110 hover:text-primary" size={20} />
                    </a>
                    <a aria-label="Linkedin" href="https://www.linkedin.com/in/javiercuencagento/" rel="noreferrer" target="_blank">
                        <BsLinkedin
                            className="text-primary/60 transition-colors duration-100 hover:scale-110 hover:text-primary"
                            size={20}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
