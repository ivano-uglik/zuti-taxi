import React from "react";
import { Link } from "react-scroll";

const ScrollTop = () => {
  return (
    <div className="">
      <div className="relative">
        <Link
          to="navbar"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="text-taxiYellow bg-taxiBlack p-4 m-8 cursor-pointer absolute right-0 bottom-0"
          // &#x25B2;
        >
          <span>&#x25B2;</span>
        </Link>
      </div>
    </div>
  );
};
// &#x25B2;
export default ScrollTop;
