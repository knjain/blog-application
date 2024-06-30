import BlogCards from "@/components/blogCards";
import { fetchData } from "@/utils/fetchBlogData";
import Link from "next/link";

const Home = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const offset = (page - 1) * 10;

  const blogs = await fetchData(offset);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <BlogCards data={blogs.blogs} />
      <div className="flex space-x-4 my-4">
        {page > 1 && (
          <Link
            href={`/?page=${page - 1}`}
            className="rounded-lg px-3 py-2 bg-black text-white"
          >
            Previous
          </Link>
        )}
        <Link
          href={`?page=${page + 1}`}
          className="rounded-lg px-3 py-2 bg-black text-white"
        >
          Next
        </Link>
      </div>
    </main>
  );
};

export default Home;
