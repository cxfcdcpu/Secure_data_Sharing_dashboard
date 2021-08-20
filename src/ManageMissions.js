import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ManageMissions.css';

function ManageMissions() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/ReVo_webtest/Missions")
            .then(res => res.json())
            .then(result => setItems(result))
    }, []);

    return (
        <div className="MissionManagement">
            <div>Mission Management Page</div>
            <div>
                <ul>
                    {items.map(item => (
                        <li>
                            <Link className="item" to={{pathname:"/updateMission", state: { missionName: item.MissionName, missionCap: item.MissionCapacity, missionCode: item.MissionCode, startTime: item.StartTime, endTime: item.EndTime}}}> {item.MissionName}, Capacity: {item.MissionCapacity}, Mission Code: {item.MissionCode} </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ManageMissions;