import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const EmpEdit = () => {
    const{empid}=useParams();
    const navigate = useNavigate();

    const [currentEdit, setCurrentEdit] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/users/"+empid).then((res)=>{
            return res.json();
        }).then((resp)=>{
            setId(resp.id);
            setName(resp.name);
            setEmail(resp.email);
            setPhone(resp.phone);
            setIsActive(resp.isActive);
        }).catch((err)=>{
            console.log(err.message);
        })
    }, [])

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isActive, setIsActive] = useState(true);

    const [validation, setValidation] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const userCreateData = { id, name, email, phone, isActive };

        fetch("http://localhost:8000/users/"+empid, {
            method: "PUT",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(userCreateData)
        }).then((res)=>{
            alert('Saved Successfully!');
            navigate("/");
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handleSubmit}>
                    <div className="card" style={{"textAlign": "left"}}>
                        <div className="card-title">
                            <h2>Employee Edit</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} className="form-control" disabled="disabled" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required onMouseDown={e=>setValidation(true)} value={name} onChange={e=>setName(e.target.value)} className="form-control" />
                                        { name.length==0 && validation && <span className="text-danger">Enter Name</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input required value={email} onChange={e=>setEmail(e.target.value)} className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input required value={phone} onChange={e=>setPhone(e.target.value)} className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-check">
                                        <input checked={isActive} onChange={e=>setIsActive(e.target.checked)} type="checkbox" className="form-check-input" />
                                        <label className="form-check-label">Is Active</label>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <button className="btn btn-success" type="submit">Save</button>
                                        <Link to="/" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default EmpEdit;