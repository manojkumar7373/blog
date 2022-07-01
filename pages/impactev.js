import React from "react";
import Image from "next/image";
import Impactev from "../public/impactevs/photo.svg";

export default function impactev() {
  return (
    <div>
      <div>
        <Image src={Impactev} layout="responsive" alt="homepage" />
      </div>
    </div>
  );
}
