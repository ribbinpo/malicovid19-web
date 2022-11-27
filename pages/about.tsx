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
                In a normal situation, COVID-19 is a disease that affects every aspect such as economics, social, education, and medical. 
                The government and the medical team can&apos;t expect the number of COVID-19 cases that happened. As a result, it isn&apos;t possible to know the number of beds, personnel, and medical equipment it&apos;s needed. May result in insufficient or too many resources.
                </p>
                <p className="antialiased leading-relaxed text-justify indent-8">
                    Therefore, I have to create a &quot;MaliCovid19&quot; system. MaliCovid19 is artificial intelligence that can predict the number of COVID-19 cases in the future in Phuket. 
                    It can help the government and medical team to prepare for the COVID-19 situation. 
                    MaliCovid-19 can integrate with other software like a web application to show the dashboard of information about COVID-19 cases and the models. 
                    Also can use with line-bot to show the notification of information. 
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