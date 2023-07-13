type Props = {
  children: React.ReactNode;
  setFilters: any;
  filters: any;
};

const FilterAreaWrapper = ({ children, setFilters, filters }: Props) => {
  return (
    <>
      <div
        className="h-[50px] w-full lg:hidden bg-blue-500 hover:bg-blue-700 transition-colors duration-500 text-white text-sm uppercase flex items-center justify-center tracking-widest rounded-md cursor-pointer"
        onClick={() =>
          setFilters(() => ({ ...filters, filterArea: !filters.filterArea }))
        }
      >
        FILTER
      </div>
      <div
        className={` ${
          filters.filterArea ? "block" : "hidden"
        } absolute z-[100] top-[155px]  lg:static lg:block left-[8px] right-[8px] sm:w-[400px] bg-zinc-50 h-auto border border-gray-300 rounded-md p-4 shadow-3xl `}
      >
        {children}
      </div>
    </>
  );
};

export default FilterAreaWrapper;
