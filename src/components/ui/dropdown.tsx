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
                <Menu.Button className="inline-flex justify-center rounded-md bg-transparent px-3 py-2 text-sm font-semibold shadow-sm ">
                    <BiCaretDownCircle aria-hidden="true" className="h-6 w-6 text-primary hover:transform-110" />
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({active}) => (
                                <a
                                    className={classNames(
                                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                        "block px-4 py-2 text-sm",
                                    )}
                                    href="/"
                                >
                                    Account settings
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <a
                                    className={classNames(
                                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                        "block px-4 py-2 text-sm",
                                    )}
                                    href="/"
                                >
                                    Support
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <a
                                    className={classNames(
                                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                        "block px-4 py-2 text-sm",
                                    )}
                                    href="/"
                                >
                                    License
                                </a>
                            )}
                        </Menu.Item>
                        <form action="#" method="POST">
                            <Menu.Item>
                                {({active}) => (
                                    <button
                                        className={classNames(
                                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                            "block w-full px-4 py-2 text-left text-sm",
                                        )}
                                        type="submit"
                                    >
                                        Sign out
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
