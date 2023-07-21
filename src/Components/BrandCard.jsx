/* eslint-disable react/prop-types */

import { Component } from "react"
export class BrandCard extends Component {
  render() {
    let {logo, brandName} =  this.props
        return (
      <div className='border-[1px] cursor-pointer mt-2 ml-2 flex flex-col h-[8rem] w-[8rem] justify-center items-center  bg-w  text-sm border-gray-500 '>
        <img className="h-14 w-24" src={logo}/>
        <p className="w-full text-center p-1">

        {brandName}
        </p>
        </div>
    )
  }
}

export default BrandCard