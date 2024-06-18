import axios from "axios";
import { ICurrency } from "../app/currencies/page";
import { http } from ".";

const fetchCurrencies = async (): Promise<ICurrency[]> => {
  try {
    const response = await http.get("/currencies");
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error("An error occurred while fetching data");
    }
  }
};

export default fetchCurrencies;
