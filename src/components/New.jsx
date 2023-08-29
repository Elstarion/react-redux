import { useDispatch } from "react-redux";
import { newPost } from "../store/actions";
import { useState } from "react";

export const New = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState("Jonathan Willford");
  const [authorPhoto, setAuthorPhoto] = useState("");
  const [postPhoto, setPostPhoto] = useState("");
  const [postText, setPostText] = useState("");

  function handleInputChange(e) {
    const { id, value } = e.target;
    if (id === "authorPhoto") {
      setAuthorPhoto(value);
    }
    if (id === "postText") {
      setPostText(value);
    }
    if (id === "postPhoto") {
      setPostPhoto(value);
    }
    if (id === "authorSelect") {
      setAuthor(value);
    }
  }

  function currentDate() {
    const currentDate = new Date();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();

    return `${day} ${monthNames[monthIndex]}, ${year}`;
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      newPost({
        author: `${author}`,
        authorPhoto: `${authorPhoto}`,
        authorNickname: `@${author}`.replace(/\s+/g, ""),
        date: currentDate(),
        postText: `${postText}`,
        postPicture: `${postPhoto}`,
        likes: "4.6M",
        comments: "221K",
        shares: "649.7K",
      })
    );

    setAuthorPhoto("");
    setPostPhoto("");
    setPostText("");
    alert("New post published");
  }

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <h2>New post</h2>
        <select id="authorSelect" value={author} onChange={handleInputChange}>
          <option value="Jonathan Willford">Jonathan Willford</option>
          <option value="Adela Tage">Adela Tage</option>
          <option value="Eugene Tackleberry">Eugene Tackleberry</option>
        </select>
        <input
          id="authorPhoto"
          type="text"
          placeholder="Author photo URL"
          value={authorPhoto}
          onChange={handleInputChange}
        />
        <input
          id="postPhoto"
          type="text"
          placeholder="Post photo URL"
          value={postPhoto}
          onChange={handleInputChange}
        />
        <textarea
          value={postText}
          onChange={handleInputChange}
          id="postText"
          name="postContent"
          placeholder="Post text"
          rows={4}
          cols={40}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
