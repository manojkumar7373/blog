import Image from "next/image";
import Link from "next/link";
import React from "react";
import Rates from "../public/loanrates/loanrates.png";
import block from "../public/loanrates/photo.svg";

export default function loanrates() {
  return (
    <div className="w-full  py-5 font-lato  2xl:w-[1536px] 2xl:mx-auto ">
      <div>
        <Image src={Rates} layout="responsive" alt="loanrates" />
      </div>
      <div
        className=" w-full  lg:px-10 xl:px-12 
                  md:w-[85%] lg:w-[85%] xl:w-[1280px] mx-auto px-3"
      >
        <div className="flex py-5 justify-between tab:justify-start   tab:space-x-2 px-1">
          <p href="" className="   ">
            <i className="fa-solid fa-calendar-days pr-1"></i>
            27.6.2022
          </p>
          <a href="" className="pl-5 ">
            <i className="fa-solid fa-user pr-1 "></i>
            shanmugavel
          </a>
        </div>
        <h className=" font-bold  text-4xl text-blue-800 py-5">
          How the hike in home loan rates <br />
          will impact housing market
        </h>
        <h3 className=" text-blue-800 font-bold py-5">
          According to industry experts, a 1 per cent hike in housing loan
          interest rate reduces house purchase affordability by 7.4%.
        </h3>
        <p>
          The recent hike in home loan interest rates by banks and housing
          finance companies – following an off-cycle repo rate hike by the RBI
          in May – has come at a time when the real estate sector has just
          started picking up momentum after a couple of years.
        </p>
        <p className=" py-4">
          From SBI to HDFC Ltd and from PNB to LIC Housing Finance, almost all
          banks and HFCs have revised their lending rates upwards in recent
          weeks, which certainly doesn’t seem to be a good move for the housing
          sector as it will ultimately impact the overall acquisition cost for
          homebuyers and may dampen residential sales to some extent.
        </p>
        <h3 className=" text-blue-800 font-bold">
          According to industry experts, a 1 per cent hike in housing loan
          interest rate reduces house purchase affordability by 7.4%.
        </h3>
        <p className=" py-4  ">
          “At a time when the real estate sector had just begun to pick up, the
          increase in home loan interest rates, even though negligible, would
          act as a psychological barrier for the buyers. Coupled with the
          increase in input costs that to an extent had forced developers to
          increase the prices of property, it would act as a dampener to the
          buyer’s spirit, especially the ones looking for homes in the
          affordable segment,” says Sanjay Sharma, Director, SKA Group.
        </p>
        <div className="w-full  py-5 md:w-[75%] lg:w-[60%] xl:w-[70%] 2xl:w-[70%] mx-auto">
          <Image src={block} layout="responsive" alt="table" />
        </div>
        <div>
          <p>
            For the real estate sector dealing with sluggish sales during the
            last few years, the apprehension is writ large.
          </p>
          <p className=" py-4">
            “The increase in interest rates by banks could not have come at a
            worse time. With buyers shaking off the negative spirits of the
            pandemic and seeking to benefit from the historic-low costs of the
            dwelling units as well as historic-low home loan interest rates, the
            move by the banks would definitely have an impact on buyers’
            sentiments. Further, it will affect the real estate sector that had
            begun to pick pace after a gap of two to three years and which among
            others is one of the largest generators of employment. Most of all,
            it also signals that the days of low home loan interest rates are
            over,” says Nayan Raheja, Raheja Developers.
          </p>
          <p>
            Dharmesh Shah, CEO, Hero Realty, says,
            <b>
              {" "}
              “The increase in rates has come at a wrong time. However, this
              also considerably marks a sense of stability as the end of
              low-interest rates will bring the serious buyers into focus.”
            </b>
          </p>
          <p className=" py-4">
            Some real estate developers are also of the view that this round of
            interest hikes could have been deferred for some time.
          </p>
          <p>
            “The interest rate hikes by banks, especially after the RBI raised
            the base rates, was a foregone conclusion. However, I wish that the
            banks had waited for a few more months for this series of hikes. At
            least it could have waited for the real estate sector to pass on the
            benefits of the reduction in fuel prices and the decrease in the
            price of iron (through hike in export duty) to the customers. The
            move will also affect the development of the commercial and retail
            segments,” says Sachin Gawri, CEO & Founder, Rise Infraventures
            Limited.
          </p>
          <p className=" py-4">
            A few developers said the current round of hikes could make the
            buyers apprehensive and they might as well adopt a wait and watch
            attitude for some more time.
          </p>
          <p>
            “The current hike in home loan interest rates by banks will surely
            convey to home buyers that interest rates are only going to go
            northwards. Contrary to the popular perception that any such
            increase only affects the affordable housing segment, the move,
            according to me, will also leave a big impact in the big-ticket
            luxury segment that involves high volumes of money, hence higher
            EMIs and higher interest amount. Besides, since one of the banks has
            increased its RPLR three times in one month, the move will also add
            to the uncertainty regarding the quantum of hikes in the future,”
            says Deepak Kapoor, Director, Gulshan Homz.
          </p>
        </div>
      </div>
    </div>
  );
}
