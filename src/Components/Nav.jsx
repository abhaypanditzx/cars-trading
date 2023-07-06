function Nav() {
  return (
    <nav className="bg-[#0000006f]  sticky p-3 max-sm:bg-[#000000b5]  z-50  top-0 flex justify-center  items-center">
      <ul className="flex space-x-24 max-sm:hidden max-2xl:visible   uppercase  ">
        <div id="drop-down-con" className="h-fit w-fit">
          <li className="  cursor-pointer text-white hover:scale-95  ">
            <div id="drop-down-con" className="h-fit w-fit">
              <li className="  cursor-pointer text-white hover:scale-95  ">
                Used Cars          </li>
              <ul id="drop-down-list" className="h-fit  space-y-1  flex-col justify-center  items-center   hidden w-full">
                <li className="hover:scale-95 text-white   shadow-sm cursor-pointer w-full  text-center hover:underline ">1</li>
                <li className="hover:scale-95 text-white   shadow-sm cursor-pointer w-full  text-center hover:underline  ">1</li>
                <li className="hover:scale-95 text-white   shadow-sm cursor-pointer w-full  text-center hover:underline  ">1</li>
                <li className="hover:scale-95 text-white   shadow-sm cursor-pointer w-full  text-center hover:underline  ">1</li>
              </ul>
            </div>      
              </li>
          <ul id="drop-down-list" className="h-fit  space-y-1  flex-col justify-center  items-center   hidden w-full">
            <li className="hover:scale-95 text-white   shadow-sm cursor-pointer w-full  text-center hover:underline ">1</li>
            <li className="hover:scale-95 text-white   shadow-sm cursor-pointer w-full  text-center hover:underline  ">1</li>
            <li className="hover:scale-95 text-white   shadow-sm cursor-pointer w-full  text-center hover:underline  ">1</li>
            <li className="hover:scale-95 text-white   shadow-sm cursor-pointer w-full  text-center hover:underline  ">1</li>
          </ul>
        </div>

        <div id="drop-down-con" className="h-fit w-fit">
          <li className="  cursor-pointer text-white hover:scale-95  ">
            Used Cars          </li>
          <ul id="drop-down-list" className="h-fit  space-y-1  flex-col justify-center  items-center   hidden w-full">
            <li className="hover:scale-95 text-white   shadow-sm cursor-pointer w-full  text-center hover:underline ">1</li>
            <li className="hover:scale-95 text-white   shadow-sm cursor-pointer w-full  text-center hover:underline  ">1</li>
            <li className="hover:scale-95 text-white   shadow-sm cursor-pointer w-full  text-center hover:underline  ">1</li>
            <li className="hover:scale-95 text-white   shadow-sm cursor-pointer w-full  text-center hover:underline  ">1</li>
          </ul>
        </div>

        <div id="drop-down-con" className="h-fit w-fit">
          <li className=" text-white cursor-pointer hover:scale-95  ">
            car loan
          </li>

        </div>

        <div id="drop-down-con" className="h-fit w-fit">
          <li className=" text-white cursor-pointer hover:scale-95  ">
            sell car
          </li>

        </div>

        <div id="drop-down-con" className="h-fit w-fit">
          <li className=" text-white cursor-pointer hover:scale-95  ">
            News And Reviews
          </li>

        </div>
      </ul>
      <ul className="  max-sm:flex hidden  w-full text-white items-center justify-around ">

  <li>home</li>
  <li>services</li>
  <li>about us</li>

</ul>
    </nav>
  );
}

export default Nav;
