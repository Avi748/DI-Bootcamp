import { addPost } from "./postsSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
const AddPostForm = (props) => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  
  const handleAddPosts = (e) => {
    e.preventDefault()
    dispatch(addPost(title, content));
    setTitle("");
    setContent("");
};

  return(
    <>
      <h1>Add Post</h1>
      <form>
          <div>
              <h3>Post Title</h3>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div>
              <h3>Post Content</h3>
              <input type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
          </div>
          <div>
          <button onClick={handleAddPosts}>Save Post</button>
          </div>
      </form>
    </>
  );

}

export default AddPostForm