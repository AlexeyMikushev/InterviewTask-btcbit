"use client";
import { useEffect, useState } from "react";
import TableComponent from "./Table";
import fetchCurrencies from "../api/currencies";

export interface ICurrency {
  amount: string;
  updatedAt: Date;
  currencyId: string;
}

export default function CurrenciesTable() {
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function fetchData() {
    try {
      const currencies = await fetchCurrencies();
      setCurrencies(currencies);
    } catch (error: any) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {error && <p>Error occured: {error}</p>}

      <TableComponent currencies={currencies} />
    </div>
  );
}
