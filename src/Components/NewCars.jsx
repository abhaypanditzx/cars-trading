
function NewCars() {
  return (
    <div className=" w-full flex h-full justify-center p-1 items-center  ">
    <div className=" px-1 max-sm:flex-col max-sm:space-y-1 max-2xl:flex-row  space-x-1 max-sm:space-x-0 justify-around flex items-center  ">
    <select className="bg-gray-200 max-sm:w-[10rem]  outline-none h-10 w-[13rem]">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <select className="bg-gray-200 max-sm:w-[10rem] outline-none h-10 w-[13rem]">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    </div>
    <button className="bg-red-600 w-[10rem] max-sm:w-[6rem] text-lg max-sm:text-xs  h-10 text-white font-semibold ">
      ALL USED CARS
    </button>
          </div>
  )
}

export default NewCars