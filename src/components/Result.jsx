import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const Result = () => {

const {formData} = useContext(DataContext)

console.log(formData);



    return (
        <div>
            
        </div>
    );
};

export default Result;