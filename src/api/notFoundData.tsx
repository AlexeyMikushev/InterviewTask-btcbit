import axios, { AxiosError } from "axios";
import { INotFoundData } from "../app/currencies/page";
import { http } from ".";

const fetchNotFoundData = async (): Promise<INotFoundData[]> => {
  try {
    const response = await http.get<INotFoundData[]>("/not-found");
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 404) {
        return Promise.reject(error);
      } else {
        throw new Error(`Axios error: ${axiosError.message}`);
      }
    } else {
      throw new Error("An error occurred while fetching data");
    }
  }
};

export default fetchNotFoundData;
