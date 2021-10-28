import React, { useEffect } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import './cattourList.css'
import axios from 'axios';

function CattourList() {

    //get cattour
    const [cat, setCat] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/cat`)
            .then(res => {
                setCat(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleDelete = (id) => {
        axios.post(`http://localhost:9090/cat/delete/${id}`)
        .then(res => {
            axios
            .get(`http://localhost:9090/cat`)
            .then(res => {
                setCat(res.data)
            })
            .catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        })
    };

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        {
            field: "cattour",
            headerName: "cattour",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cattourListItem">
                        {params.row.name}
                    </div>
                );
            },
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        {/* <Link to={"/cattour/" + params.row.id}>
                            <button className="cattourListEdit">Edit</button>
                        </Link> */}
                        <DeleteOutline
                            className="cattourListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="cattourList">
            <Link to="/newCattour">
                <button className="cattourAddButton">Create</button>
            </Link>
            <DataGrid
                rows={cat}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}

export default CattourList
