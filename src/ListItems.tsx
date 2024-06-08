"use client";
import { X } from "lucide-react";
import Link from "next/link";
import { removeItem } from "./selectionlist";
import { ReactCard } from "./react-card";
import React from "react";

type ListItemsProps = {
  items: ReactCard[];
};

export const ListItems: React.FC<ListItemsProps> = ({ items }) => {
  return (
    <div className="absolute top-16 bg-cyan-50 shadow-lg rounded-md p-2 border-2 border-cyan-700">
      <ul>
        {items.map((item: ReactCard) => (
          <li
            key={item.name}
            className="justify-between items-center flex flex-row gap-2 hover:bg-gray-200"
          >
            <Link href={item.url} target="_blank" rel="noopener noreferrer">
              {item.name}
            </Link>

            <X
              className="text-red-400 hover:cursor-pointer hover:text-red-600 hover:font-bold"
              size={16}
              onClick={() => removeItem(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
