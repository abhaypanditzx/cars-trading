import { Component } from "react";
import mydata from ".././CarsData.json";
import PopularCarsCard from "./PopularCarsCard";
import {  FaChevronLeft, FaChevronRight } from "react-icons/fa";
export default class PopularCars extends Component {
  func() {
    let e = document.getElementById("element");
    e.scrollLeft -= 50;
  }
  func2() {
    let e = document.getElementById("element");

    e.scrollLeft += 150;
  }
  constructor(props) {
    super(props);
    this.state = {
      mydata: this.mydata,
    };
  }

  render() {
    return (
      <div className="flex flex-row w-full items-center  ">
        <FaChevronLeft onClick={this.func} className=" text-gray-700  hover:bg-gray-200 mr-1 cursor-pointer rounded-full p-0.5  text-4xl"/>

        <div
          id="element"
          className="h-full  flex w-full  overflow-scroll overflow-x-hidden overflow-y-hidden  space-x-5 "
        >
          {mydata.secondData.map((element) => {
            return (
              <div key={element.PcName}>
                <PopularCarsCard
                  PcName={element.PcName}
                  PcImg={element.PcImg}
                  PcPrice={element.PcPrice}
                />{" "}
              </div>
            );
          })}
        </div>
        <FaChevronRight
          onClick={this.func2}
          className=" text-4xl text-gray-700  hover:bg-gray-200 mr-1 cursor-pointer rounded-full p-0.5 "
        />
      </div>
    );
  }
}
