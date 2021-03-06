import "./tourList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import NumberFormat from "react-number-format";
// import { useDispatch } from "react-redux";

function TourList() {

    const [tours, setTours] = useState([])
    // const [tourDis, setTourDis] = useState()
    // const dispatchTour = useDispatch();
    // const [data, setData] = useState(productRows);
    useEffect(() => {
        axios
            .get(`http://localhost:9090/tour`)
            .then(res => {
                setTours(res.data)
                // dispatchTour({
                //     type: "GET_TOUR",
                //     payload: res.data
                // })
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    // const loadTour = (id) => {
    //     axios
    //        .get(`http://localhost:9090/tour/${id}`)
    //        .then(res => {
    //            console.log(res.data);
    //            dispatchTour({
    //                type: "GET_TOUR",
    //                payload: res.data
    //            })
    //        })
    //        .catch(err => {
    //            console.log(err);
    //        })
    // }
    


    const handleDelete = (id) => {
        axios.post(`http://localhost:9090/tour/delete/${id}`)
            .then(res => {
                console.log("delete success");
                axios
                    .get(`http://localhost:9090/tour`)
                    .then(res => {
                        setTours(res.data)
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })

    };
    // let tourDis = [];
    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        {
            field: "name",
            headerName: "Name",
            width: 350,
            renderCell: (params) => {
                return (
                    <div className="tourListItem">
                        <img className="tourListImg" src={`${process.env.PUBLIC_URL}/asset/images/${params.row.image}`} alt="img tour" />
                        {params.row.name}
                    </div>
                );
            },
        },
        {
            field: "price",
            headerName: "Price",
            width: 160,
            renderCell: (params) => {
                return (
                    <div className="tourListItem">
                        <NumberFormat value={params.row.price} suffix="VN??" thousandSeparator={true} thousandsGroupStyle="thousand" displayType="text" />
                    </div>
                );
            }
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell:  (params) => {
                return (
                    <>
                        <Link to={`/tour/${params.row.id}`}>
                            <button className="tourListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="tourListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];
    // console.log(tourDis);

    return (
        <div className="tourList">
            <div className="tourTitleContainer">
                <h1 className="tourTitle">Tour</h1>
                <Link to="/newtour">
                    <button className="tourAddButton">Create</button>
                </Link>
            </div>
            <DataGrid
                rows={tours}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}
export default TourList