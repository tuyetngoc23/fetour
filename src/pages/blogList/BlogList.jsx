import React, { useEffect } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import './blogList.css'
import axios from 'axios';

function BlogList() {
    //get List Blog
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/blog`)
            .then(res => {
                setBlogs(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleDelete = (id) => {
        axios.post(`http://localhost:9090/blog/delete/${id}`)
            .then(res => {
                axios
                    .get(`http://localhost:9090/blog`)
                    .then(res => {
                        setBlogs(res.data)
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
            field: "blog",
            headerName: "blog",
            width: 250,
            renderCell: (params) => {
                return (
                    <div className="blogListItem">
                        <img className="blogListImg" src={`${process.env.PUBLIC_URL}/asset/images/${params.row.image}`} alt="" />
                        {params.row.title}
                    </div>
                );
            },
        },
        { field: "wname", headerName: "Write Name", width: 200 },
        {
            field: "content",
            headerName: "Content",
            width: 200,
        },
        {
            field: "wdate",
            headerName: "Date",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/blog/" + params.row.id}>
                            <button className="blogListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="blogListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="blogList">
            <Link to="/newBlog">
                <button className="blogAddButton">Create</button>
            </Link>
            <DataGrid
                rows={blogs}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}

export default BlogList
