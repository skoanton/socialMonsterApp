import axios from "axios";
import { Monster } from "../types/monsters";

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

export const createMonster = async (
  monster: Monster
): Promise<Monster | null> => {
  try {
    const response = await axios.post(`${baseUrl}/monsters`, monster);

    if (response.status === 201) {
      const newMonster: Monster = response.data;
      return newMonster;
    }
    return null;
  } catch (error) {
    console.error("Error creating monster", error);
    return null;
  }
};
