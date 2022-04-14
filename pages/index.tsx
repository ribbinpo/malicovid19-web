import { NextPage } from "next"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
// import Chart from 'react-apexcharts'
import dynamic from "next/dynamic"

const Chart = dynamic(()=>import ("react-apexcharts"),{ ssr: false })

type dataCase = {
    date: string;
    foretune?: number;
    real?: number;
}

type data = {
    PredictTommorrow: number;
    accuracy: number;
    data: dataCase[];
    totalCase: number;
}

//Test data
// const data = [
//     {
//       name: 'Page A',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'Page B',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'Page C',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'Page D',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'Page E',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'Page F',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'Page G',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];


const baba: NextPage = ({data}:any) =>{
    const state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: "series-2",
            data: [40, 50, 60, 70, 80, 90, 100, 111]
          },
        ]
    };
    return (
        <div className="flex flex-col h-screen"> 
            <div className="flex-grow px-2 pt-2">
                <div className=" bg-zinc-50 rounded-lg h-screen text-center px-3">
                    <div className="text-right text-xs pr-5 mb-2">Lastest Update: 12/04/2022</div>
                    <div className="grid grid-cols-3 gap-3 mb-2">
                        <div className="bg-white p-5 rounded-lg">01 TODAY CASE</div>
                        <div className="bg-white p-5 rounded-lg">02 TOMORROW CASE</div>
                        <div className="bg-white p-5 rounded-lg">03 TOTAL CASE</div>
                    </div>
                    <div className="grid grid-rows-3 grid-flow-col gap-2 mb-2">
                        <div className="bg-white row-span-3 rounded-lg">04 ACCURACY</div>
                        <div className="bg-white col-span-2 rounded-lg">05 TOTAL DEATH CASE</div>
                        <div className="bg-white row-span-2 col-span-2 rounded-lg">06 RANKING</div>
                    </div>
                    <div className="p-5 bg-white rounded-lg">
                        07 COVID19 CASE LINE GRAPH
                        <Chart
                        options={state.options}
                        series={state.series}
                        type="line"
                        width="100%"
                        height="200%"
                        />            
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(){
    const res = await fetch("https://line-pcord.herokuapp.com/get_predict")  
    const data = await res.json()
    console.log(data)
    return {props:{data}}  
}


export default baba