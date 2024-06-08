"use client";
import { useState, useEffect, use } from "react";
import { ReactSvg } from "./ReactSvg";
import { User, ShoppingBasket } from "lucide-react";
import { Button } from "./Button";
import { getList, getListLength } from "./selectionlist";
import { ListItems } from "./ListItems";

export const Header = () => {
  const [list, setList] = useState(false);
  const [nbItems, setNbItems] = useState(0);

  useEffect(() => {
    const countItems = () => {
      const nbItems = getListLength();
      // console.log("countItems", nbItems);
      setNbItems(nbItems);
      if (nbItems === 0) setList(false);
    };

    // wait for the event  "addItem" to be dispatched
    window.addEventListener("addItem", countItems);
    return () => {
      window.removeEventListener("addItem", countItems);
    };
  }, []);

  return (
    <header className="flex w-full items-center py-4">
      <h1 className="inline-flex items-center text-2xl font-bold gap-3">
        <ReactSvg size={32} />
        <span>React Journey</span>
      </h1>

      <div className="flex items-center ml-auto gap-2">
        <Button variant="ghost" onClick={() => setList(!list)}>
          <ShoppingBasket size={24} />
        </Button>

        {list && getListLength() > 0 && <ListItems items={getList()} />}
        <span className="text-sm">{nbItems}</span>
        <Button variant="ghost">
          <User size={24} />
        </Button>
      </div>
    </header>
  );
};
