import React, { useEffect, useState } from 'react';
import ToolCard from './ToolCard';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect( () => {
        fetch(`tools.json`)
        .then(res =>  res.json())
        .then(data =>  setTools(data))
    }, []);
    return (
        <div>
            <h4 className='text-xl text-center text-primary font-bold mt-20 uppercase'>Tools we Provide</h4>
            <p className='text-5xl text-center font-bold'>Order to Purchase</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-20'>
            {
                tools.map(tool => <ToolCard tool={tool} key={tool._id}/>)
            }
            </div>
        </div>
    );
};

export default Tools;