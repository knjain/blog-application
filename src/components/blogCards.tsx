import Image from "next/image";
import React from "react";
import { IndividualBlog } from "@/types/blogTypes";
import Link from "next/link";

interface blogData {
  data: IndividualBlog[];
}
function BlogCards({ data }: blogData) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((post) => (
        <Link key={post.id} href={`blog/${post.id}`}>
          <div
            key={post.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:animate-pulse"
          >
            <Image
              src={post.photo_url}
              alt={post.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default BlogCards;
