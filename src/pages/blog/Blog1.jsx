import React, { useEffect, useState } from 'react'
import "./blog.css";
// import Chart from "../../components/chart/Chart"
import { Publish } from "@material-ui/icons";
import { useHistory, useParams } from 'react-router';
import axios from 'axios';

function Blog1() {
    const {id} = useParams();
    //getBlog
    const [blog, setBlog] = useState({});
    useEffect(() => {
        axios
            .get(`http://localhost:9090/blog/${id}`)
            .then(res => {
                setBlog(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    const history = useHistory();
    const handleSaveBlog = (e) => {
        e.preventDefault();
        let title = document.getElementById("title").value
        let wname = document.getElementById("wname").value
        let content = document.getElementById("content").value
        let file= document.getElementById("file").files[0]
        let saveBlog = async () => {
            const formData = new FormData();
            formData.append("id", id);
            formData.append("wdate", new Date());
            formData.append("title", title);
            formData.append("wname", wname);
            formData.append("content", content)
            formData.append("file", file)
            formData.append("image", "avatar-meo3.jpg")
            formData.append("state", 1)
            formData.append("usertour.id", 5)
            formData.append("like_amount", 0);
            await axios.post(`http://localhost:9090/blog/update`, formData, {
                headers:{ "Content-Type": "multipart/form-data"}
            }) 
        }
        if(title != null & title !== "" & wname != null & wname !== "" & content != null & content !== "" & file != null){
            saveBlog();
            console.log("save blog");
            history.push("/blogs")
        }else{
            alert("Vui long nhap day du thong tin")
        }
       
    }

    return (
        <div className="blog">
          <div className="blogTitleContainer">
            <h1 className="blogTitle">Blog</h1>
            
          </div>
          <div className="blogTop">
              {/* <div className="blogTopLeft">
                  <Chart data={blogData} dataKey="Sales" title="Sales Performance"/>
              </div> */}
              <div className="blogTopRight">
                  <div className="blogInfoTop">
                      <img src={`${process.env.PUBLIC_URL}/asset/images/${blog.image}`} alt="img" className="blogInfoImg"/>
                      <span className="blogName">{blog.title}</span>
                  </div>
                  <div className="blogInfoBottom">
                      <div className="blogInfoItem">
                          <span className="blogInfoKey">Write Name: </span>
                          <span className="blogInfoValue">{blog.wname}</span>
                      </div>
                      <div className="blogInfoItem">
                          <span className="blogInfoKey">Like: </span>
                          <span className="blogInfoValue">{blog.like_amount}</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="blogBottom">
              <form className="blogForm" onSubmit={handleSaveBlog}>
                  <div className="blogFormLeft">
                      <label>Blog Name</label>
                      <input type="text" placeholder={blog.title} id="title"/>
                      <label>Write Name</label>
                      <input type="text" id="wname"/>
                      <label>Content</label>
                      <textarea rows={10} id="content"></textarea>
                  </div>
                  <div className="blogFormRight">
                      <div className="blogUpload">
                            <img src={`${process.env.PUBLIC_URL}/asset/images/${blog.image}`} alt="img" className="blogUploadImg"/>
                          <label htmlFor="file">
                              <Publish/>
                          </label>
                          <input type="file" id="file" />
                      </div>
                      <button className="blogButton" type="submit">Update</button>
                  </div>
              </form>
          </div>
        </div>
      );
}

export default Blog1
