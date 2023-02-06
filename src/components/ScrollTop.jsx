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
          className="font-semibold bg-taxiYellow rounded-2xl p-4 m-8 absolute right-0 bottom-0"
        >
          <button className="text-2xl">&#x25B2;</button>
        </Link>
      </div>
    </div>
  );
};
// &#x25B2;
export default ScrollTop;
