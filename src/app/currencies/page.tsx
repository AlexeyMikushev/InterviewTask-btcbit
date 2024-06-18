"use client";
import { useEffect, useState } from "react";
import TableComponent from "./Table";
import fetchCurrencies from "../../api/currencies";
import fetchNotFoundData from "../../api/notFoundData";
import NotFoundTable from "./NotFoundTable";

export interface ICurrency {
  amount: string;
  updatedAt: Date;
  currencyId: string;
}

export interface INotFoundData extends ICurrency {}

export default function CurrenciesTable() {
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);
  const [notFoundData, setNotFoundData] = useState<INotFoundData[]>([]);
  const [errorCurrencies, setErrorCurrencies] = useState<string>("");
  const [errorNotFound, setErrorNotFound] = useState<string>("");

  async function fetchData() {
    try {
      const currencies = await fetchCurrencies();
      setCurrencies(currencies);
      setErrorCurrencies("");
    } catch (error: any) {
      setErrorCurrencies(error.message);
    }
  }
  async function fetchNotFound() {
    try {
      const notFoundData = await fetchNotFoundData();
      setNotFoundData(notFoundData);
      setErrorNotFound("");
    } catch (error: any) {
      setErrorNotFound(error.message);
    }
  }

  useEffect(() => {
    fetchData();
    fetchNotFound();
  }, []);

  return (
    <div>
      <TableComponent currencies={currencies} error={errorCurrencies} />
      <NotFoundTable notFoundData={notFoundData} error={errorNotFound} />
    </div>
  );
}
