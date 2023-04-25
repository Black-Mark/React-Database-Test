import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpView = () => {
    const{empid}=useParams();
    const [currentView, setCurrentView] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/users/"+empid).then((res)=>{
            return res.json();
        }).then((resp)=>{
            setCurrentView(resp);
        }).catch((err)=>{
            console.log(err.message);
        })
    }, [])
    return (
        <div>
            { currentView &&
            <div>
                <h2>The Employee Name is: {currentView.name} ({currentView.id})</h2>
                <h3>Status: {currentView.isActive ? (<span>Active</span>) : (<span>Not Active</span>) }</h3>
                <h3>Contact Details:</h3>
                <p>Email: {currentView.email}</p>
                <p>Phone: {currentView.phone}</p>
            </div>
            }
            <div>
                <Link to={'/'} className="btn btn-danger">Back to Listing</Link>
            </div>
        </div>
    );
}
 
export default EmpView;