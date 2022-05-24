import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useSingleTool = () => {
    const [tool, setTool] = useState([]);
    const [isReload, setIsReload] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/tool/${id}`)
            .then(res => res.json())
            .then(data => {
                setTool(data)
                setIsReload(data)
            });
    }, [id, isReload])
    return [tool, setTool];
}
export default useSingleTool;