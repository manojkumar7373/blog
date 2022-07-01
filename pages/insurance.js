import React from "react";
import Image from "next/image";
import Insurance from "../public/insurance/photo.svg";
import Link from "next/link";

export default function insurance() {
  return (
    <div className="w-full  py-5 font-lato  2xl:w-[1536px] 2xl:mx-auto">
      <div>
        <Image src={Insurance} layout="responsive" alt="homepage" />
      </div>
      <div
        className="w-full  lg:px-10 xl:px-12 
                  md:w-[85%] lg:w-[85%] xl:w-[1280px] mx-auto px-3"
      >
        <div className="flex py-5 justify-between tab:justify-start tab:space-x-2 px-1">
          <p href="" className="   ">
            <i className="fa-solid fa-calendar-days pr-1"></i>
            27.6.2022
          </p>
          <a href="" className=" ">
            <i className="fa-solid fa-user pr-1 "></i>
            shanmugavel
          </a>
        </div>
        <h className="font-bold  text-4xl text-blue-800 py-5">
          Does IRDAI Sell Insurance?
        </h>
        <h2 className="font-bold  text-blue-800 py-5">
          Understanding role & responsibilities of IRDAI
        </h2>
        <p>
          "Hello Mr. Varun, I am calling from the IRDAI. We have a new insurance
          plan for you. You will have to return your existing policy so that we
          can send you a new one with more benefits. Let me take you through the
          process." said the caller.
        </p>
        <p className="py-5">
          Luckily Varun was aware that IRDAI doesn't sell insurance and never
          calls policyholders.
        </p>
        <p>
          He knew that IRDAI only regulates the insurance industry. He reported
          this call to the police.
        </p>
        <p className="py-5">
          However, most policyholders are not aware of these things and fall
          into this trap. They either end up divulging critical financial
          information or get duped into buying an additional insurance policy.
        </p>
        <h2 className="font-bold  text-blue-800 pt-5">
          Here's a more detailed account of the IRDAI:
        </h2>
        <h1 className="font-bold  text-blue-800 pt-5">What is IRDAI?</h1>
        <p>
          The Insurance Regulatory and Development Authority (IRDAI) of India is
          an independent body created to protect the interests of policyholders,
          to regulate, promote and ensure orderly growth of the insurance
          industry in India.
        </p>
        <h1 className="font-bold   text-blue-800 pt-5">
          What does the IRDAI do?
        </h1>
        <p>
          The activities of the IRDAI are governed by Section 14 of the IRDAI
          Act, 1999. It states the duties, powers, and functions of IRDAI. These
          include:
        </p>
        <h1 className="font-bold   text-blue-800 pt-5">
          1. Registering and Regulating Insurance Companies:
        </h1>
        <p>
          The IRDAI regulates insurance companies overseeing premium rates and
          terms of non-life insurance covers, specifying financial reporting
          norms of insurance companies, and setting up licensing norms.
        </p>
        <h1 className="font-bold   text-blue-800 pt-5">
          2. Protecting Policyholders' Interests:
        </h1>
        <p>
          The IRDAI's other equally important function is protecting your
          interests. It does this by regulating the investment of your funds by
          insurance companies and by ensuring that insurance companies maintain
          their solvency ratio so your interests are safeguarded.
        </p>
        <p className="py-5">
          However, none of its activities include selling or promoting any
          insurance policies.
        </p>
        <p>
          So, the next time you receive a call/ message/email from someone
          posing as an IRDAI representative, seeking your personal insurance
          details, contact the police or register a complaint with the IRDAI.
          <b className=" text-blue-800">
            Call the Toll Free Number 155255 (or) 1800 4254 732 or report the
            incident at complaints@irda.gov.in.
          </b>
        </p>
      </div>
    </div>
  );
}
