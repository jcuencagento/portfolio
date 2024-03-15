import {Fragment} from "react";
import {Menu, Transition} from "@headlessui/react";
import {BiCaretDownCircle} from "react-icons/bi";

function classNames(...classes: unknown[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Dropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center rounded-md bg-transparent px-3 py-2 text-sm font-semibold">
                    <BiCaretDownCircle aria-hidden="true" className="h-6 w-6 text-primary duration-200 ease-in-out hover:scale-110" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-primary focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({active}) => (
                                <a
                                    className={classNames(
                                        active ? "bg-gray-100 text-gray-900" : "text-gray-200",
                                        "block px-4 py-2 text-sm",
                                    )}
                                    href="/"
                                >
                                    Home
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <a
                                    className={classNames(
                                        active ? "bg-gray-100 text-gray-900" : "text-gray-200",
                                        "block px-4 py-2 text-sm",
                                    )}
                                    href="/exp"
                                >
                                    Experience
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <a
                                    className={classNames(
                                        active ? "bg-gray-100 text-gray-900" : "text-gray-200",
                                        "block px-4 py-2 text-sm",
                                    )}
                                    href="/projects"
                                >
                                    Projects
                                </a>
                            )}
                        </Menu.Item>
                        <form action="/misc" method="POST">
                            <Menu.Item>
                                {({active}) => (
                                    <button
                                        className={classNames(
                                            active ? "bg-gray-100 text-gray-900" : "text-gray-200",
                                            "block w-full px-4 py-2 text-left text-sm",
                                        )}
                                        type="submit"
                                    >
                                        Misc
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
