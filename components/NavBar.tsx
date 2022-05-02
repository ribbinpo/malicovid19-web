import Link from "next/link";
import { useState } from "react"
import { Transition } from "@headlessui/react";
const NavBar = () =>{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <nav className="bg-white text-gray-700 shadow-sm">
                {/* max-w-7xl mx-auto */}
                <div className="px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex items-center justify-between w-full h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 text-xl text-black">
                                <div className="cursor-default">MaliCovid19</div>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {/* hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium */}
                                    <Link href="/"><a><div className="px-5 py-1 hover:bg-green-500 hover:text-white hover:rounded-full cursor-pointer select-none rounded-md block text-base">Dashboard</div></a></Link>
                                    <Link href="/model"><a><div className="px-5 py-1 hover:bg-green-500 hover:text-white hover:rounded-full cursor-pointer select-none rounded-md block text-base">Model</div></a></Link>
                                    <Link href="/about"><a><div className="px-5 py-1 hover:bg-green-500 hover:text-white hover:rounded-full cursor-pointer select-none rounded-md block text-base">About</div></a></Link>
                                    <Link href="/contact"><a><div className="px-5 py-1 hover:bg-green-500 hover:text-white hover:rounded-full cursor-pointer select-none rounded-md block text-base">Contact</div></a></Link>
                                    <Link href="https://line.me/ti/p/@232supas"><a><li className="px-5 py-1 rounded-full bg-green-500 text-white shadow-md cursor-pointer hover:bg-green-600 select-none">Join MaliCovid19 Line</li></a></Link>                                
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
                                className=" bg-cyan-700 inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-800 focus:ring-white"
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
                                <Link href="/"><a><div className="hover:bg-green-600 hover:text-white block px-3 py-2 rounded-md text-base hover:font-medium">Dashboard</div></a></Link>
                                <Link href="/model"><a><div className="hover:bg-green-600 hover:text-white block px-3 py-2 rounded-md text-base hover:font-medium">Model</div></a></Link>
                                <Link href="/about"><a><div className="hover:bg-green-600 hover:text-white block px-3 py-2 rounded-md text-base hover:font-medium">About</div></a></Link>
                                <Link href="/contact"><a><div className="hover:bg-green-600 hover:text-white block px-3 py-2 rounded-md text-base hover:font-medium">Contact</div></a></Link>
                                <Link href="https://line.me/ti/p/@232supas"><a><li className="px-5 py-2 mt-1 rounded-full bg-green-500 text-white shadow-md cursor-pointer list-none hover:bg-green-600 ">Join MaliCovid19 Line</li></a></Link>  
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
        
        // <nav className="relative w-full flex flex-wrap justify-between py-4 bg-white text-gray-700 shadow-sm navbar navbar-expand-lg navbar-light">
        //     <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        //         <div className="flex items-center">
        //             <a className="text-xl text-black" href="/">
        //                 <span>MaliCovid19</span>
        //             </a>

        //         </div>
        //         <div className="">
        //             <ul className="flex flex-row ml-5 mr-auto ">
        //                 <li className="px-5 py-1 border-b-2 border-white hover:border-b-indigo-300 hover:text-indigo-500 cursor-pointer select-none"><Link href="/"><a>Dashboard</a></Link></li>
        //                 <li className="px-5 py-1 border-b-2 border-white hover:border-b-indigo-300 hover:text-indigo-500 cursor-pointer select-none"><Link href="/model"><a>Model</a></Link></li>
        //                 <li className="px-5 py-1 border-b-2 border-white hover:border-b-indigo-300 hover:text-indigo-500 cursor-pointer select-none"><Link href="/about"><a>About</a></Link></li>
        //                 <li className="px-5 py-1 border-b-2 border-white hover:border-b-indigo-300 hover:text-indigo-500 cursor-pointer select-none"><Link href="/contact"><a>Contact</a></Link></li>
        //                 <Link href="https://line.me/ti/p/@232supas"><a><li className="px-5 py-1 rounded-full bg-green-500 text-white shadow-md cursor-pointer select-none hover:bg-green-600 ">Join MaliCovid19 Line</li></a></Link>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default NavBar;

