import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

  const data = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'Page F',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];


const Result = () => {


    const tableItems = [
        {
            name: "Liam James",
            email: "liamjames@example.com",
            position: "Software engineer",
            salary: "$100K"
        },
        {
            name: "Olivia Emma",
            email: "oliviaemma@example.com",
            position: "Product designer",
            salary: "$90K"
        },
        {
            name: "William Benjamin",
            email: "william.benjamin@example.com",
            position: "Front-end developer",
            salary: "$80K"
        },
        {
            name: "Henry Theodore",
            email: "henrytheodore@example.com",
            position: "Laravel engineer",
            salary: "$120K"
        },
        {
            name: "Amelia Elijah",
            email: "amelia.elijah@example.com",
            position: "Open source manager",
            salary: "$75K"
        },
    ]


const {formData} = useContext(DataContext)

console.log(formData);

const generatePdf = () => {
    const input = document.getElementById('pdf-content'); // Element to be captured
    html2canvas(input, { allowTaint: true, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg'); // Use JPEG format

      const pdf = new jsPDF('p', 'mm', 'a4'); // Portrait, millimeters, A4 size
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('code-example.pdf');
    });
  };

  const chartData = formData?.csv || []; // Use formData.csv if available, otherwise an empty array




    return (

<>






        <div id='pdf-content'>
        <button onClick={generatePdf}>Generate pdf</button>

            
        <div  className="max-w-screen-xl mx-auto px-4 md:px-8">
           <div className="max-w-lg grid gap-5 lg:grid-cols-2">
               <div className=' shadow-md p-3 rounded-lg'>
                <p className='text-gray-400'>Project Name </p>
                <h1 className='text-3xl font-bold text-green-500'>{formData?.name}</h1>



               </div>
               <div className=' shadow-md p-3 rounded-lg'>
                <p className='text-gray-400'>Project Description </p>
                <h1 className='text-3xl font-bold '>{formData?.projectDescription}</h1>



               </div>
               <div className=' shadow-md p-3 rounded-lg'>
                <p className='text-gray-400'>Client : </p>
                <h1 className='text-3xl font-bold text-green-500'>{formData?.client}</h1>



               </div>
               <div className=' shadow-md p-3 rounded-lg'>
                <p className='text-gray-400'>Project Description </p>
                <h1 className='text-3xl font-bold '>{formData?.Contactor}</h1>



               </div>

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
                            <th className="py-3 px-6">Kp</th>
                            <th className="py-3 px-6">X</th>
                            <th className="py-3 px-6">Y</th>
                            <th className="py-3 px-6">Z</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            formData?.csv?.map((item, idx) => (

                                
                                <tr key={idx} className="divide-x">
                                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                                        <span>{idx + 1}</span>
                                        {item.KP}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.X}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.Y}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.Z}</td>
                                </tr>



                                
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div></div></>
    );
};

export default Result;