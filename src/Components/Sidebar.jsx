import {  FaTimes,  } from 'react-icons/fa'

function Sidebar(props) {
  function side2(){
  props.setDisplay("hidden")
  props.setBar("block")
  }
  return (
    <div className={`w-[95%] bg-white/30 backdrop-blur-md  h-full right-0 flex flex-col top-0 fixed  ${props.display}`}>

    <button className=' text-black w-full h-fit  text-4xl self-start  ' onClick={side2} >
    <FaTimes />
    </button>


        <ul className='text-black w-full  self-center  justify-center flex flex-col items-start  space-y-2   p-2'>
          <li className='p-1 backdrop-blur-sm rounded-md bg-white/60 h-[3rem] shadow-md w-full '>USED CARS</li>
          <li className='p-1 backdrop-blur-sm rounded-md bg-white/60 h-[3rem] shadow-md w-full '>CAR LOAN</li>
          <li className='p-1 backdrop-blur-sm rounded-md bg-white/60 h-[3rem] shadow-md w-full '>SELL CAR</li>
          <li className='p-1 backdrop-blur-sm rounded-md bg-white/60 h-[3rem] shadow-md w-full '>NEWS AND REVIEWS</li>
        </ul>
      
    </div>
  )
}

export default Sidebar;
