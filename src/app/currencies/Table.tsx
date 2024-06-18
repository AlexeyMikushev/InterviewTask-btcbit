import React, { useState, useEffect } from "react";
import { currencyNames } from "../constants";
import { ICurrency } from "./page";

type TableTypeProps = {
  currencies: ICurrency[];
};

export default function TableComponent({ currencies }: TableTypeProps) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  onresize = () => {
    if (windowWidth !== window.innerWidth) {
      setWindowWidth(window.innerWidth);
    }
  };

  const columnWidth = 300;
  const padding = 16;
  const totalPadding = padding * 2;
  const availableWidth = windowWidth - totalPadding;
  const numColumns = Math.floor(availableWidth / columnWidth);

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
          <div className="col-span-full text-center font-bold">Balances</div>
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
