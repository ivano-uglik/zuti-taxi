import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import PlavaVinkovacka from "./assets/images/PlavaVinkovacka.png";
import Taxi from "./assets/images/taxiTEMPDark.png";
import TaxiOne from "./assets/images/taxiTEMPone.jpg";
import TaxiTwo from "./assets/images/taxiTEMPtwo.jpg";

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
      >
        <div className="h-[82vh] object-cover">
          <img
            src={Taxi}
            className="w-auto h-full object-cover object-center"
          />
        </div>
        <div className="h-[82vh] object-cover">
          <img
            src={TaxiOne}
            className="w-auto h-full object-cover object-center"
          />
        </div>
        <div className="h-[82vh] object-cover">
          <img
            src={TaxiTwo}
            className="w-auto h-full object-cover object-center"
          />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
