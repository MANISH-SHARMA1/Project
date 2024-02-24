import React from "react";
import "./Builder.scss";
import image from "../../assets/image.jpg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Button from "../buttons/cardButton/Button";

function Builder({ data }) {
  return (
    <>
      {data?.map((value) => (
        <div>
          <div className="builder">
            {/* represents the first part of builder component */}
            <div className="first">
              {/* Checks if value is null or not */}
              {value.icon == null ? (
                ""
              ) : (
                <p id="trophy">
                  {value.icon} {value.iconValue}
                </p>
              )}

              <p id="count">{value.count}</p>
              <img src={image} alt="" />
              <p id="builder1">{value.builder}</p>
            </div>

            {/* represents the second part of builder component */}
            <div id="second">
              {/* represents the top section of card */}
              <div className="topSection">
                <div className="leftPart">
                  <p>
                    <span>{value.span}</span> {value.description}
                  </p>

                  <span id="highlight">Main Highlights</span>

                  <div>
                    {/* Check if the highlight value is null */}
                    {value.highlights == null ? (
                      <>
                        <div className="mainHighlight" id="mainHighlight">
                          <p>
                            <span id="highlightRating">9.9</span> Building
                            Responsive
                          </p>
                          <p>
                            <span id="highlightRating">8.9</span> Cool
                          </p>
                          <p>
                            <span id="highlightRating">8.9</span> Docs
                          </p>
                        </div>
                        <h4>Why we love it</h4>
                        <div className="use">
                          <IoIosCheckmarkCircleOutline id="check" />
                          Documentation
                        </div>
                        <div className="use">
                          <IoIosCheckmarkCircleOutline id="check" />
                          Easy Use
                        </div>
                        <div className="use">
                          <IoIosCheckmarkCircleOutline id="check" />
                          Out of Box
                        </div>
                      </>
                    ) : (
                      <p className="mainHighlight">{value.highlights}</p>
                    )}
                  </div>
                </div>

                {/* represents the rating card */}
                <div className="rightPart">
                  <div className="ratingCard">
                    <h2>{value.rating}</h2>
                    <p>{value.service}</p>
                    <p id="star">*****</p>
                  </div>
                </div>
              </div>

              {/* represents the bottom section of card */}
              <div className="bottomSection">
                <div id="showMore">
                  Show more <RiArrowDropDownLine />
                </div>
                {/* Reusable Button Component */}
                <Button prop={"View"} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Builder;
