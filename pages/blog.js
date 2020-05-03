import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import { posts } from "../posts";
import Footer from "../components/Footer";

export function getStaticProps() {
  return {
    props: {
      posts: posts.map((post) => ({
        ...post,
        url: `${new Date(post.date).getFullYear()}/${post.id}`,
      })),
    },
  };
}

const blog = ({ posts }) => {
  return (
    <>
      <Header />
      <div>
        <p>Here are the current posts: </p>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <span>{post.date}</span>
              <Link href={post.url}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default blog;
