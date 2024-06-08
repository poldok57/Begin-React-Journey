import Image from "next/image";
import { Header } from "../Header";
import { MenuFilter } from "../MenuFilter";
import { REACT_CARDS } from "../react-card";
import React from "react";
import { CardsList } from "../CardsList";

export default function Home({ searchParams }) {
  const filters = [...new Set(REACT_CARDS.map((card) => card.category))];
  const currentFilter = searchParams.filter;

  // console.log("filters", filters, "currentFilter", currentFilter);
  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4 bg-cyan-50">
      <Header />
      <div className="flex mb-4 mt-8 flex-row gap-4 py-2 overflow-auto w-full max-lg:flex-col border border-blue-300">
        <MenuFilter filters={filters} currentFilter={currentFilter} />
        <div className="size-full overflow-auto">
          <CardsList filter={currentFilter} />
        </div>
      </div>
    </main>
  );
}
