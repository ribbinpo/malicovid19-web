const model = () =>{
    return (
        <div className="bg-zinc-50 rounded-lg h-screen mx-3 mt-3 p-3">
        <div className="bg-white shadow-sm rounded-md p-5 mb-3">
            <div className="text-5xl mb-2 text-center">MODEL</div>
            <hr className="mb-5" />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, officia illo harum sit nam inventore quos adipisci voluptatem quasi voluptatum facilis est voluptates quidem aperiam vitae dicta explicabo sed ipsam!
            </p>
        </div>
        <div className="bg-white shadow-sm rounded-md p-5 mb-3">
            LSTM model
            <hr className="mb-2" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aliquid nemo natus beatae repellendus dolorum laudantium expedita placeat, quod cupiditate consectetur doloremque asperiores enim? Neque minus maiores voluptate reprehenderit accusantium!</p>
            <div className="d-flex flex justify-center mb-2 mt-5 ">
                <table className=" w-6/12 text-sm text-left text-gray-500 dark:text-gray-400">
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="border border-slate-300 px-5 py-3 text-right w-1/4">HOST</td>
                            <td className="border border-slate-300 px-5 py-3">https://localhost:8000</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="border border-slate-300 px-5 py-3 text-right">METHOD</td>
                            <td className="border border-slate-300 px-5 py-3">GET</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="border border-slate-300 px-5 py-3 text-right">HEADER</td>
                            <td className="border border-slate-300 px-5 py-3">https://localhost:8000</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="border border-slate-300 px-5 py-3 text-right">PARAMETER</td>
                            <td className="border border-slate-300 px-5 py-3">user: </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        <div className="bg-white shadow-sm rounded-md p-5 mb-3">
            Output
            <hr />
        </div>
        <div className="bg-white shadow-sm rounded-md p-5">
            Example Code
            <hr />
        </div>
    </div>
    )
}
export default model