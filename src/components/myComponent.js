import '../components/myComponent.scss';
import { useEffect, useState} from "react";
import axios from 'axios';
import moment from 'moment/moment';

function MyComponent(props) {
    const[data, setData] = useState([])
    
    useEffect(() => {
        const limit = props.limit
        const baseURL = ("https://npm-trends-proxy.uidotdev.workers.dev/s/related?search_query%5B%5D=angular&search_query%5B%5D=react&search_query%5B%5D=vue&limit="+limit);
        if (limit <= 0 || limit > 50){
            alert('1<=limit<=50')

            return;
        }
        axios.get(baseURL)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[props.limit])
    return (
        <div>
        <table>
            <thead><tr>
            <th>slug</th>
            <th>view_count</th>
            <th>search_count</th>
            <th>created_at</th>
            <th>updated_at</th>
        </tr></thead>
            <tbody>
            {/* {console.log(data)} */}
            {data.map((id, index) =>{
                id.created = moment(id.created_at).format("DD/MM/YYYY")
                id.updated = moment(id.updated_at).format("DD/MM/YYYY")
                return (<tr key={index}>
            <td>{id.slug}</td>
            <td>{id.view_count}</td>
            <td>{id.search_count}</td>
            <td>{id.created}</td>
            <td>{id.updated}</td>
        </tr>)
            })}
            </tbody>
        </table></div>
    )
}
export default MyComponent;