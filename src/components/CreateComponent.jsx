import React, { useState } from "react";
import PostService from "../services/PostService";

const CreateComponent = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formdata = new FormData();
    formdata.append('title',title);
    formdata.append('desc',desc);
    formdata.append('date',date);
    formdata.append('image',image);

     const response =  await PostService.create(formdata);
     console.log(response);

    if(response.data.success === true){
        setMessage('Post created Successfully')
    }
    else{
        setMessage('Post failed!')
    }
    setTimeout(()=>{
        setMessage('')
    },2000)
     event.target.reset();

  };

  return (
    <div>
        <h1>Create Post</h1>
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
          required
        />
        <br></br>
        <button>Submit</button>
       

      </form>
       <p>{message}</p>
    </div>
  );
};

export default CreateComponent;
