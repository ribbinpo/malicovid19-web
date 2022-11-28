import { NextPage } from "next";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// import Chart from 'react-apexcharts'
import dynamic from "next/dynamic";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BsPersonPlus } from "react-icons/bs";
import { BsPersonX } from "react-icons/bs";
import { MdOutlinePersonOff } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";

import DashboardView from "components/views/dashboard.view";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


type tableListProps = {
  dataRank: {
    dataRank: { ranking: string; province: string; cases: string }[];
  };
};

const TableList = (props: tableListProps) => {
  const { dataRank } = props.dataRank;
  
  return (
    <>
      {/* <tr classNameName="sticky top-0 flex w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" classNameName="w-1/3 p-4 font-medium text-gray-900 dark:text-white">100</th>
        <td classNameName="p-4 w-1/3">A</td>
        <td classNameName="p-4 w-1/3">B</td>
      </tr> */}
      {dataRank.map(
        (
          res: { ranking: string; province: string; cases: string },
          idx: number
        ) => (
          <tr
            key={idx}
            className="flex w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              className="w-1/3 p-4 font-medium text-gray-900 dark:text-white"
            >
              {res.ranking}
            </th>
            <td className="p-4 w-1/3">{res.province}</td>
            <td className="p-4 w-1/3">{res.cases}</td>
          </tr>
        )
      )}
    </>
  );
  
};

// const baba: NextPage = ({ data, data2, ranking }: any) =>{

//     const percentage = data.accuracy

//     const state = {
//         options: {
//           chart: {
//             id: "basic-bar"
//           },
//           xaxis: {
//             categories: data.data.date
//           }
//         },
//         series: [
//           {
//             name: "Real",
//             data: data.data.real
//           },
//           {
//             name: "Forecast",
//             data: data.data.forecast
//           },
//         ]
//     };
//     return (
//         <div classNameName="flex flex-col">
//             <div classNameName="flex-grow px-2 pt-2">
//                 <div classNameName=" bg-zinc-50 rounded-lg text-center px-3">
//                     <div classNameName="text-right text-xs font-light pr-5 mb-2">Lastest Update: {data2.date}</div>
//                     {/* Row1 General Information */}
//                     <div classNameName="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
//                         <div classNameName="bg-white p-5 rounded-lg">
//                           <div classNameName="text-lg font-normal">TODAY CASE</div>
//                           <div classNameName="text-6xl font-semibold">{data2.province.Phuket.new_case}</div>
//                         </div>
//                         <div classNameName="bg-white p-5 rounded-lg">
//                           <div classNameName=" text-lg font-normal">TOMORROW CASE</div>
//                           <div classNameName="text-6xl font-semibold">{data.predictTomorrow}</div>
//                         </div>
//                         <div classNameName="bg-white p-5 rounded-lg">
//                           <div classNameName="text-lg font-normal">TOTAL CASE</div>
//                           <div classNameName="text-6xl font-semibold">{data2.province.Phuket.total_case}</div>
//                         </div>
//                     </div>
//                     {/* Row2 Accuracy+Ranking */}
//                     <div classNameName="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
//                       {/* Accuracy */}
//                       <div classNameName="bg-white col-span-1 rounded-lg py-5">
//                           <div classNameName="text-lg font-normal mb-2">ACCURACY</div>
//                           <div classNameName="d-flex flex justify-center">
//                             <div classNameName="w-1/3 md:w-2/5">
//                               <CircularProgressbar value={percentage} text={`${percentage}%`} />
//                             </div>
//                           </div>
//                       </div>
//                       {/* Ranking */}
//                       <div classNameName="bg-white col-span-2 rounded-lg">
//                         <div classNameName="sm:rounded-lg rounded-lg shadow-sm pt-1">
//                         <table classNameName="text-center w-full text-gray-500 dark:text-gray-400 rounded-lg">
//                           <thead classNameName="flex w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                             <tr classNameName="flex w-full">
//                               <th classNameName="p-4 w-1/3">Rank</th>
//                               <th classNameName="p-4 w-1/3">Province</th>
//                               <th classNameName="p-4 w-1/3">Infected Cases</th>
//                             </tr>
//                           </thead>
//                           <tbody classNameName="bg-grey-light text-xs flex flex-col items-center justify-between overflow-y-scroll w-full max-h-52">
//                             <TableList dataRank={ranking} />
//                           </tbody>
//                         </table>
//                         </div>
//                       </div>
//                     </div>
//                     {/* Row3 COVID19 CASES GRAPH */}
//                     <div classNameName="p-5 bg-white rounded-lg">
//                         <div classNameName="text-lg font-normal">COVID-19 INFECTED CASES GRAPH</div>
//                         <hr classNameName="mb-3" />
//                         <Chart
//                         options={state.options}
//                         series={state.series}
//                         type="line"
//                         width="100%"
//                         height="200%"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export const getServerSideProps:GetServerSideProps = async () =>{
//     const res = await fetch("http://159.65.2.88/api/predict")
//     const data = await res.json()
//     const res2 = await fetch("http://159.65.2.88/api/covid19-information")
//     const data2 = await res2.json()

//     let row = '{"dataRank":['
//     for(let i=0;i<data2.ranking.rank.length;i++){
//       row = row+'{"ranking": "'+(data2.ranking.rank[i]+1).toString()+'", "province": "'+data2.ranking.province[i]+'", "cases": "'+data2.ranking.cases[i].toString()+'"},'
//     }
//     row = row.substring(0,row.length-1)
//     row += ']}'
//     let ranking = JSON.parse(row)
//     return {props:{data,data2,ranking}}
// }

// export default baba;

const Dashboard: NextPage = () => {
  return (
    <>
      <DashboardView />
     
    </>
  );
};

export default Dashboard;
