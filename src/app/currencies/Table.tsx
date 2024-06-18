import React, { useState, useEffect } from "react";

import { ICurrency } from "./page";

import { currencyNames } from "@/constants";
import ErrorComponent from "@/components/ErrorMessage";

type TableTypeProps = {
  currencies: ICurrency[];
  error: string;
};

export default function TableComponent({ currencies, error }: TableTypeProps) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [columns, setColumns] = useState(0);
  onresize = () => {
    if (windowWidth !== window.innerWidth) {
      setWindowWidth(window.innerWidth);
    }
  };

  const columnWidth = 300;
  const padding = 16;
  const totalPadding = padding * 2;
  const availableWidth = windowWidth - totalPadding;
  const maxColumns = Math.floor(availableWidth / columnWidth);
  const numColumns = Math.max(maxColumns + columns, 1);

  if (error) return <ErrorComponent message={error} />;

  return (
    <div>
      <div
        className="overflow-x-auto p-4"
        style={
          {
            "--column-width": `${columnWidth}px`,
            "--padding": `${padding}px`,
            padding: "var(--padding)",
          } as React.CSSProperties
        }
      >
        <div
          className="grid auto-cols-fr"
          id="Currencies-grid"
          style={{
            gridTemplateColumns: `repeat(${numColumns}, minmax(var(--column-width), 1fr))`,
          }}
        >
          <div className="col-span-full flex justify-center items-center font-bold">
            <button
              className={`bg-teal-500 text-white px-4 py-2 rounded mr-4 w-12 ${
                1 === numColumns
                  ? "bg-teal-700 text-gray-300 cursor-not-allowed"
                  : ""
              }`}
              disabled={1 === numColumns}
              onClick={() => setColumns((prev) => prev - 1)}
            >
              -
            </button>
            <div className="text-center inline-block px-4">Balances</div>
            <button
              className={`bg-teal-500 text-white px-4 py-2 rounded mr-4 w-12 ${
                maxColumns === numColumns
                  ? "bg-teal-700 text-gray-300 cursor-not-allowed"
                  : ""
              }`}
              disabled={maxColumns === numColumns}
              onClick={() => setColumns((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <div
            className="grid col-span-full auto-cols-fr"
            style={{
              gridTemplateColumns: `repeat(${numColumns}, minmax(var(--column-width), 1fr))`,
            }}
          >
            {[...Array(numColumns)].map((_, index) => (
              <div
                key={index}
                className="flex justify-between font-bold px-4 py-2"
              >
                <span>Name</span>
                <span>Balance</span>
              </div>
            ))}
          </div>
          {currencies.map((currency, index) => (
            <div
              key={currency.currencyId}
              className={`px-4 py-2 flex justify-between items-center ${
                index % (numColumns * 2) < numColumns
                  ? "bg-gray-200"
                  : "bg-white"
              }`}
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
