import { MenuItem } from "./MenuItem";
import Link from "next/link";

import { REACT_CARDS } from "./react-card";
import React from "react";

type MenuFilterProps = { filters: string[]; currentFilter: string };

export const MenuFilter: React.FC<MenuFilterProps> = ({
  filters,
  currentFilter,
}) => {
  return (
    <aside className="flex w-full flex-wrap gap-4 lg:max-w-[160px] lg:flex-col shadow-sm border border-cyan-100">
      <MenuItem
        filter="/"
        isActive={!currentFilter || currentFilter === "/"}
        key="all"
      >
        All
      </MenuItem>
      {filters.map((filter: string) => (
        <MenuItem
          filter={filter}
          key={filter}
          isActive={filter === currentFilter}
        >
          {filter}
        </MenuItem>
      ))}
    </aside>
  );
};
