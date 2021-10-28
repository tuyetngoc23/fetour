import './placeList.css'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function PlaceList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:9090/place/list`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleDelete = (id) => {
        axios.post(`http://localhost:9090/place/delete/${id}`)
        .then(res => {
            axios
            .get(`http://localhost:9090/place/list`)
            .then(res2 => {
                setData(res2.data)
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
            field: "place",
            headerName: "Place",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="placeListItem">
                        <img className="placeListImg" src={`${process.env.PUBLIC_URL}/asset/images/${params.row.image}`} alt="img" />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: "address", headerName: "Address", width: 200 },
        {
            field: "description",
            headerName: "Description",
            width: 200,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/place/" + params.row.id}>
                            <button className="placeListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="placeListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="placeList">
            <Link to="/newplace">
              <button className="placeAddButton">Create</button>
            </Link>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}
