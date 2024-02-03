import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Welcome Home</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Products</Link>
    </div>
  );
};

export default Home;
