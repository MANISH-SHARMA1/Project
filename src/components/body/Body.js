import React from "react";
import "./Body.scss";
import Top from "../top/Top";
import Builder from "../builder/Builder";
import { BsTrophy } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import RelatedDeals from "../relatedDeals/RelatedDeals";

function Body() {
  // data for the Builder Component cards
  const data = [
    {
      icon: <BsTrophy />,
      iconValue: "Best Choice",
      count: "1",
      builder: "Builder 1",
      span: "WixPro 72-Inch Responsive Website Builder-",
      description:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professinal Websites and Online Stores (Black/Blue)",
      highlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: "9.8",
      service: "Exceptional",
    },
    {
      icon: <IoDiamondOutline />,
      iconValue: "Best Value",
      count: "2",
      builder: "Builder",
      span: "SiteCraft 68-Inch Ultimate Web Design Studio-",
      description:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      highlights:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      rating: "9.5",
      service: "Excellent",
    },
    {
      icon: null,
      iconValue: null,
      count: "3",
      builder: "Builder 1",
      span: "WixPro 72-Inch Responsive Website Builder-",
      description:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      highlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: "9.3",
      service: "Exceptional",
    },
    {
      icon: null,
      iconValue: null,
      count: "4",
      builder: "CDK",
      span: "CDK Responsive Builder:",
      description:
        "An extensive library of widgets and apps, and detailed step-by-step guides",
      highlights: null,
      rating: "9.1",
      service: "Very Good",
    },
  ];

  // data for the RelatedDeals Component cards
  const relatedDealsData = [
    {
      name: "Webbuilder 1",
      description: "Computer Modern classic with wix support",
      price: "39.96",
      dealPrice: "49.96",
      off: "20",
    },
    {
      name: "Webbuilder 1",
      description: "Computer Modern classic with wix support",
      price: "39.96",
      dealPrice: "49.96",
      off: "20",
    },
    {
      name: "Webbuilder 1",
      description: "Computer Modern classic with wix support",
      price: "39.96",
      dealPrice: "49.96",
      off: "20",
    },
  ];
  return (
    <div className="body">
      {/* Holds the top part of the body */}
      <Top />

      {/* Reusable Builder Component */}
      <Builder data={data} />

      <h2>Related deals you might like for</h2>

      {/* Reusable RelatedDeals Component */}
      <div className="relatedDeals">
        <RelatedDeals relatedDealsData={relatedDealsData} />
      </div>

      <div className="signup">
        <p>Sign up and get exclusive special deals</p>
        <button id="signUpBtn">Sign Up</button>
      </div>
    </div>
  );
}

export default Body;
