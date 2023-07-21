import { FaAndroid, FaApple, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#333333]  w-full flex  h-fit max-sm:flex-col">
      <div className="w-[50%] h-fit max-sm:w-full max-sm:text-xs font-sans font-extralight ">
        <ul className="flex p-2 justify-around w-full  text-white capitalize">
          <li className="p-1 w-[9rem] max-sm:w-[5rem] max-xl:w-[7rem] max-xl:text-[0.78rem] max-sm:p-0  border-b-[1px]">about us</li>
          <li className="p-1 w-[9rem] max-sm:w-[5rem] max-xl:w-[7rem] max-xl:text-[0.78rem] max-sm:p-0  border-b-[1px]">advertise</li>
          <li className="p-1 w-[9rem] max-sm:w-[6rem] max-xl:w-[7rem] max-xl:text-[0.78rem] max-sm:p-0  border-b-[1px]">terms & conditions</li>
        </ul>
        <ul className="flex p-2 justify-around w-full   text-white capitalize">
          <li className="p-1 w-[9rem] max-sm:w-[5rem] max-sm:p-0  border-b-[1px]">Privacy Policy</li>
          <li className="p-1 w-[9rem] max-sm:w-[5rem] max-sm:p-0  border-b-[1px]">Sitemap</li>
          <li className="p-1 w-[9rem] max-sm:w-[5rem] max-sm:p-0  border-b-[1px]">Contact Us</li>
        </ul>
        <li className=" flex max-sm:hidden w-full px-1 py-3 max-md:text-sm  items-center  text-sm text-white">
           © 2017 - 2023 carSale.com
           All rights reserved in favour of CarTrade Tech Ltd.
           </li>
      </div>
      <div className="flex max-[769px]:flex-col flex-row max-sm:flex-col">

        <ul className="w-full   max-sm:flex h-fit max-md:border-none ml-3 p-2 max-sm:text-[0.66rem] max-xl:text-[0.77rem] text-sm  border-l-[1px] ">
          <li className=" flex max-sm:p-2 space-x-3 max-md:flex-col w-fit items-center py-3    max-sm:py-1  text-white">
            <p className="hover:text-white text-[0.64rem] w-full   text-gray-300">download  apps</p>{" "}
          <div className="flex  justify-start w-fit space-x-1">
          <FaApple   className="h-[1rem]   max-xl:h-[0.65rem] w-[1rem]"/>
            <FaAndroid className="h-[1rem] max-xl:h-[0.65rem] w-[1rem]"/>
          </div>
          </li>
          <li className=" flex max-sm:p-2 flex-row space-x-3 max-sm:text-[0.66rem] w-fit max-md:flex-col   items-center max-sm:py-1 py-3 text-sm text-white">
            <p className="hover:text-white  w-full text-[0.64rem] text-gray-300">connect us on</p>{" "}
          <div className="flex  w-full  space-x-1">
          <FaFacebook   className="h-[1rem]  max-xl:h-[0.65rem] w-[1rem]"/>
            <FaInstagram className="h-[1rem] max-xl:h-[0.65rem] w-[1rem]"/>
            <FaLinkedin className="h-[1rem]  max-xl:h-[0.65rem] w-[1rem]"/>
            <FaYoutube className="h-[1rem]   max-xl:h-[0.65rem] w-[1rem]"/>
            <FaInstagram className="h-[1rem] max-xl:h-[0.65rem] w-[1rem]"/>
          </div>
          </li>
         
        </ul>
        <ul className="text-white w-full relative mt-5  ml-[10rem] max-2xl:ml-0  h-fit flex flex-col justify-center  text-sm capitalize"> 
          <li className="font-bold self-center">pupulor cars</li>
          <li className="w-[20rem] justify-center  text-[0.55rem] flex flex-wrap ">

            <span className="underline p-1 cursor-pointer text-gray-200 hover:text-white ">Kwid </span>
            <span className="underline p-1 cursor-pointer text-gray-200 hover:text-white ">Triber </span>
            <span className="underline p-1 cursor-pointer text-gray-200 hover:text-white "> Dzire</span>
            <span className="underline p-1 cursor-pointer text-gray-200 hover:text-white ">Alto </span>
            <span className="underline p-1 cursor-pointer text-gray-200 hover:text-white ">Venue </span>
            <span className="underline p-1 cursor-pointer text-gray-200 hover:text-white ">Amaze </span>
            <span className="underline p-1 cursor-pointer text-gray-200 hover:text-white ">Swift </span>
            <span className="underline p-1 cursor-pointer text-gray-200 hover:text-white ">XUV700 </span>
            <span className="underline p-1 cursor-pointer text-gray-200 hover:text-white ">Aura </span>
            <span className="underline p-1 cursor-pointer text-gray-200 hover:text-white ">Baleno </span>
            <span className="underline p-1 cursor-pointer text-gray-200 hover:text-white ">Kiger </span>
            <span className="underline p-1 cursor-pointer text-gray-200 hover:text-white ">Tigor </span>
            <span className="underline p-1 cursor-pointer text-gray-200 hover:text-white ">Grandi10Nios </span>
            <span className="underline p-1 cursor-pointer text-gray-200 hover:text-white ">Creta </span>
            <span className="underline p-1 cursor-pointer text-gray-200 hover:text-white ">Verna </span>
            <span className="underline p-1 cursor-pointer text-gray-200 hover:text-white ">Celerio </span>
          </li>
          <li className=" max-sm:flex max-sm:text-[0.55rem]  hidden  bg-red-600   px-1  max-md:text-sm  items-center  text-sm text-white">
          © 2006 - 2023 carSale.com
All rights reserved in favour of CarTrade Tech Ltd.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
