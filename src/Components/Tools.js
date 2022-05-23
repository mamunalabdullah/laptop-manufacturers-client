import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PurchaseTool from '../Pages/Tools/PurchaseTool';
import ToolCard from './ToolCard';

const Tools = () => {
    const [tools, setTools] = useState([]);
    const [item, setItem] = useState(null);
    useEffect( () => {
        fetch(`http://localhost:5000/tool`)
        .then(res =>  res.json())
        .then(data =>  setTools(data))
    }, []);
    return (
        <div>
            <h4 className='text-xl text-center text-primary font-bold mt-20 uppercase'>Tools we Provide</h4>
            <p className='text-5xl text-center font-bold'>Order to Purchase</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
            {
                tools.slice(0,6).map(tool => <ToolCard tool={tool} key={tool._id} setItem={setItem}/>)
            }
            </div>
            {item && <PurchaseTool item={item}></PurchaseTool>}
            <div className='text-center py-5 '>
            <button className='btn btn-secondary px-20'><Link to="/alltool">See All</Link></button>
            </div>
        </div>
    );
};

export default Tools;