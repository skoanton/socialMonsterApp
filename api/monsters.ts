import axios from "axios";

const baseUrl = process.env.EXPO_PUBLIC_API_URL;
console.log("baseUrl", baseUrl);

export const fetchMonsters = async () => {
  try {
    const response = await axios.get(`${baseUrl}/monsters`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching monsters", error);
  }
};

export const fetchMonsterById = async (id: number) => {
  try {
    const response = await axios.get(`${baseUrl}/monsters/${id}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching monster", error);
  }
};
