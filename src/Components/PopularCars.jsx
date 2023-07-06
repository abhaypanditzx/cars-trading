import  { Component } from 'react'
import mydata  from ".././CarsData.json"
import PopularCarsCard from './PopularCarsCard'
export default class PopularCars extends Component {
  func(){
    let e = document.getElementById("element")
    e.scrollLeft -= 50
    
  }
  func2(){
    let e = document.getElementById("element")
    e.scrollLeft += 50
    
  }
    constructor(props) {
        super(props)
        this.state = {
            mydata : this.mydata
        }
        
    }
    
  render() {

    return (
<div className='flex flex-row w-full items-center '>
   <svg onClick={this.func} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10  hover:bg-gray-200 cursor-pointer rounded-full p-0.5 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
   
<div id='element' className='h-full  flex w-full  overflow-scroll overflow-x-hidden overflow-y-hidden  space-x-5 '>
{mydata.secondData.map((element)=>{
    return <div key={element.PcName}>
      
        <PopularCarsCard PcName={element.PcName} PcImg={element.PcImg} PcPrice = {element.PcPrice} /> </div>
})}

      </div>
<svg onClick={this.func2} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 hover:bg-gray-200 cursor-pointer rounded-full p-0.5 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</div>
    )
  }
}
