// api/currencies.ts
import axios from "axios";
import { ICurrency } from "../currencies/page";

const API_URL = "https://653fb0ea9e8bd3be29e10cd4.mockapi.io/api/v1/currencies";

const fetchCurrencies = async (): Promise<ICurrency[]> => {
  try {
    const response = await axios.get(API_URL);
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
