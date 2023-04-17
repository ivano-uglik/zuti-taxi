import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import Taxi from "./assets/images/taxiTEMPDark.png";
import TaxiOne from "./assets/images/taxiTEMPone.jpg";
import taxiA from "./assets/images/taxiA.webp";
import taxiB from "./assets/images/taxiB.webp";
import taxiC from "./assets/images/taxiC.webp";
import taxiD from "./assets/images/taxiD.webp";
import taxiE from "./assets/images/taxiE.webp";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={0}
        stopOnHover={false}
        showThumbs={false}
        dynamicHeight={false}
        transitionTime={1000}
        interval={5000}
        swipeable={false}
        showStatus={false}
      >
        <div className="h-[82vh] object-cover object-center">
          <img
            src={taxiE}
            className="w-auto h-full object-cover object-center"
          />
        </div>
        <div className="h-[82vh] object-cover">
          <img
            src={taxiD}
            className="w-auto h-full object-cover object-center"
          />
        </div>
        {/* <div className="h-[82vh] object-cover">
          <img
            src={Taxi}
            className="w-auto h-full object-cover object-center"
          />
        </div> */}
        <div className="h-[82vh] object-cover object-center">
          <img
            src={taxiB}
            className="w-auto h-full object-cover object-center"
          />
        </div>
        <div className="h-[82vh] object-cover object-center">
          <img
            src={taxiA}
            className="w-auto h-full object-cover object-center"
          />
        </div>
        <div className="h-[82vh] object-cover object-center">
          <img
            src={taxiC}
            className="w-auto h-full object-cover object-center"
          />
        </div>
        <div className="h-[82vh] object-cover object-center">
          <img
            src={taxiD}
            className="w-auto h-full object-cover object-center"
          />
        </div>
        <div className="h-[82vh] object-cover">
          <img
            src={TaxiOne}
            className="w-auto h-full object-cover object-center"
          />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
