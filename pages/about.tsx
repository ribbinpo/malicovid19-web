import ecoSystemImage from "../public/EcoSystem.png"
import Image from 'next/image'

const about = ()=>{
    return(
        <div className="bg-zinc-50 rounded-lg h-screen text-center mx-3 mt-3 p-3">
            {/* <div className="my-5">About</div> */}
            <div className="bg-white shadow-sm rounded-md p-5 mb-3">
                <div className="text-5xl mb-2">ABOUT US</div>
                <hr className="mb-5" />
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, officia illo harum sit nam inventore quos adipisci voluptatem quasi voluptatum facilis est voluptates quidem aperiam vitae dicta explicabo sed ipsam!
                </p>
            </div>
            <div className="bg-white shadow-sm rounded-md p-5">
                <Image
                src={ecoSystemImage}
                alt="Picture of the author"
                // width={500}
                // height={500}
                quality={100}
                />
            </div>
        </div>
    );
}

export default about