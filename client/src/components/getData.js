import axios from "axios";
axios.defaults.withCredentials = true;

export const postsAPI = {
  getAllPosts: async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts");
      return response.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  },
  
};