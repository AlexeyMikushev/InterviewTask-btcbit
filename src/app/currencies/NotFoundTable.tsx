import React, { useState } from "react";
import { currencyNames } from "../../constants";
import { ICurrency, INotFoundData } from "./page";
import ErrorComponent from "@/components/ErrorMessage";

type TableTypeProps = {
  notFoundData: INotFoundData[];
  error: string;
};

export default function NotFoundTable({ notFoundData, error }: TableTypeProps) {
  if (error) return <ErrorComponent message={error} />;

  return (
    <div>
      <div className="overflow-x-auto p-4 max-w-screen-lg mx-auto">
        <div
          className="grid auto-cols-fr"
          id="notFoundData-grid"
          style={{
            gridTemplateColumns: "repeat(3, minmax(300px, 1fr))",
          }}
        >
          <div className="col-span-full text-center font-bold">Balances</div>
          <div
            className="grid col-span-full auto-cols-fr"
            style={{
              gridTemplateColumns: "repeat(3, minmax(300px, 1fr))",
            }}
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex justify-between font-bold px-4 py-2"
              >
                <span>Name</span>
                <span>Balance</span>
              </div>
            ))}
          </div>
          {notFoundData.map((currency, index) => (
            <div
              key={currency.currencyId}
              className={`px-4 py-2 flex justify-between items-center`}
            >
              <span>
                {currencyNames[
                  currency.currencyId as keyof typeof currencyNames
                ] ?? "unknown currency"}
              </span>
              <span>{currency.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
