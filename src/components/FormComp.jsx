import { useState } from "react";
import Papa from 'papaparse';

const FormComp = () => {

    const [array, setArray] = useState([]);
    const [fileUploaded, setFileUploaded] = useState(false);




    const fileReader = new FileReader();

    const handleOnChange = (event) => {
        // Passing file data (event.target.files[0]) to parse using Papa.parse
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                setArray(results.data)
                setFileUploaded(true)
            },
        });
    };


    const handleOnSubmit = (e) => {

        e.preventDefault()
        const form = e.target
        const name = form.projectName.value
        const projectDescription = form.projectDescription.value
        const client = form.client.value
        const Contactor = form.contactor.value
        const csv = form.csv.value
        const maxvalueOfX = form.maxXResult.value
        const minValueOfX = form.minXResult.value
        const maxvalueOfY = form.maxYResult.value
        const minValueOfY = form.minYResult.value
        const maxValueOfZ = form.maxZResult.value
        const minValueOfZ = form.minZResult.value

        console.log(name, projectDescription, client, Contactor, csv, maxvalueOfX, minValueOfX, maxvalueOfY, minValueOfY, maxValueOfZ, minValueOfZ);
    }

console.log(array);

    const maxXResult = array.reduce((acc, x) => acc = acc > parseFloat(x.X) ? acc : parseFloat(x.X), 0);
    const minXResult = array.reduce((acc, x) => acc = acc < parseFloat(x.X) ? acc : parseFloat(x.X), Infinity);   
    const maxYResult = array.reduce((acc, curr) => acc = acc > parseFloat(curr.Y) ? acc : parseFloat(curr.Y), 0);
    const minYResult = array.reduce((acc, curr) => acc = acc < parseFloat(curr.Y) ? acc : parseFloat(curr.Y), Infinity);   
    const maxZResult = array.reduce((acc, curr) => acc = acc > parseFloat(curr.Z) ? acc : parseFloat(curr.Z), -Infinity);
    const minZResult = array.reduce((acc, curr) => acc = acc < parseFloat(curr.Z) ? acc : parseFloat(curr.Z), Infinity);   







    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                    </div>
                </div>
                <form onSubmit={handleOnSubmit}
                    className="mt-8 space-y-5 text-left"
                >
                    <div>
                        <label className="font-medium">
                            Project Name
                        </label>
                        <input
                            type="text"
                            required
                            name="projectName"
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Project Description
                        </label>
                        <textarea
                            type="text"
                            required
                            name="projectDescription"
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>


                    <div>
                        <label className="font-medium">
                            Client
                        </label>
                        <input
                            type="text"
                            required
                            name="client"
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Contractor
                        </label>
                        <input
                            type="text"
                            required
                            name="contactor"
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Upload CSV file                        </label>
                        <input
                            onChange={handleOnChange}

                            type="file"
                            accept=".csv"
                            
                            name="csv"
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none  focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>


                    <div className="lg:flex lg:space-x-5">

                    <div className="lg:flex lg:space-x-5">
                    <div>
                    <label className="font-medium">
                        Max X
                    </label>
                    {fileUploaded ? ( // if file is uploaded, show disabled input field with value from CSV
                    <input
                        type="number"
                        required
                        value={maxXResult}
                        name="maxXResult"
                        disabled
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                    ) : ( // if file is not uploaded, show editable input field for user to enter value
                    <input
                        type="number"
                        required
                        placeholder="0"
                        name="maxXResult"
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                    )}
                </div>
                {/* Repeat the same logic for min X, max Y, min Y, max Z, and min Z */}
                </div>

                      {

                        fileUploaded ?

                        <div>
                        <label className="font-medium">
                            Min_X
                        </label>
                        <input
                            type="number"
                            name="minXResult"
                            value={minXResult}
                            required
                            disabled
                            placeholder="0"
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>

                    :

                    <div>
                    <label className="font-medium">
                        Min_X
                    </label>
                    <input
                        type="number"
                        required
                        placeholder="0"
                        name="minXResult"
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                </div>


                      }




                    </div>
                    <div className="lg:flex lg:space-x-5">

                       {
                        fileUploaded ?  <div>
                        <label className="font-medium">
                            max_Y
                        </label>
                        <input
                            type="number"
                            disabled
                            name="maxYResult"
                            value={maxYResult}
                            required
                            placeholder="0"
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    :  <div>
                    <label className="font-medium">
                        max_Y
                    </label>
                    <input
                        type="number"
                        required
                        name="maxYResult"
                        placeholder="0"
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                </div>
                       }
                       {
                        fileUploaded ?  <div>
                        <label className="font-medium">
                            Min_Y
                        </label>
                        <input
                            type="number"
                            required
                            disabled
                            name="minYResult"
                            value={minYResult}
                            placeholder="0"
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    :  <div>
                    <label className="font-medium">
                        Min_Y
                    </label>
                    <input
                        type="number"
                        required
                        name="minYResult"
                        placeholder="0"
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                </div>
                       }





                    </div>
                    <div className="lg:flex lg:space-x-5">

                      {
                        fileUploaded ?   <div>
                        <label className="font-medium">
                            max_Z
                        </label>
                        <input
                            type="number"
                            disabled
                            name="maxZResult"
                            value={maxZResult}
                            required
                            placeholder="0"
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    :   <div>
                    <label className="font-medium">
                        max_Z
                    </label>
                    <input
                        type="number"
                        required
                        name="maxZResult"
                        placeholder="0"
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                </div>
                      }
                       {
                        fileUploaded ?  <div>
                        <label className="font-medium">
                            Min_Z
                        </label>
                        <input
                            type="number"
                            disabled
                            value={minZResult}
                            name="minZResult"
                            required
                            placeholder="0"
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    :  <div>
                    <label className="font-medium">
                        Min_Z
                    </label>
                    <input
                        type="number"
                        required
                        name="minZResult"
                        placeholder="0"
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                </div>
                       }





                    </div>



                    <button 
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Submit                    </button>
                    <button 
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Show Result                    </button>

                </form>




                <p></p>
            </div>
        </main>
    );
};

export default FormComp;