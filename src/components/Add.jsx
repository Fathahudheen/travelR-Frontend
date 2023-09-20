import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PostService from "../services/PostService";

const Add = () => {
  const [isShow, invokeModal] = useState(false);

  const initModal = () => {
    return invokeModal(!isShow);
  };

  //form updation data
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("desc", desc);
    formdata.append("date", date);
    formdata.append("image", image);

    const response = await PostService.create(formdata);
    console.log(response);

    if (response.data.success === true) {
      setMessage("Post created Successfully");
    } else {
      setMessage("Post failed!");
    }
    setTimeout(() => {
      setMessage("");
    }, 2000);
    event.target.reset();
  };

  return (
    <div>
    <Button variant="success" onClick={initModal}>
      Add +
    </Button>

    <Modal show={isShow}>
      <Modal.Header closeButton onClick={initModal}>
        <Modal.Title>Add Post</Modal.Title>
      </Modal.Header>
      {/* <form onSubmit={handleSubmit}> */}
        <Modal.Body>
        {/* <div className="form-group">
          <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input
              type="text"
              name="title"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="title"
              placeholder="Enter Post Title"
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </div>

          <label for="exampleInputEmail2">Post Description</label>

          <input
            type="text"
            name="desc"
            class="form-control"
            id="exampleInputEmail2"
            aria-describedby="title"
            placeholder="Enter Post Description"
            onChange={(event) => setTitle(event.target.value)}
            required
          />

          <input
            type="file"
            name="image"
            onChange={(event) => setImage(event.target.files[0])}
          />
        </div> */}
              <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter Post Title"
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <br></br>
        <input
          type="text"
          name="desc"
          placeholder="Enter Post Description"
          onChange={(event) => setDesc(event.target.value)}
          required
        />
        <br></br>

        {/* <input
          type="date"
          name="date"
          defaultValue={new Date()}
          onChange={(event) => setDate(event.target.value)}
          required
        /><br></br> */}
        <input
          type="file"
          name="image"
          onChange={(event) => setImage(event.target.files[0])}
          // required
        />
        <br></br>
        {/* <button>Submit</button> */}
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            close
          </Button>
          <Button type="submit" variant="success">
            Post
          </Button>
        </Modal.Footer>

      <p>{message}</p>

      </form>

        </Modal.Body>
      {/* </form> */}
    </Modal>
  </div>

  );
};

export default Add;
