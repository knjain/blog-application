import { fetchAuthorData } from "@/utils/fetchAuthor";
import { fetchData } from "@/utils/fetchIndividualBlog";
import React from "react";

const page = async ({
  params,
}: {
  params: {
    blogId: number;
  };
}) => {
  const data = await fetchData(params.blogId);
  const blogData = data.blog;

  const authorData = await fetchAuthorData(blogData.user_id);
  const author = authorData.user;
  //console.log(authorData)

  return (
    <div className="container mx-auto px-16 py-8 bg-white min-h-screen ">
      <div className="flex justify-center items-center">
        <img
          src={blogData.photo_url}
          alt={blogData.title}
          className="w-2/6 rounded-lg"
        />
        <div className="w-1/2 ml-12">
          <h2 className="text-4xl font-semibold mb-4">{blogData.title}</h2>
          <p className="text-gray-600 mb-4 ">{blogData.description}</p>
          <div className="flex mt-4 items-center">
            <h3>Published by - </h3>
            <img
              src={author.profile_picture}
              className="w-14 h-14 rounded-2xl border border-black mx-3"
              alt={author.first_name}
            />
            <h5>{author.first_name} {author.last_name}</h5>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-gray-800 leading-relaxed mb-2 border-b border-t border-black py-4">
          {blogData.content_text}
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <p>Published: {new Date(blogData.created_at).toLocaleDateString()}</p>
          <p>
            Last updated: {new Date(blogData.updated_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};
export default page;
