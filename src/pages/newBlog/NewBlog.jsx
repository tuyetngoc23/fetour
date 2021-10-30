import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router';
import './newBlog.css'

function NewBlog() {
    const history = useHistory();
    const handleSaveBlog = (e) => {
        e.preventDefault();
        let title = document.getElementById("title").value
        let wname = document.getElementById("wname").value
        let content = document.getElementById("content").value
        let file= document.getElementById("file").files[0]
        let saveBlog = async () => {
            const formData = new FormData();
            formData.append("wdate", new Date());
            formData.append("title", title);
            formData.append("wname", wname);
            formData.append("content", content)
            formData.append("file", file)
            formData.append("image", "avatar-meo3.jpg")
            formData.append("state", 1)
            formData.append("usertour.id", 5)
            formData.append("like_amount", 0);
            await axios.post(`http://localhost:9090/blog/insert`, formData, {
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
        <div className="newBlog">
          <h1 className="addBlogTitle">New Blog</h1>
          <form className="addBlogForm" onSubmit={handleSaveBlog}>
            <div className="addBlogItem">
              <label>Image</label>
              <input type="file" id="file" />
            </div>
            <div className="addBlogItem">
              <label>Title</label>
              <input type="text" id="title" />
            </div>
            <div className="addBlogItem">
              <label>Write Name</label>
              <input type="text" id="wname" />
            </div>
            <div className="addBlogItem">
              <label>Content</label>
              <textarea row={10} id="content"></textarea>
            </div>
            <button className="addBlogButton" type="submit">Create</button>
          </form>
        </div>
    )
}

export default NewBlog
