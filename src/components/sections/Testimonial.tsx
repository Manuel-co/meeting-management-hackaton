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
        />
      </div>
    </div>
  );
}

export default Testimonial;
