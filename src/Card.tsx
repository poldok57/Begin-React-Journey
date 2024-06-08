"use client";
import { BookOpenText, CirclePlus } from "lucide-react";
import Link from "next/link";
import { ReactSvg } from "./ReactSvg";
import { addItem } from "./selectionlist";
import { Button, buttonVariants } from "./Button";

type CardProps = {
  card: {
    name: string;
    category: string;
    url: string;
  };
  withCategory: boolean;
};

export const Card: React.FC<CardProps> = ({ card, withCategory }) => {
  return (
    <div className="flex flex-col w-full h-fit gap-1 p-3 border border-gray-200 rounded-md shadow transition hover:bg-gray-100 hover:border-gray-400 hover:translate-x-1 hover:translate-y-1">
      <h2 className="inline-flex text-lg font-bold gap-3">
        <ReactSvg size={24} />
        <span>React</span>
      </h2>
      <h1 className="w-full line-clamp-1 font-bold  text-xl items-center text-center">
        {card.name}
      </h1>
      <div className="w-full flex flex-row">
        {withCategory && (
          <span className="line-clamp-1 text-xs text-gray-600">
            {card.category}
          </span>
        )}

        <div className="flex items-center gap-2 ml-auto">
          <Link
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "secondary" })}
          >
            <BookOpenText size={16} />
          </Link>
          <Button
            variant="secondary"
            onClick={() => {
              addItem(card);
            }}
          >
            <CirclePlus size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};
