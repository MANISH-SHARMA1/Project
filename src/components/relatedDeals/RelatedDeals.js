import React from "react";
import "./RelatedDeals.scss";
import image from "../../assets/image.jpg";
import Button from "../buttons/cardButton/Button";

function RelatedDeals({ relatedDealsData }) {
  return (
    <>
      {relatedDealsData?.map((value) => (
        <div className="cards">
          <img src={image} alt="" />
          <div className="banner">
            <p>{value.off}% Off</p>
            <p>Limited time</p>
          </div>
          <h5>{value.name}</h5>
          <p id="p">{value.description}</p>
          <div className="price">
            <h5>${value.price}</h5>
            <p>
              ${value.dealPrice} <span>({value.off}% Off)</span>
            </p>
          </div>
          {/* Reusable Button Component */}
          <Button prop={"View Deals"} />
        </div>
      ))}
    </>
  );
}

export default RelatedDeals;
