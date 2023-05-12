import React, { useState, useEffect } from "react";
import Imag1 from "../../image/sreehar.jpg";
import PostService from "../../services/PostService";

const Card = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    setPosts(await PostService.getPosts());
  };

  useEffect(() => {
    fetchPosts();
  }, [posts]);

  return (
    <>
      {posts.data !== undefined && posts.data.data.length > 0 && (
        <div className="container-fluid ">
          <div className="row mt-5 mb-4 pt-md-5">
            <div className="fw-bolder fs-2 text-center">
              Check out these EPIC Destinations!
            </div>
          </div>
          <div className="row mb-5">
            <div className="dflex">
              {posts.data.data.map((posts) => (
                <div className="card  cardstyle mt-sm-4 mt-md-4">
                  <img src={"http://localhost:8000/api/postImages/" + posts.image} className="card-img-top" alt="any" />
                  <div className="card-body">
                    <h5 className="card-title">{posts.title}</h5>
                    <p className="card-text">{posts.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <h1>Posts</h1>
          {posts.data !== undefined && posts.data.data.length > 0 && (
            <table style={{ width: "100%" }} border="1">
              <thead>
                <th>Title</th>
                <th>desc</th>
                <th>Image</th>
              </thead>
              <tbody>
                {posts.data.data.map((posts) => (
                  <tr>
                    <td>{posts.title}</td>
                    <td>{posts.desc}</td>
                    <td>
                      <img
                        src={
                          "http://localhost:8000/api/postImages/" + posts.image
                        }
                        style={{ width: "100px", height: "100px" }}
                        alt=""
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )} */}
        </div>
      )}
    </>
  );
};

export default Card;
