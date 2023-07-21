import  { Component } from 'react'


export default class PopularCarsCard extends Component {
    render() {
        
        // eslint-disable-next-line react/prop-types
        let {PcName,PcPrice,PcImg} = this.props
    return (
        <div className="flex  border-[1px] border-gray-400 w-[20rem] max-sm:w-[13rem] flex-col">
        <div><img  className='' src={PcImg}/></div>
        <h1  className=" w-full hover:text-red-600 cursor-pointer  text-center  text-2xl capitalize">{PcName}</h1>
        <p className='w-full text-center font-bold'>{PcPrice}</p>
      </div>
    )
  }
}
