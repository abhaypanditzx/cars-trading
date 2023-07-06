import React from 'react'
import PopularCars from './PopularCars'
import UpcomingCars from './UpcomingCars'
import LatestLaunches from './LatestLaunches'

function PopularNewCars() {
  const [cars, setCars] = React.useState(<PopularCars/>)
  
    function func(){
        let btn4 = document.getElementById("btn4")
        let btn5 = document.getElementById("btn5")
        let btn6 = document.getElementById("btn6")
        if(btn4){
          btn4.style.borderBottom = "2px solid red"
          btn5.style.borderBottom = "none"
          btn6.style.borderBottom = "none"
        }
        setCars(<PopularCars/>)
        
      }
      function func2(){
        let btn4 = document.getElementById("btn4")
        let btn5 = document.getElementById("btn5")
        let btn6 = document.getElementById("btn6")
        if(btn5){
          btn4.style.borderBottom = "none"
          btn5.style.borderBottom = "2px solid red"
          btn6.style.borderBottom = "none"
          
        }
      
        setCars(<UpcomingCars/>)
      }
      function func3(){
        let btn4 = document.getElementById("btn4")
        let btn5 = document.getElementById("btn5")
        let btn6 = document.getElementById("btn6")
        if(btn6){
          btn4.style.borderBottom = "none"
          btn5.style.borderBottom = "none"
          btn6.style.borderBottom = "2px solid red"
        }
        setCars(<LatestLaunches/>)
        
      }
      
    
      return (
    <div className=" p-10 flex   justify-center w-full">
      
    <div className="bg-white  shadow-lg  h-[27rem] max-md:h-fit p-1 flex flex-col items-center   w-[90vw] ">
      <p className="text-xl w-full border-l-4 border-red-500 p-1">POPULAR NEW CARS</p>
    <div className="flex  w-full    items-center  border-b-[2px] border-gray-100 justify-around h-[5rem]  ">
      <button id="btn4" onClick={func}  className="bg-white w-[10rem] max-sm:text-[0.75rem] border-b-[2px] max-sm:w-[8rem] border-red-500 rounded-sm   capitalize font-semibold max-sm:h-fit h-full p-1">popular cars</button>
      <button id="btn5" onClick={func2} className="bg-white w-[10rem] max-sm:text-[0.75rem]  rounded-sm    max-sm:w-[8rem] capitalize font-semibold max-sm:h-fit h-full p-1">upcoming cars</button>
      <button id="btn6" onClick={func3} className="bg-white w-[10rem] max-sm:text-[0.75rem]  rounded-sm    max-sm:w-[8rem] capitalize font-semibold max-sm:h-fit h-full p-1">latest launches</button>
    
    </div>
{cars}
    </div>
    </div>
  )
}

export default PopularNewCars