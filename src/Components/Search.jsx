
function Search() {
  return (
    <div className="absolute shadow-md rounded-2xl left-[50%] translate-x-[-50%]    bg-transparent max-sm:top-[11rem]  top-[20rem] flex items-center ">
    <input type="search " placeholder="search..."  className="rounded-l-full placeholder:text-2xl    outline-transparent placeholder-black text-center text-xl p-1  bg-[#ffffffbd] w-[40rem] max-sm:w-48  max-sm:h-10   h-[4rem]  "/>
    <button className="bg-[#b90000] text-white  h-[4rem] text-2xl w-[4rem] max-sm:h-10   max-sm:text-lg    px-4 rounded-r-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
</button>

    </div>
  )
}

export default Search