import React, { useState, useEffect } from "react";
import PostService from "../services/PostService";
import UpdatModel from "./UpdatModel";
import Add from "./Add";
import { Button } from "react-bootstrap";

const ShowComponents = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    setPosts(await PostService.getPosts());
  };

  useEffect(() => {
    fetchPosts();
  }, [posts]);

  //delete post

  const deletepost = async (id, e) => {
    var response = await PostService.deletePosts(id);
    if (response.data.success === true) {
      alert(response.data.msg);
      document.getElementById(id).parentElement.parentElement.remove();
    } else {
      alert(response.data.msg);
    }
  };

  // console.log(posts.data);
  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <button type="button" class="btn btn-success">
          <Add/>
        </button>
      </div>

      <h1>Posts</h1>
      {posts.data !== undefined && posts.data.data.length > 0 && (
        <table style={{ width: "100%" }} border="0">
          <thead>
            <th>Title</th>
            <th>Description</th>
            {/* <th>Date</th> */}
            <th>Image</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {posts.data.data.map((posts) => (
              <tr>
                <td>{posts.title}</td>

                <td>{posts.desc}</td>
                {/* <td>{posts.date}</td> */}
                <td>
                  <img
                    src={"http://localhost:8000/api/postImages/" + posts.image}
                    style={{ width: "50px", height: "50px" }}
                    alt=""
                  />
                </td>
                <div className="col-6 mt-3">
                  <td>
                    <div className="d-flex justify-content-center ">
                      <button
                        className="btn btn-primary"
                        id={posts._id}
                        onClick={(e) => deletepost(posts._id, e)}
                      >
                        Delete
                      </button>
                    {/* </div>
                    <div> */}
                      <UpdatModel id={posts._id} title={posts.title} />
                    </div>
                  </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowComponents;
