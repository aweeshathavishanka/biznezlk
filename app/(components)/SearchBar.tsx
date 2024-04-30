const SearchBar = () => {
  return (
    <div className=" pt-10 lg:px-[10rem] ">
      <div className="flex justify-between gap-2 border border-black rounded-full py-2 lg:py-2 px-3 group">
        <div>
          <input
            type=" text"
            className=" border-0 focus:outline-none focus:out rounded-full py-2  px-3 "
          />
        </div>
        <div className=" bg-violet-600 text-white py-3 lg:py-5 rounded-full px-3 lg:px-10">
          Search Button
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
