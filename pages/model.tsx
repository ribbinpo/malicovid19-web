const model = () =>{
    return (
    <div className="bg-zinc-50 mx-3 mt-3 p-3">
        <div className="bg-white shadow-sm rounded-md p-5 mb-3">
            <div className="text-5xl mb-2 text-center">MODEL</div>
            <hr className="mb-5" />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, officia illo harum sit nam inventore quos adipisci voluptatem quasi voluptatum facilis est voluptates quidem aperiam vitae dicta explicabo sed ipsam!
            </p>
        </div>
        <div className="bg-white shadow-sm rounded-md p-5 mb-3">
            <div className="text-xl">LSTM Model</div>
            <hr className="mb-5" />
            <p className="antialiased leading-relaxed text-justify indent-8">
                This API gives the number of covid-19 infected cases in the future using LSTM model. <span className=" text-red-500 font-bold hover:text-red-400">(10 days later) </span>
                LSTM or Long Short Term Memory is one of the Recurrent Neural Network (RNN) that use output stored in memory used to new input sequence later 
                (Input is sequence format). LSTM can know how should to write, delete or read memory using logical algorithms.
            </p>
            <div className="d-flex flex justify-center mb-2 mt-5 ">
                <table className="w-6/12 text-sm text-left text-gray-500 dark:text-gray-400">
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="border border-slate-300 px-5 py-3 text-right w-1/4">HOST</td>
                            <td className="border border-slate-300 px-5 py-3">http://157.245.53.86/api/predict</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="border border-slate-300 px-5 py-3 text-right">METHOD</td>
                            <td className="border border-slate-300 px-5 py-3">GET</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="border border-slate-300 px-5 py-3 text-right">HEADER</td>
                            <td className="border border-slate-300 px-5 py-3">-</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="border border-slate-300 px-5 py-3 text-right">PARAMETER</td>
                            <td className="border border-slate-300 px-5 py-3">-</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        <div className="bg-white shadow-sm rounded-md p-5 mb-3">
            <div className="text-xl">Output</div>
            <hr className="mb-5" />
            <p>The result from LSTM model in JSON Arrays format is consist of:</p>
            <div>
                <p className="indent-8 font-bold">data</p>
                <ul className="list-disc list-inside indent-16">
                    <li>date : date since 04/12/2021 - present.</li>
                    <li>real : Real data of the number of COVID-19 cases.</li>
                    <li>forecast : Prediction data of the number of COVID-19 cases.</li>
                </ul>
                <div className="bg-slate-100 rounded-md mt-2 p-2">
                    <p className="whitespace-pre">
                        {/* example output */}
                    </p>
                </div>
            </div>
        </div>
        <div className="bg-white shadow-sm rounded-md p-5">
            <div className="text-xl">Example Code</div>
            <hr className="mb-5" />
            <div>CURL</div>
            <div className="pl-5">
                <div className="bg-slate-100 rounded-md p-2">
                    {/* data */}
                </div>
            </div>
            {/* PHP Python JS */}
        </div>
    </div>
    )
}
export default model