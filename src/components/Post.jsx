import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => {
            deletePost(post.id);
          }}
        >
          <MdDelete />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <button type="button" className="btn btn-primary hashtag" key={tag}>
            {tag}
          </button>
        ))}
        <div className="alert alert-success reactions" role="alert">
          <AiOutlineLike /> : {post.reactions.likes}
        </div>
        <div className="alert alert-primary" role="alert">
          <AiOutlineDislike /> : {post.reactions.dislikes}
        </div>
      </div>
    </div>
  );
};

export default Post;
