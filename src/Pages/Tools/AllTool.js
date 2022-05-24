import React from 'react';
import useTools from '../../Hooks/useTools';
import SingleTool from './SingleTool';

const AllTool = () => {
    const [tools] = useTools();
   
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-20'>
            {
                tools.map(tool => <SingleTool tool={tool} key={tool._id} />)
            }
            </div>
        </div>
    );
};

export default AllTool;