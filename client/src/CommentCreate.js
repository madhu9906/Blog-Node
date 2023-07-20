import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };

  return (
    <div className="card p-3">
      <form onSubmit={onSubmit}>
        <div>
          <label className="font-weight-bold">New Comment</label>
          <br />
          <input value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button className="btn btn-primary my-2">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
