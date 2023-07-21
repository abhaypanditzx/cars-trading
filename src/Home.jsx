import PopularNewCars from "./Components/PopularNewCars";
import PopularUsedCars from "./Components/PopularUsedCars";
import Search from "./Components/Search";
import SearchNewCarsByBrand from "./Components/SearchNewCarsByBrand";
import Select from "./Components/Select";
import Title from "./Components/Title";

function Home() {
  return (
    <div className="w-full  bg-[#e9ebed] h-fit ">
      <div
        className={`h-[70vh]    flex -mt-[3rem] max-sm:bg- max-sm:-mt-[5rem] items-cover  justify-ceneter flex-col max-sm:bg-[url('/src/assets/mobiledevicebg.jpg')]   -z-30 w-full bg-img`}
      >
        <Search />
        <Title />
      </div>
      <div className="h-[50vh] p-5 flex justify-center  items-center w-full bg-[#e9ebed]">
        <Select />
      </div>
      <div className=" bg-cover bg-no-repeat   w-full h-full bg-white">
        <PopularUsedCars />
        <div className="bg-[#e9ebed] ">
          <PopularNewCars />
        </div>
        <SearchNewCarsByBrand />
      </div>
    </div>
  );
}
export default Home;
