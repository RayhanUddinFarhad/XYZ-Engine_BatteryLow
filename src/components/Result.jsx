import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import Pdf from "react-to-pdf";



import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const ref = React.createRef();





const Result = () => {


  


const {formData} = useContext(DataContext)

console.log(formData);



  const chartData = formData?.csv || []; 




    return (

<>






        <div>
        <Pdf  targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='   px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150' onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
            
        <div id='pdf-content' ref={ref} className="w-full mx-auto px-4 md:px-8">
           <div className="max-w-lg ">
              
            </div>

            {chartData.length > 0 && ( // Render the chart only when there's data
              <div style={{ width: '100%', height: 400 }}>
              <h2 className="text-xl font-semibold mb-4">Chart: KP vs X</h2>
              <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                      data={formData.csv}
                      margin={{
                          top: 20,
                          right: 20,
                          bottom: 20,
                          left: 20,
                      }}
                  >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="KP" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="X" stroke="#8884d8" strokeWidth={2} />
                      <Line type="monotone" dataKey="Y" stroke="#8884d8" strokeWidth={2} />
                      <Line type="monotone" dataKey="Z" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
              </ResponsiveContainer>
          </div>
        )}
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr className="divide-x">
                            <th className="py-3 px-6">Project Name</th>
                            <th className="py-3 px-6">Project Description</th>
                            <th className="py-3 px-6">Client </th>
                            <th className="py-3 px-6">Contractor</th>
                            <th className="py-3 px-6">Max-X</th>
                            <th className="py-3 px-6">Min-X</th>
                            <th className="py-3 px-6">Max-Y</th>
                            <th className="py-3 px-6">Min-Y</th>
                            <th className="py-3 px-6">Max-Z</th>
                            <th className="py-3 px-6">Min-Z</th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y ">
                        

                                
                                <tr  className="divide-x">
                                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                                        
                                        {formData?.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{formData?.projectDescription}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{formData?.client}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{formData?.Contactor}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{formData?.maxvalueOfX}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{formData?.minValueOfX}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{formData?.maxvalueOfY}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{formData?.minValueOfY}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{formData?.maxValueOfZ}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{formData?.minValueOfZ}</td>
                                </tr>



                                
                          
                        
                    </tbody>
                </table>
            </div>
        </div></div></>
    );
};

export default Result;