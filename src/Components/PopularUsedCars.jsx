import ByCity from "./ByCity"
import ByPrice from "./ByPrice"
import ByModel from "./ByModel"
import {useState} from 'react'

function PopularUsedCars() {
  function func(){
    let btn1 = document.getElementById("btn1")
    let btn2 = document.getElementById("btn2")
    let btn3 = document.getElementById("btn3")
    if(btn1){
      btn1.style.borderBottom = "2px solid red"
      btn2.style.borderBottom = "none"
      btn3.style.borderBottom = "none"
    }
    setBy(<ByCity/>)
  }
  function func2(){
    let btn1 = document.getElementById("btn1")
    let btn2 = document.getElementById("btn2")
    let btn3 = document.getElementById("btn3")
    if(btn2){
      btn1.style.borderBottom = "none"
      btn2.style.borderBottom = "2px solid red"
      btn3.style.borderBottom = "none"
    }
    setBy(<ByModel/>)
  }
  function func3(){
    let btn1 = document.getElementById("btn1")
    let btn2 = document.getElementById("btn2")
    let btn3 = document.getElementById("btn3")
    if(btn3){
      btn1.style.borderBottom = "none"
      btn2.style.borderBottom = "none"
      btn3.style.borderBottom = "2px solid red"
    }
    setBy(<ByPrice/>)
  }
  const [by , setBy] = useState(<ByCity/>)

  return (
<div className=" p-10 flex  justify-center w-full">
  
<div className="bg-white  shadow-lg  h-[27rem] max-md:h-fit p-1 flex flex-col items-center   w-[90vw] ">
  <p className="text-xl w-full border-l-4  border-red-500 px-2">POPULAR USED CARS</p>
<div className="flex  w-full    items-center  border-b-1 justify-around h-[5rem]  ">
  <button id="btn1" onClick={func}  className="bg-white w-[10rem]  border-b-[2px] border-red-500 rounded-sm shadow-sm max-sm:w-[4.8rem] capitalize font-semibold max-sm:h-fit h-full p-1">by city</button>
  <button id="btn2" onClick={func2} className="bg-white w-[10rem]   rounded-sm shadow-sm max-sm:w-[4.8rem] capitalize font-semibold max-sm:h-fit h-full p-1">by model</button>
  <button id="btn3" onClick={func3} className="bg-white w-[10rem]   rounded-sm shadow-sm max-sm:w-[4.8rem] capitalize font-semibold max-sm:h-fit h-full p-1">by price</button>

</div>
{by}
</div>
</div>
)
}

export default PopularUsedCars