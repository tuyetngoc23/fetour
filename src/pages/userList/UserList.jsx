import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([])
  const [isNot, setIsNot] = useState(true)
  // const dsUser = async () => {
  //   await axios
  //     .get(`http://localhost:9090/user/list`)
  //     .then(res => {
  //       setUsers(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }
  useEffect(() => {
    axios
      .get(`http://localhost:9090/user/list`)
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  // console.log(users);

  const notUser2 = users.filter(item => item.state === false);

  const handleDelete = (id) => {
    notUser2.map((item) => {
      if(item.id === id){
        setIsNot(false);
        alert("Đã xóa")
      }
    })
    if(isNot){
      axios.post(`http://localhost:9090/user/delete/${id}`)
    .then(res => {
      console.log("delete success");
      axios
      .get(`http://localhost:9090/user/list`)
      .then(res => {
        setUsers(res.data)
        setIsNot(true)
      })
      .catch(err => {
        console.log(err);
      })
    })
      .catch(err => {
        console.log(err);
      })
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={`${process.env.PUBLIC_URL}/asset/images/${params.row.avatar}`} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 200 },
    {
      field: "state",
      headerName: "Status",
      width: 120,
      renderCell: (param) => {
        if (param.row.state === true) {
          return "active"
        }else{
          return "passive"
        }
      }
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link> */}
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
