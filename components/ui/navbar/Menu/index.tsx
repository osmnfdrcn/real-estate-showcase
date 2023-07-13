type MenuType = {
  variant: "row" | "col";
  menuItems: {
    id: number;
    title: string;
  }[];
};

const Menu = ({ variant, menuItems }: MenuType) => {
  let style = getStyle(variant);

  return (
    <ul className={style}>
      {menuItems.map((i) => (
        <li
          className="wrapper text-slate-200 text-xs   cursor-pointer tracking-wide"
          key={i.id}
        >
          <span>{i.title}</span>
          <div className="underline" />
        </li>
      ))}
    </ul>
  );
};

export default Menu;

const getStyle = (s: "row" | "col") => {
  const style = {
    row: "hidden lg:flex flex-row items-center gap-6 text-md text-slate-900 font-semibold h-full",
    col: "flex flex-col items-start justify-center gap-4  text-slate-700",
  };
  return style[s];
};
