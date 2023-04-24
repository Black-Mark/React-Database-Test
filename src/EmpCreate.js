import { useState } from "react";
import { Link } from "react-router-dom";

const EmpCreate = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isActive, setIsActive] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id, name, email, phone, isActive);
    }

    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handleSubmit}>
                    <div className="card" style={{"textAlign": "left"}}>
                        <div className="card-title">
                            <h2>Employee Create</h2>
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
                                        <input value={name} onChange={e=>setName(e.target.value)} className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={e=>setEmail(e.target.value)} className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input value={phone} onChange={e=>setPhone(e.target.value)} className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-check">
                                        <input checked={isActive} onChange={e=>setIsActive(e.target.value)} type="checkbox" className="form-check-input" />
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
 
export default EmpCreate;