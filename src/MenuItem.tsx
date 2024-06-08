import clsx from "clsx";
import Link from "next/link";

type MenuItemProps = {
  filter: string;
  children: React.ReactNode;
  isActive: boolean;
};
export const MenuItem: React.FC<MenuItemProps> = ({
  filter,
  children,
  isActive,
}) => {
  return (
    <Link
      href={`/?filter=${filter}`}
      key={filter}
      className={clsx(
        "rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200",
        {
          "font-bold": isActive,
        }
      )}
    >
      {children}
    </Link>
  );
};
