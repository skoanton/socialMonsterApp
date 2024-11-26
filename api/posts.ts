import axios from "axios";

const baseUrl = process.env.EXPO_PUBLIC_API_URL;
export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/posts`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching posts", error);
  }
};
