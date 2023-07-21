import { Component } from "react";

export class Carcard extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    let { nam, img } = this.props;
    return (
      <div className="flex  border-[1px] border-gray-400 flex-col">
        <div>
          <img alt="car-img" src={img} />
        </div>
        <h1 className=" w-full  text-center  text-2xl capitalize">{nam}</h1>
        <div className="capitalize text-center max-sm:text-sm w-full">
          <span className="text-red-500 p-1 max-sm:p-0  cursor-pointer">Mumbai</span>|{" "}
          <span className="text-red-500 p-1 max-sm:p-0  cursor-pointer">Delhi</span>|{" "}
          <span className="text-red-500 p-1 max-sm:p-0  cursor-pointer">Bangalore</span>|{" "}
          <span className="text-red-500 p-1 max-sm:p-0  cursor-pointer">Chennai</span>
        </div>
      </div>
    );
  }
}

export default Carcard;
