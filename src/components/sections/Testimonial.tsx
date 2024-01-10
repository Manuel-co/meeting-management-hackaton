import React from "react";
import Image from "next/image";

function Testimonial() {
  return (
    <div className="container mx-auto my-10">
      <div className="px-16 py-10 flex justify-center">
        <Image
          src="/img/testimonial.png"
          alt="testimonial"
          width="1200"
          height="628"
          className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ration-700"
        />
      </div>
    </div>
  );
}

export default Testimonial;
