import '../components/myComponent.scss';
import { useEffect, useState} from "react";
import axios from 'axios';
const baseURL = "https://npm-trends-proxy.uidotdev.workers.dev/npm/downloads/point/last-week/react";
function MyComponent() {
    const[data, setData] = useState([])
    useEffect(() => {
        axios.get(baseURL)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])
    return (
        <div>
        <h1>Reactjs</h1>
        <table>
            <thead><tr>
            <th>Downloads</th>
            <th>Start</th>
            <th>End</th>
        </tr></thead>
            <tbody>
            {[data].map((item, index) =>{
                return (<tr key={index}>
            <td>{item.downloads}</td>
            <td>{item.start}</td>
            <td>{item.end}</td>
        </tr>)
            })}
            </tbody>
        </table></div>
    )
}
export default MyComponent;