"use client";
import { useEffect, useState } from "react";
import TableComponent from "./Table";
import fetchCurrencies from "../../api/currencies";
import fetchNotFoundData from "../../api/notFoundData";
import NotFoundTable from "./NotFoundTable";
import Loader from "@/components/Loader";

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
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    fetchCurrencies()
      .then((currencies) => {
        setErrorCurrencies("");
        setCurrencies(currencies);
      })
      .catch((error) => {
        setErrorCurrencies(error.message);
      })
      .finally(() => setIsLoading(false));
  }
  async function fetchNotFound() {
    fetchNotFoundData()
      .then((notFoundData) => {
        setErrorNotFound("");
        setNotFoundData(notFoundData);
      })
      .catch((error) => {
        setErrorNotFound(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    fetchNotFound();
  }, []);

  return (
    <div>
      <Loader isLoading={isLoading} />
      <TableComponent currencies={currencies} error={errorCurrencies} />
      <NotFoundTable notFoundData={notFoundData} error={errorNotFound} />
    </div>
  );
}
