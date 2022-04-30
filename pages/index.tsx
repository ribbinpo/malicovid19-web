import { NextPage } from "next"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
// import Chart from 'react-apexcharts'
import dynamic from "next/dynamic"
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Chart = dynamic(()=>import ("react-apexcharts"),{ ssr: false })

const baba: NextPage = ({data,data2}:any) =>{
    const percentage = 77
    const state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: data.data.date
          }
        },
        series: [
          {
            name: "Real",
            data: data.data.real
          },
          {
            name: "Forecast",
            data: data.data.forecast
          },
        ]
    };
    return (
        <div className="flex flex-col h-screen"> 
            <div className="flex-grow px-2 pt-2">
                <div className=" bg-zinc-50 rounded-lg h-screen text-center px-3">
                    <div className="text-right text-xs pr-5 mb-2">Lastest Update: {data2.date}</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
                        <div className="bg-white p-5 rounded-lg">
                          <div>TODAY CASE</div>
                          <div>{data2.province.Phuket.new_case}</div>
                        </div>
                        <div className="bg-white p-5 rounded-lg">
                          <div>TOMORROW CASE</div>
                          <div>{data2.province.Phuket.total_case}</div>
                        </div>
                        <div className="bg-white p-5 rounded-lg">
                          <div>TOTAL CASE</div>
                          <div>{data2.province.Phuket.total_case}</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
                      <div className="bg-white col-span-1 rounded-lg">
                          <div>ACCURACY</div>
                          <div className="d-flex flex justify-center">
                            <div className="w-1/3 md:w-2/5">
                              <CircularProgressbar value={percentage} text={`${percentage}%`} />
                            </div>
                          </div>
                      </div>
                      <div className="bg-white col-span-2 rounded-lg">
                            <div className="overflow-x-auto sm:rounded-lg rounded-lg shadow-sm pt-1">
                              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                      <tr>
                                          <th scope="col" className="px-6 py-3">
                                              Rank
                                          </th>
                                          <th scope="col" className="px-6 py-3">
                                              Province
                                          </th>
                                          <th scope="col" className="px-6 py-3">
                                              InfectedCases
                                          </th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            39
                                        </th>
                                        <td className="px-6 py-4">
                                            Phuket
                                        </td>
                                        <td className="px-6 py-4">
                                            1234
                                        </td>
                                      </tr>
                                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            40
                                        </th>
                                        <td className="px-6 py-4">
                                        Prachuap Khiri Khan
                                        </td>
                                        <td className="px-6 py-4">
                                            93
                                        </td>
                                      </tr>
                                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            41
                                        </th>
                                        <td className="px-6 py-4">
                                        Prachuap Khiri Khan
                                        </td>
                                        <td className="px-6 py-4">
                                            85
                                        </td>
                                      </tr>
                                  </tbody>
                              </table>
                            </div>
                      </div>
                    </div>
                    <div className="p-5 bg-white rounded-lg">
                        <div>COVID-19 CASES GRAPH</div>
                        <hr className="mb-3" />
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

export const getServerSideProps:GetServerSideProps = async () =>{
    const res = await fetch("http://159.65.2.88/api/predict")  
    const data = await res.json()
    const res2 = await fetch("http://159.65.2.88/api/covid19-information")
    const data2 = await res2.json()
    // console.log(data.data.date)
    return {props:{data,data2}}  
}


export default baba