import  { Component } from 'react'
import data from "../CarsData.json"
import Carcard from './Carcard'
export default class ByModel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : this.data
    }

  }
  render() {
    return (
      <div className='flex  flex-wrap justify-around w-full  h-full items-center'>
     {
      data.fistdata.map((element) => {
        return <div className='max-sm:space-y-2 space-y-0 bg-b  ' key={element.img}> <Carcard nam={element.nam} img={element.img} /> </div>
      })
     } 
      </div>
    )
  }
}
