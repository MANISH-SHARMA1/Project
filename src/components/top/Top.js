import React from "react";
import "./Top.scss";
import { FaAngleRight } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  IoIosCheckmarkCircleOutline,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import TopButton from "../buttons/topButton/TopButton";

function Top() {
  // name of buttons
  const btnProp = [
    "Tools",
    "AWS Builder",
    "Start Build",
    "Build Supplies",
    "Tooling",
    "Blue Hosting",
  ];
  return (
    <div>
      <h1>Best Website builders in the US</h1>
      <hr />
      {/* Data inside horizontal lines */}
      <div className="horizontal">
        <div id="update">
          <div id="update1">
            <IoIosCheckmarkCircleOutline />{" "}
            <p> Last Updated - February 22, 2020</p>
          </div>
          <div id="update1">
            <IoIosInformationCircleOutline /> <p> Advertising Disclosure</p>
          </div>
        </div>
        <div id="sub">
          <p>Top Relevant</p>
          <RiArrowDropDownLine id="downArrow" />
        </div>
      </div>
      <hr />
      <div className="button">
        {/* Reusable Button Component */}
        {btnProp.map((btnName) => (
          <TopButton prop={btnName} />
        ))}
      </div>
      {/* Defines path */}
      <div className="path">
        <p>Home</p>
        <FaAngleRight />
        <p>Hosting for all</p>
        <FaAngleRight />
        <p>Hosting</p>
        <FaAngleRight />
        <p>Hosting6</p>
        <FaAngleRight />
        <p>Hosting5</p>
      </div>
    </div>
  );
}

export default Top;
