import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
    const [data, setdata] = useState([]);
    const [tabledark,setTableDark]=useState('')

    function getdata() {
        axios.get('https://632eb541b7314fc02f48d2d2.mockapi.io/crud-utube')
            .then((res) => {
                console.log(res.data)
                setdata(res.data)
            })

    }
    function handleDelet(id) {
        axios.delete(`https://632eb541b7314fc02f48d2d2.mockapi.io/crud-utube/${id}`)
            .then(() => {
                getdata();
            })
    }

    const SetToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }

    useEffect(() => {
        getdata();
    }, [data]);

    return (
        <>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox"
                onClick={()=>{
                    if(tabledark === 'table-dark')setTableDark("")
                    else setTableDark("table-dark")
                }} />
            </div>
            <div className='d-flex justify-content-between'>
                <h2>Read Operation</h2>
                <Link to="/">
                    <button className='btn btn-secondary'>Create</button>
                </Link>
            </div>
            <table className={`table ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {
                    data.map((eachdata) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{eachdata.id}</th>
                                        <td>{eachdata.name}</td>
                                        <td>{eachdata.email}</td>
                                        <td><Link to="/update"><button className='btn-success' onClick={() => SetToLocalStorage(eachdata.id, eachdata.name, eachdata.email)}>Edit</button></Link></td>
                                        <td><button className='btn-danger' onClick={() => handleDelet(eachdata.id)}>Delet</button></td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })
                }

            </table>
        </>
    )
}

export default Read