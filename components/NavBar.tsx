import Link from "next/link";
import { useState } from "react"
import { Transition } from "@headlessui/react";

const NavBar = () =>{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <nav className="bg-white text-gray-700 shadow-sm">
                {/* max-w-7xl mx-auto */}
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 text-xl text-black">
                                <div>MaliCovid19</div>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <div className="px-5 py-1 border-b-2 border-white hover:border-b-indigo-300 hover:text-indigo-500 cursor-pointer select-none"><Link href="/"><a>Dashboard</a></Link></div>
                                    <div className="px-5 py-1 border-b-2 border-white hover:border-b-indigo-300 hover:text-indigo-500 cursor-pointer select-none"><Link href="/model"><a>Model</a></Link></div>
                                    <div className="px-5 py-1 border-b-2 border-white hover:border-b-indigo-300 hover:text-indigo-500 cursor-pointer select-none"><Link href="/about"><a>About</a></Link></div>
                                    <div className="px-5 py-1 border-b-2 border-white hover:border-b-indigo-300 hover:text-indigo-500 cursor-pointer select-none"><Link href="/contact"><a>Contact</a></Link></div>                                
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
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
                                {/* <a href="#" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a> */}
                                <div className="px-5 py-1 border-b-2 border-white hover:border-b-indigo-300 hover:text-indigo-500 cursor-pointer select-none"><Link href="/"><a>Dashboard</a></Link></div>
                                <div className="px-5 py-1 border-b-2 border-white hover:border-b-indigo-300 hover:text-indigo-500 cursor-pointer select-none"><Link href="/model"><a>Model</a></Link></div>
                                <div className="px-5 py-1 border-b-2 border-white hover:border-b-indigo-300 hover:text-indigo-500 cursor-pointer select-none"><Link href="/about"><a>About</a></Link></div>
                                <div className="px-5 py-1 border-b-2 border-white hover:border-b-indigo-300 hover:text-indigo-500 cursor-pointer select-none"><Link href="/contact"><a>Contact</a></Link></div>    
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

        // <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        //     <div className="container flex flex-wrap justify-between items-center mx-auto">
        //     <a href="https://flowbite.com" className="flex items-center">
        //         {/* <img src="/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
        //         <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MaliCovid19</span>
        //     </a>
        //     <div className="flex md:order-2">
        //         <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
        //         <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
        //         <span className="sr-only">Open main menu</span>
        //         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        //         <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        //         </button>
        //     </div>
        //     <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
        //         <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        //         <li>
        //             <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Dashboard</a>
        //         </li>
        //         <li>
        //             <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        //         </li>
        //         <li>
        //             <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        //         </li>
        //         <li>
        //             <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        //         </li>
        //         </ul>
        //     </div>
        //     </div>
        // </nav>
    )
}

export default NavBar;

