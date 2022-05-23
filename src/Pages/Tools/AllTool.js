import React, { useEffect, useState } from 'react';
import useTools from '../../Hooks/useTools';
import PurchaseTool from './PurchaseTool';
import SingleTool from './SingleTool';

const AllTool = () => {
    const [tools, setTools] = useTools();
    const [item, setItem] = useState(null);
    
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