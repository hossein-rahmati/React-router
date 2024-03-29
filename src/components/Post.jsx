import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

const posts = [
  { id: 1, title: "Title one", body: "Body one" },
  { id: 2, title: "Title two", body: "Body two" },
  { id: 3, title: "Title three", body: "Body three" },
];

function Post() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("category"));
  // id => fetch on backend => find data based on id

  const post = posts.find((p) => p.id === Number(id));
  return (
    <div>
      <h1>single Post</h1>
      <div>post id: {id}</div>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <Link to="/app/posts">Go to posts</Link>
      <button onClick={() => setSearchParams({ name: "hossein" })}>
        update query
      </button>
    </div>
  );
}

export default Post;
