import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faMapLocationDot, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
//free-regular-svg-icons
//free-solid-svg-icons

const contact = ()=>{
    return(
        <div className="bg-zinc-50 rounded-lg mx-3 mt-3 p-3">
            <div className="bg-white shadow-sm rounded-md p-5 mb-3">
                <div className="text-5xl mb-2 text-center">CONTACT US</div>
                <hr className="mb-5" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-auto border text-center py-3">
                        <div className="mb-7 mt-1 flex flex-col items-center">
                            <div className="w-32">
                                <FontAwesomeIcon icon={faMapLocationDot} className="fa-solid fa-camera fa-4x mb-1" />
                            </div>
                            <div className="text-lg font-medium my-1">ADDRESS</div>
                            <p className="px-3">78/83 Sol.4/7 Moo.2 Chaofa Rd. Wichit Mueang Phuket 83000</p>
                        </div>
                        <div className="mb-7 flex flex-col items-center">
                            <div className="w-32">
                                <FontAwesomeIcon icon={faPaperPlane} className="fa-solid fa-camera fa-4x mb-1" />
                            </div>
                            <div className="text-lg font-medium my-1">E-MAIL</div>
                            <p>ribbinpo@gmail.com</p>
                            <p>s6230613020@phuket.psu.ac.th</p>
                        </div>
                        <div className="mb-7 flex flex-col items-center">
                            <div className="w-32">
                                <FontAwesomeIcon icon={faSquarePhone} className="fa-solid fa-camera fa-4x mb-1" />
                            </div>
                            <div className="text-lg font-medium my-1">PHONE</div>
                            <p>086-3210676</p>
                        </div>
                    </div>
                    <div className="col-auto px-5">
                        <div className="text-lg font-normal">Send a message</div>
                        <hr className="mb-5" />
                        <form action="">
                            <div className="mb-5">
                                {/* <label className="block mb-2 text-gray-900 dark:text-gray-300 px-3">Name</label> */}
                                <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" />
                            </div>
                            <div className="mb-5">
                                {/* <label className="block mb-2 text-gray-900 dark:text-gray-300 px-3">Email</label> */}
                                <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email" />
                            </div>
                            <div className="mb-5">
                                {/* <label className="block mb-2 text-gray-900 dark:text-gray-400 px-3">Your message</label> */}
                                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <div className="mb-5">
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default contact