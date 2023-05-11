import React, { useState, useEffect } from "react";
import PostService from "../services/PostService";
// import UpdatModel from "./UpdatModel";
import Qoute1 from "../image/qoute/double.png";
import Qoute2 from "../image/qoute/quot.png";
import Navbar from "./navbar/Navbar";
import "../App.css";
import Card from "./card/Card";
// import Card from "../components/card";

const TestShow = () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
      setPosts(await PostService.getPosts());
    };

    useEffect(() => {
      fetchPosts();
    }, [posts]);

    //delete post

    // const deletepost = async (id, e) => {
    //   var response = await PostService.deletePosts(id);
    //   if (response.data.success === true) {
    //     alert(response.data.msg);
    //     document.getElementById(id).parentElement.parentElement.remove();
    //   } else {
    //     alert(response.data.msg);
    //   }
    // };

  return (
    <div>
      <Navbar />

      <div className="backgroundimage  position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 position-absolute  top-50 start-50 translate-middle display-4 fw-bolder text-white text-center ">
              <span>
                <img className="qoutee w-5 mb-5" src={Qoute2} alt="myimage" />
              </span>
              The world is a book and those who do not travel read only one
              page.
              <span>
                <img className="qoutee mb-4" src={Qoute1} alt="myimage" />
              </span>
            </div>
          </div>
        </div>
      </div>
    <Card/>
      <h1>Posts</h1>
      {posts.data !== undefined && posts.data.data.length > 0 && (
        <table style={{ width: "100%" }} border="1">
          <thead>
            <th>Title</th>
            <th>Date</th>
            <th>Image</th>
      </thead>
          <tbody>
            {posts.data.data.map((posts) => (
              <tr>
                <td>{posts.title}</td>
                <td>{posts.date}</td>
                <td>
                  <img
                    src={"http://localhost:8000/api/postImages/" + posts.image}
                    style={{ width: "100px", height: "100px" }}
                    alt=""
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )} 
    </div>
  );
};

export default TestShow;
