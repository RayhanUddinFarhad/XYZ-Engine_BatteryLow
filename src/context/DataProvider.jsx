import { createContext, useState } from "react";


export const DataContext = createContext()
const DataProvider = ({children}) => {
    const [formData , setFormData] = useState({})
    return (

        <DataContext.Provider value={{formData, setFormData}}>
            {children}
        </DataContext.Provider>
    
    );
};

export default DataProvider;