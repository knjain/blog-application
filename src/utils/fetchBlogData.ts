import axios from "axios";
import { Blogs } from "@/types/blogTypes";

export async function fetchData(offset: number): Promise<Blogs> {
  try {
    const response = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/blog-posts?offset=${offset}`,
      {
        headers: {
          "Cache-Control": "no-cache",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Request failed with status ${error.response.status}`);
    } else if (error.request) {
      throw new Error("No response received from server");
    } else {
      throw new Error(`Error setting up the request: ${error.message}`);
    }
  }
}
