import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const history = useNavigate();

    const header = { "Access-Control-Allow-Origin": "*" }

    const HandleSubmit = (e) => {
        e.preventDefault();
        axios.post(
            'https://632eb541b7314fc02f48d2d2.mockapi.io/crud-utube',
            {
                name: name,
                email: email,
                header,
            }
        )
            // history("/read")
            .then(() => {
                history("/read")
            })

    }
    return (
        <>
            <div className='d-flex justify-content-between'>
                <h2>Create form</h2>
                <Link to="/read">
                    <button className='btn btn-primary'>Show Data</button>
                </Link>
            </div>
            <form>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={(e) => setemail(e.target.value)} className="form-control" aria-describedby="emailHelp" />
                </div>
                {name}
                {email}
                <button type="submit" onClick={HandleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Create;