import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PostService from "../services/PostService";

const UpdatModel = (props) => {
  const [isShow, invokeModal] = useState(false);

  const initModal = () => {
    return invokeModal(!isShow);
  };

  //form updation data
  const [title, setTitle] = useState(props.title);
  const [date, setDate] = useState(props.date);
  const [id, setId] = useState(props.id);
  const [selectedFile, setSelectedFile] = useState("");

  const handlesubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", title);
    formData.append("date", date);
    if (selectedFile !== "" && selectedFile.length !== 0) {
      formData.append("image", selectedFile);
    }
    const response = await PostService.updatePosts(formData);
    if (response.data.success === true) {
      alert(response.data.msg);
    } else {
      alert(response.data.msg);
    }
    initModal();
  };

  return (
    <div>
      <Button variant="success" onClick={initModal}>
        Edit
      </Button>

      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <form onSubmit={handlesubmit}>
          <Modal.Body>
            <input
              type="text"
              name="title"
              placeholder="Enter Post Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
            <br></br>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
            <br></br>
            <input
              type="file"
              name="file"
              //   value={date}
              onChange={(event) => setSelectedFile(event.target.files[0])}
            />
            <br></br>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={initModal}>
              close
            </Button>
            <Button type="submit" variant="success">
              update
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default UpdatModel;
