import React from "react";
import Image from "next/image";
import Finance from "/public/Refine/pic1.svg";
import Flexible from "/public/Refine/pic2.svg";
export default function Home() {
  const careers = [
    {
      image: Finance,
      title: "Refinancing",
      description:
        "If your current home loan is at a higher interest than  other lenders are offering now,think ederetfg5  5edrefd rdred e5derde5d 5",
    },
    {
      image: Flexible,
      title: "Flexible Repayment",
      description:
        "Opt for a home loan provider who offers longer tenure loans, flexible repayment options etc.",
    },
  ];
  return (
    <div className=" bg-[#F1F7F0] pb-10  ">
      <div className="  text-center ">
        <div className=" text-[32px]  font-Montserrat font-bold text-center pt-5">
          <a className="text-[#5E8A3F] "> Still Paying</a> Higher Interest Rate?
        </div>
        <p className="text-[14px] font-Montserrat font-normal pt-4">
          Don&apos;t let high EMIs come in the way of your dreams. Switch your
          home loan without any hassle and enjoy
          <br /> benefits such as lower rate of interest, affordable EMIs, top
          up loan and much more.
        </p>
      </div>

      <div className="   ">
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:w-[1024px] mx-auto  ">
          {careers.map((item) => {
            return (
              <div className=" flex  p-3 ">
                <div className="flex-shrink-0 pb-3">
                  <Image src={item.image} className="h-10 w-[100%]" />
                </div>

                <div className="pl-3  w-full ">
                  <h3 className="text-[#5E8A3F]  text-[20px]">{item.title}</h3>
                  <p className=" text-[12px] font-Montserrat ">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
