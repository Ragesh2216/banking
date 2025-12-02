import React from "react";
import Readcard from "./Readcard";
import data from "../data/data1";

const Readmore = () => {
  const BlogPosts = data.BlogPosts;
  const featuredBlogs = BlogPosts.filter((blog) => blog.posttype === "feature");
  return (
    <section className="featuredPost mt-9">
      <h2 className="text-2xl font-semibold border-b-4 w-fit border-b-blue-600 text-slate-800">
        Featured Posts
      </h2>
      <div className="cardContainer mt-8 flex flex-col gap-12">
        {featuredBlogs.map((blog) => (
          <Readcard key={blog.title} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default Readmore;