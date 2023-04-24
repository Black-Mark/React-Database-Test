import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EmpListing = () => {
    const [usersData, setUsersData] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8000/users").then((res)=>{
            return res.json();
        }).then((resp)=>{
            setUsersData(resp);
        }).catch((err)=>{
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h1>Employee Listing</h1>
                </div>
                <div className="card-body">

                    <div>
                        <Link to="employee/create" className="btn btn-success">Add New </Link>
                    </div>

                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {   usersData &&
                                usersData.map(userData=>(
                                    <tr key={userData.id}>
                                        <td>{userData.id}</td>
                                        <td>{userData.name}</td>
                                        <td>{userData.email}</td>
                                        <td>{userData.phone}</td>
                                        <td>
                                            <a href="#" className="btn btn-success">Edit</a>
                                            <a href="#" className="btn btn-danger">Remove</a>
                                            <a href="#" className="btn btn-primary">View</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
 
export default EmpListing;