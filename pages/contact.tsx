const contact = ()=>{
    return(
        <div className="bg-zinc-50 rounded-lg h-screen text-center mx-3 mt-3 p-3">
            <div className="bg-white shadow-sm rounded-md p-5 mb-3">
                <div className="text-5xl mb-2">CONTACT US</div>
                <hr className="mb-5" />
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-auto bg-blue-400">
                        <div>
                            ADDRESS
                        </div>
                        <div>
                            EMAIL
                        </div>
                        <div>
                            PHONE
                        </div>
                    </div>
                    <div className="col-auto bg-blue-500">
                        <div>
                            form
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default contact