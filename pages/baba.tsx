import { NextPage } from "next"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const baba: NextPage = () =>{
    return (
        <div className="flex flex-col h-screen bg-slate-100">
            
            <NavBar></NavBar>
            <div className="flex-grow px-5 pt-5">
                <div className=" bg-white shadow-md rounded-lg h-screen text-center">data visualize</div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default baba