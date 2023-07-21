import  { Component } from 'react'
import logos from "../CarsData.json"
import BrandCard from "./BrandCard"
import { FaAngleDoubleDown ,FaAngleDoubleUp } from 'react-icons/fa'
export class SearchNewCarsByBrand extends Component {
  constructor(props) {
    super(props)
    this.state = {
     logos :this.logos,
     show: "h-[10rem]",
     text: "show more",
     icon: <FaAngleDoubleUp className=' text-2xl text-gray-600 '/>
    } 
    
  }
  showHide = ()=>{
    if(this.state.show == "h-[10rem]"){
this.setState({show : "h-fit"})
this.setState({text:"show less"})
this.setState({icon:<FaAngleDoubleDown className=' text-2xl text-gray-600 '/>})  

    }
    else{
this.setState({show : "h-[10rem]"})
this.setState({text:"show more"})
this.setState({icon:<FaAngleDoubleUp className=' text-2xl text-gray-600 ' />})  

    }
  }
  render() {
    return (
      <div className='w-full flex  flex-col justify-center items-center h-fit  p-5'>
      <div className='flex w-[90vw]   bg-white flex-col p-1'>
        <h1 className='border-l-[4px] sans text-xl p-1 border-red-600  '>
      Search New Cars By Brand
        </h1>
         <div className={`  ${this.state.show} max-sm:flex-nowrap max-sm:overflow-scroll transition-[5s] overflow-hidden w-full justify-between  p-2  flex  flex-wrap '`}>
            {logos.thirdData.map((element) =>{
              return <div className='flex justify-center  items-center ' key={element.brandName}> <BrandCard logo = {element.logo} brandName={element.brandName}/></div>
            })}
         </div>
      </div>
    <button  className=' relative animate-bounce  max-sm:hidden '>{this.state.icon}</button>
      
<button onClick={this.showHide} className='max-sm:hidden bg-red-600 p-1 transition-[1s] rounded-sm w-[6rem] h-fit  mt-5   text-white hover:scale-95'>{this.state.text}</button>
      </div>
    ) 
  }
}

export default SearchNewCarsByBrand