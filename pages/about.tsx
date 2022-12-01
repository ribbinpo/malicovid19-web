import ecoSystemImage from "../assets/EcoSystem.png";
import Image from 'next/image';

const about = ()=>{
    return(
        <div className="bg-zinc-50 rounded-lg h-screen mx-3 mt-3 p-3">
            {/* <div className="my-5">About</div> */}
            <div className="bg-white shadow-sm rounded-md p-5 mb-3">
                <div className="text-5xl mb-2 text-center">ABOUT US</div>
                <hr className="mb-5" />
                
                <p className="antialiased leading-relaxed text-justify indent-8">
                    After about 3 years since COVID-19 spread in Thailand, COVID-19 still affect in every aspect, in the research community separate COVID-19 situation into the 4 waves have been in Thailand,
                    the first of which began on 12 March 2020 and finished on 14 December 2020. The second wave began on 15 December 2020 and concluded on 31 March 2021. The beginning of the third wave was reported in early April. 
                    On 6 December 2021, the first case of Omicron was discovered. after some time, it began to spread and triggered the subsequent wave. The commencement of the 
                    fourth wave was estimated to occur around the middle of December 2021. However, government cannot expect the actual number of infected, recovered, and death cases in the future.
                </p>
                <p className="antialiased leading-relaxed text-justify indent-8">
                    Therefore, the author has foreseen this problem, so the author wants to research, analyze and create the model that can find the solution of the number COVID-19 cases (infected, recovered, death cases). 
                    Then use data and models to integrate with other software like a web application to show visualization for ease to access and explain.
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