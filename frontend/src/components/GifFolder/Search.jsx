/* eslint-disable react/prop-types */
import Gif from "./Gif";

// eslint-disable-next-line react/prop-types
function Search({ data, value, setValue, setSelectedGif }) {
  return (
    <div className="search">
      <input
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        id="default-search"
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Mockups, Logos..."
      />

      <div className="gallery flex flex-wrap flex-1 overflow-auto bg[#DAD3CC] h-[75vh]">
        {data.data.map((gif) => {
          return <Gif gif={gif} key={gif.id} setSelectedGif={setSelectedGif} />;
        })}
      </div>
    </div>
  );
}

export default Search;
