import Link from "next/link";
const NavBar = () =>{
    return(
        <nav className="relative w-full flex flex-wrap justify-between py-4 bg-white text-gray-700 shadow-sm navbar navbar-expand-lg navbar-light">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <div className="flex items-center">
                    <a className="text-xl text-black" href="#">
                        <span>MaliCovid19</span>
                    </a>
                    <ul className="flex flex-row ml-5 mr-auto ">
                        <li className="px-3 py-1 border-b-2 border-white hover:border-b-indigo-300 cursor-pointer select-none"><Link href="/dashboard"><a>Dashboard</a></Link></li>
                        <li className="px-3 py-1 border-b-2 border-white hover:border-b-indigo-300 cursor-pointer select-none">Model</li>
                        <li className="px-3 py-1 border-b-2 border-white hover:border-b-indigo-300 cursor-pointer select-none">About</li>
                        <li className="px-3 py-1 border-b-2 border-white hover:border-b-indigo-300 cursor-pointer select-none">Contact</li>
                    </ul>
                </div>
                <div className="">
                    LOGIN | SIGNUP
                </div>
            </div>
        </nav>
    )
}

export default NavBar;