import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>home page</h1>
      <Link to="posts">see latest posts</Link>
    </div>
  );
}

export default Home;
