import { REACT_CARDS } from "./react-card";
import { Card } from "./Card";
import React from "react";

type CardsListProps = { filter: string };

export const CardsList: React.FC<CardsListProps> = ({ filter }) => {
  const allCategory: boolean = !filter || filter === "/" ? true : false;
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full p-2">
      {REACT_CARDS.filter((card) => {
        if (allCategory) return true;
        return card.category === filter;
      }).map((card) => (
        <Card key={card.name} card={card} withCategory={allCategory} />
      ))}
    </div>
  );
};
