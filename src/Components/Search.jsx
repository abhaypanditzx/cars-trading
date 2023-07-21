import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="absolute shadow-md rounded-2xl backdrop:blur-[400px]  left-[50%] translate-x-[-50%]    bg-transparent max-sm:top-[11rem]  top-[20rem] flex items-center ">
    <input type="search " placeholder="search..."  className="rounded-l-full placeholder:text-2xl backdrop-blur-sm outline-transparent placeholder-black text-center text-xl p-1  bg-[#ffffffbd] w-[40rem] max-sm:w-48 max-xl:w-[25rem] max-sm:h-10   h-[4rem]  "/>
    <button className="bg-[#b90000] text-white  h-[4rem] text-2xl w-[4rem] max-sm:h-10   max-sm:text-lg    px-4 rounded-r-full">
  <FaSearch className="h-7 w-7"/>
</button>

    </div>
  )
}

export default Search;