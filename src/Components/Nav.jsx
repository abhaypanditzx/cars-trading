import { useState } from "react";
import { FaBars, FaChevronRight} from "react-icons/fa";
import { Link } from "react-router-dom"; 
import logo from "../assets/logo.png"
import Sidebar from "./Sidebar";

function Nav(

) {
  const [display, setDisplay] = useState("hidden");
  const [bar, setBar] = useState("block");
  function side(){
 console.log("okay");
 if(display === "hidden"){

   setDisplay("flex")
   setBar("hidden")
 }

  }
  return (
    <nav className=" bg-white shadow-lg sticky p-3 max-sm:p-1  text-white max-sm:bg-[#000000e4]  z-50  top-0 flex justify-center  items-center">
      
      <ul className="flex space-x-28 max-xl:space-x-14   max-sm:hidden max-2xl:visible   uppercase  ">
        <div id="drop-down-con" className="h-fit w-fit">
          <div className="  cursor-pointer text-white hover:scale-95  ">
            <div id="drop-down-con" className="h-fit w-fit">
              <li className="  cursor-pointer text-black hover:scale-95  ">
                Cars{" "}
              </li>
              <ul
                id="drop-down-list"
                className="h-fit  space-y-3 bg-white p-2 flex-col justify-center w-max items-center absolute text-sm  hidden "
              >
                <li
                  id="child-hover3"
                  className="hover:scale-95 text-black  flex justify-between  shadow-sm cursor-pointer w-full   hover:underline "
                >
                  {" "}
                  Search By Price <FaChevronRight />{" "}
                </li>
                <li
                  id="child-hover4"
                  className="hover:scale-95 text-black  flex justify-between  shadow-sm cursor-pointer w-full   hover:underline  "
                >
                  Popular Brands <FaChevronRight />
                </li>
                <li className="hover:scale-95 text-black    shadow-sm cursor-pointer w-full   hover:underline  ">
                  Upcoming Cars
                </li>
                <li className="hover:scale-95 text-black    shadow-sm cursor-pointer w-full   hover:underline  ">
                  Electric Cars
                </li>
                <li className="hover:scale-95 text-black    shadow-sm cursor-pointer w-full   hover:underline  ">
                  New Car Launches
                </li>
                <li className="hover:scale-95 text-black    shadow-sm cursor-pointer w-full   hover:underline  ">
                  Popular Cars
                </li>
                <li className="hover:scale-95 text-black    shadow-sm cursor-pointer w-full   hover:underline  ">
                  Compare Cars
                </li>
                <li className="hover:scale-95 text-black    shadow-sm cursor-pointer w-full   hover:underline  ">
                  EMI Calculator
                </li>
                <ul
                  id="grand-child3"
                  className=" absolute flex-col bg-white left-[9rem] p-2 space-y-3 w-max  top-0 shadow-lg bg-whte hidden text-sm"
                >
                  <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                    {" "}
                    Upto 5 Lakh
                  </li>
                  <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                    5 Lakh - 8 Lakh
                  </li>
                  <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                    6 Lakh - 10 Lakh
                  </li>
                  <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                    8 Lakh - 12 Lakh
                  </li>
                  <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                    10 Lakh - 15 Lakh
                  </li>
                  <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                    Find Your Car
                  </li>
                </ul>

                <ul
                  id="grand-child4"
                  className=" absolute flex-col w-max bg-white left-[9.5rem] p-2 space-y-3  top-3 shadow-lg bg-whte hidden text-sm"
                >
                  <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                    {" "}
                    Maruti Suzuki{" "}
                  </li>
                  <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                    {" "}
                    Tata{" "}
                  </li>
                  <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                    {" "}
                    Hyundai{" "}
                  </li>
                  <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                    {" "}
                    Mahindra{" "}
                  </li>
                  <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                    {" "}
                    BMW{" "}
                  </li>
                  <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                    {" "}
                    View All Brands{" "}
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div id="drop-down-con" className="h-fit relative flex space-x-2 w-fit">
          <li className="cursor-pointer w-max text-black hover:scale-95  ">
            Used Cars{" "}
          </li>
          <ul
            id="drop-down-list"
            className="h-fit  space-y-3  flex-col justify-center  items-center absolute top-[1.5rem] py-5 bg-white   hidden w-[10rem] p-1 text-sm"
          >
            <li
              id="child-hover"
              className="hover:scale-95 text-black justify-between  shadow-sm cursor-pointer w-full flex  hover:underline "
            >
              {" "}
              By City <FaChevronRight />{" "}
            </li>
            <li
              id="child-hover2"
              className="hover:scale-95 text-black justify-between  shadow-sm cursor-pointer w-full flex  hover:underline "
            >
              {" "}
              By Brand <FaChevronRight />
            </li>

            <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full   hover:underline ">
              {" "}
              Buy Used Cars
            </li>
            <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full   hover:underline ">
              {" "}
              Explore Used Cars
            </li>
            <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full   hover:underline ">
              {" "}
              CarWale abSure
            </li>
            <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full   hover:underline ">
              {" "}
              Used Car Valuation
            </li>
            <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full   hover:underline ">
              {" "}
              My Listings
            </li>

            <ul
              id="grand-child"
              className=" absolute flex-col bg-white left-[9.5rem] p-2 space-y-3  top-0 shadow-lg bg-whte hidden text-sm"
            >
              <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                {" "}
                Delhi NCR
              </li>
              <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                {" "}
                Mumbai
              </li>
              <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                {" "}
                Bangalore
              </li>
              <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                {" "}
                Hyderabad
              </li>
              <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                {" "}
                Chennai
              </li>
              <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                {" "}
                All Cities
              </li>
            </ul>
            <ul
              id="grand-child2"
              className=" absolute flex-col bg-white left-[9.5rem] p-2 space-y-3  top-3 shadow-lg bg-whte hidden text-sm"
            >
              <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-[8rem]  hover:underline ">
                Maruti Suzuki
              </li>
              <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                Hyundai
              </li>
              <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                Volkswagen
              </li>
              <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                Tata
              </li>
              <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                Toyota
              </li>
              <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                Honda
              </li>
              <li className="hover:scale-95 text-black   shadow-sm cursor-pointer w-full  hover:underline ">
                All Brands
              </li>
            </ul>
          </ul>
        </div>
        <div id="drop-down-con" className="h-fit w-fit">
          <li className=" w-max text-black cursor-pointer hover:scale-95  ">
            car loan
          </li>
        </div>
        <div id="drop-down-con" className="h-fit w-fit">
          <li className="w-max text-black cursor-pointer hover:scale-95  ">
            sell car
          </li>
        </div>
        <div id="drop-down-con" className="h-fit w-fit">
            <Link to="/NewsAndReviews">
          <li className=" w-max text-black cursor-pointer hover:scale-95  ">
            News And Reviews

          </li>
            </Link>
        </div>
      </ul>
      {/*MOBILE DEVICE NAVBAR*/}
      <ul className="  max-sm:flex hidden    capitalize w-full text-white items-center justify-between ">
     <li><img src={logo} alt="logo" className="w-[7rem] "/></li> 
        <button  className={`${bar} absolute text-3xl p-2 top-0 right-0`} onClick={side}><FaBars  /></button>
      <Sidebar sdie={side} setDisplay={setDisplay} setBar={setBar} display={display} />
     
      </ul>
    </nav>
  );
}

export default Nav;

