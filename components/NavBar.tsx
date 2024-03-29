import Link from "next/link";
import { useState } from "react"
import { Transition } from "@headlessui/react";
import Image from 'next/image';
import Logo from 'assets/logo.jpg';
const NavBar = () =>{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <nav className="bg-white text-gray-700 shadow-md">
                {/* max-w-7xl mx-auto */}
                <div className="px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex items-center justify-between w-full h-16">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center space-x-2 flex-shrink-0 text-xl text-black">
                                <Image className="rounded-sm" src={Logo} alt="logo" width={30} height={30} quality={100} />
                                <span className="cursor-default">MaliCovid19</span>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {/* hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium */}
                                    <Link href="/">
                                        <div className="px-5 py-1 hover:bg-green-500 hover:text-white hover:rounded-full cursor-pointer select-none rounded-md block text-base">Dashboard</div>
                                    </Link>
                                    {/* <Link href="/model">
                                        <div className="px-5 py-1 hover:bg-green-500 hover:text-white hover:rounded-full cursor-pointer select-none rounded-md block text-base">Model</div>
                                    </Link> */}
                                    <Link href="/about">
                                        <div className="px-5 py-1 hover:bg-green-500 hover:text-white hover:rounded-full cursor-pointer select-none rounded-md block text-base">About</div>
                                    </Link>
                                    <Link href="/contact">
                                        <div className="px-5 py-1 hover:bg-green-500 hover:text-white hover:rounded-full cursor-pointer select-none rounded-md block text-base">Contact</div>
                                    </Link>
                                    <Link href="/lab">
                                        <li className="px-5 py-1 rounded-full bg-green-500 text-white shadow-md cursor-pointer hover:bg-green-600 select-none">MaliCovid19-Lab</li>
                                    </Link>                                
                                    {/* <a href="#" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a> */}
                                    {/* <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className=" bg-green-700 inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link href="/">
                                    <div className="px-5 py-1 hover:bg-green-500 hover:text-white hover:rounded-full cursor-pointer select-none rounded-md block text-base">Dashboard</div>
                                </Link>
                                {/* <Link href="/model">
                                    <div className="px-5 py-1 hover:bg-green-500 hover:text-white hover:rounded-full cursor-pointer select-none rounded-md block text-base">Model</div>
                                </Link> */}
                                <Link href="/about">
                                    <div className="px-5 py-1 hover:bg-green-500 hover:text-white hover:rounded-full cursor-pointer select-none rounded-md block text-base">About</div>
                                </Link>
                                <Link href="/contact">
                                    <div className="px-5 py-1 hover:bg-green-500 hover:text-white hover:rounded-full cursor-pointer select-none rounded-md block text-base">Contact</div>
                                </Link>
                                <Link href="/lab">
                                    <div className="px-5 py-1 rounded-full bg-green-500 text-white shadow-md cursor-pointer hover:bg-green-600 select-none">MaliCovid19-Lab</div>
                                </Link>    
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    )
}

export default NavBar;

