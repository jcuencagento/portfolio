"use client";

import {useState, useRef, useEffect} from "react";
import toast from "react-hot-toast";
import {BiClipboard} from "react-icons/bi";
import {BsMailbox} from "react-icons/bs";

import {Button} from "./ui/button";

function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsModalOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <BsMailbox
                className="cursor-pointer text-primary/60 transition-colors duration-100 hover:scale-110 hover:text-primary"
                size={20}
                onClick={toggleModal}
            />
            {isModalOpen ? (
                <div
                    className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-60"
                    style={{marginLeft: "0"}}
                >
                    <div ref={modalRef} className="align-center m-auto flex-col justify-center rounded-lg bg-gray-100 p-6 lg:p-12">
                        <h2 className="mb-2 text-lg font-bold text-gray-800 lg:text-xl">Email contact</h2>
                        <h6 className="mb-6 text-base font-light text-gray-600 lg:text-lg">Write up for whatever</h6>
                        <div className="align-center flex justify-between gap-4">
                            <p className="m-auto rounded-xl bg-gray-300 px-3 py-2 text-lg font-semibold text-black lg:px-4">
                                jcuencagento@gmail.com
                            </p>
                            <Button
                                aria-label="Clipboard"
                                className="m-auto transform-gpu rounded-xl bg-gray-300 p-4 text-black duration-300 ease-in-out hover:bg-blue-300"
                                onClick={() => {
                                    navigator.clipboard.writeText("jcuencagento@gmail.com");
                                    toast("Copied to clipboard.", {
                                        icon: "✂️",
                                        style: {borderRadius: "10px", background: "#1D1D1D", color: "#fff"},
                                    });
                                }}
                            >
                                <BiClipboard size={28} />
                            </Button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default Contact;
