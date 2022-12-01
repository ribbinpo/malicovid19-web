const model = () =>{
    return (
    <div className="bg-zinc-50 mx-3 mt-3 p-3">
        <div className="bg-white shadow-sm rounded-md p-5 mb-3">
            <div className="text-5xl mb-2 text-center">MODEL</div>
            <hr className="mb-5" />
        </div>
        <div className="bg-white shadow-sm rounded-md p-5 mb-3">
            <div className="text-xl font-normal">LSTM Model</div>
            <hr className="mb-5" />
            <p className="antialiased leading-relaxed text-justify indent-8">
                This API gives the number of covid-19 infected cases in the future using LSTM model. <span className=" text-red-500 font-bold hover:text-red-400">(7 days later) </span>
                LSTM or Long Short Term Memory is one of the Recurrent Neural Network (RNN) that use output stored in memory used to new input sequence later 
                (Input is sequence format). LSTM can know how should to write, delete or read memory using logical algorithms.
            </p>
            <div className="d-flex flex justify-center mb-2 mt-5 ">
                <table className="md:w-6/12 text-sm text-left text-gray-500 dark:text-gray-400">
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="border border-slate-300 px-1 md:px-5 py-3 text-right w-1/4">HOST</td>
                            <td className="border border-slate-300 px-1 md:px-5 py-3">http://159.65.2.88/api/covid19lstm</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="border border-slate-300 px-1 md:px-5 py-3 text-right">METHOD</td>
                            <td className="border border-slate-300 px-1 md:px-5 py-3">GET</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="border border-slate-300 px-1 md:px-5 py-3 text-right">HEADER</td>
                            <td className="border border-slate-300 px-1 md:px-5 py-3">-</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="border border-slate-300 px-1 md:px-5 py-3 text-right">PARAMETER</td>
                            <td className="border border-slate-300 px-1 md:px-5 py-3">-</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        <div className="bg-white shadow-sm rounded-md p-5 mb-3">
            <div className="text-xl">Output</div>
            <hr className="mb-5" />
            <p>The result from LSTM model in JSON format is consist of:</p>
            <div>
                <p className="indent-8 font-bold">data</p>
                <ul className="list-disc list-inside indent-16">
                    <li>date : date since 04/12/2021 - present.</li>
                    <li>real : Real data of the number of COVID-19 cases.</li>
                    <li>forecast : Prediction data of the number of COVID-19 cases.</li>
                </ul>
            </div>
        </div>
        <div className="bg-white shadow-sm rounded-md p-5">
            <div className="text-xl">Example Code</div>
            <hr />
            <div className="mt-5">CURL</div>
            <div className="pl-5">
                <div className="bg-slate-100 rounded-md p-2">
                    {/* data */}
                    curl -v &quot;http://159.65.2.88/api/covid19lstm&quot;
                </div>
            </div>

            <div className="mt-5">PHP</div>
            <div className="pl-5">
                <div className="bg-slate-100 rounded-md p-2 list-none">
                    {/* data */}
                    <li>&lt;?</li>
                    <li>$curl = curl_init();</li>
                    <li></li>
                    <li>curl_setopt_array($curl, array(</li>
                    <li className="indent-8">CURLOPT_URL =&gt; &quot;http://159.65.2.88/api/covid19lstm&quot;,</li>
                    <li className="indent-8">CURLOPT_RETURNTRANSFER =&gt; true,</li>
                    <li className="indent-8">CURLOPT_ENCODING =&gt; &quot;&quot;,</li>
                    <li className="indent-8">CURLOPT_MAXREDIRS =&gt; 10,</li>
                    <li className="indent-8">CURLOPT_TIMEOUT =&gt; 30,</li>
                    <li className="indent-8">CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,</li>
                    <li className="indent-8">CURLOPT_CUSTOMREQUEST =&gt; &quot;GET&quot;,</li>
                    <li className="indent-8">CURLOPT_HTTPHEADER =&gt; array(</li>
                    <li className="indent-8">)</li>
                    <li>));</li>
                    <li></li>
                    <li>$response = curl_exec($curl);</li>
                    <li>$err = curl_error($curl);</li>
                    <li></li>
                    <li>curl_close($curl);</li>
                    <li></li>
                    <li>if ($err)&#123;</li>
                    <li className="indent-8">echo &quot;cURL Error #:&quot; . $err;</li>
                    <li>&#125; else &#123;</li>
                    <li className="indent-8">echo $response;</li>
                    <li>&#125;</li>
                    <li>?&gt;</li>
                </div>
            </div>

            <div className="mt-5">Python</div>
            <div className="pl-5">
                <div className="bg-slate-100 rounded-md p-2 list-none">
                    {/* data */}
                    <li>import requests</li>
                    <li>url = &quot;http://159.65.2.88/api/covid19lstm&quot;</li>
                    <li>response = requests.get(url)</li>
                    <li>print(response.json())</li>
                </div>
            </div>

            {/* <div className="mt-5">JavaScript</div> */}
            {/* <div className="pl-5"> */}
                {/* <div className="bg-slate-100 rounded-md p-2"> */}
                    {/* data */}
                    {/* curl -v -H &quot;Host: ssense&quot; &quot;http://157.245.53.86/api/covid19lstm */}
                {/* </div> */}
            {/* </div> */}
            {/* PHP Python JS */}
        </div>
    </div>
    )
}
export default model