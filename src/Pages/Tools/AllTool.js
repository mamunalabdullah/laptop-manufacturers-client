import React, { useEffect, useState } from 'react';
import PurchaseTool from './PurchaseTool';
import SingleTool from './SingleTool';

const AllTool = () => {
    const [tools, setTools] = useState([]);
    const [item, setItem] = useState(null);
    useEffect( () => {
        fetch(`http://localhost:5000/tool`)
        .then(res =>  res.json())
        .then(data =>  setTools(data))
    }, []);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-20'>
            {
                tools.map(tool => <SingleTool tool={tool} key={tool._id} setItem={setItem} />)
            }
            </div>
            {item && <PurchaseTool item={item}></PurchaseTool>}
        </div>
    );
};

export default AllTool;