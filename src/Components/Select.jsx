import UsedCars from "./UsedCars";
import NewCars from "./NewCars";
import { useState } from "react";
function Select() {
  const [sel, setSel] = useState(UsedCars);
  function func(){
    let used = document.getElementById("used");
    let New = document.getElementById("new");
    used.style.backgroundColor = "red";
    if(used.style.backgroundColor === "red"){
      New.style.backgroundColor = "red";
      New.style.color = "white";
      used.style.color = "black";
      used.style.backgroundColor = "#bbbbbba1";
      setSel(NewCars)
    }
  }
  
  function func2 (){
    let used = document.getElementById("used");
    let New = document.getElementById("new");
    New.style.backgroundColor = "red";
    if(New.style.backgroundColor === "red"){
      used.style.backgroundColor = "red";
      used.style.color = "white";
      New.style.color = "black";
      New.style.backgroundColor = "#bbbbbba1";
      setSel(UsedCars);
    }
  }
  return (
    <div  className="   max-sm:space-y-1  max-sm:flex-col flex max-sm:space-x-0 space-x-1 max-sm:w-[19rem]    ">
    <div className='h-[15rem]   max-sm:h-[10rem] max-sm:w-full  shadow-md w-[40rem] bg-[#ffffff]   flex flex-col'>
      <div className="w-full flex justify-between h-10 ">
        <button style={{backgroundColor:"red"}} onClick={func2} id="used" className="w-full text-xl text-white  capitalize ">used cars</button>
        <button onClick={func} id="new" className="w-full bg-[#bbbbbba1] text-xl capitalize">new cars</button>
      </div>
    
   {sel}
    </div> 
    <div className="bg-[#ffffff]  flex flex-col  relative justify-center items-center h-[15rem] max-sm:h-[8rem] shadow-md  w-full   p-2">
<h1 className="font uppercase w-full bg-[#d4d4d4] text-center p-2 absolute top-0 ">find new  car by price</h1>
<div>
<div className=" flex space-x-1 ">
<select className="h-[3rem] max-sm:h-[2rem]  capitalize bg-gray-200 text-center  w-[10rem]">
    <option>select budget</option>
    <option>upto 3 lakh</option>
    <option>5-8 lakh</option>
    <option>8-12 lakh</option>
    <option>12-15 lakh</option>
    <option>15-25 lakh</option>
    <option>25-40 lakh</option>
    <option>40+ lakh</option>
  </select>
  <button className="bg-red-600 h-[3rem] max-sm:h-[2rem] text-white uppercase w-[5rem] ">go</button>
</div>
</div>
    </div>
    </div>
  )
}

export default Select