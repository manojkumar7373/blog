import Link from "next/link";
import Image from "next/image";
import Cure from "../public/curedebt/curedebt.svg";
import note from "../public/curedebt/Image 2.svg";
import React from "react";

export default function curedebt() {
  return (
    <div className="w-full  py-5 font-lato  2xl:w-[1536px] 2xl:mx-auto">
      <div className=" ">
        <Image src={Cure} layout="responsive" alt="curedebt" />
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
          Gross NPA of PSBs <br />
          Down to Rs5.60 Lakh Crore;
        </h>
        <div className=" py-5">
          <p>
            Primarily due to transparent recognition of stressed assets as
            non-performing assets (NPAs), the gross NPAs of public sector banks
            (PSBs) rose to Rs8.96 lakh crore as of 31 March 2018 from Rs2.79
            lakh crore as of 31 March 2015.
          </p>
          <p className="py-4 font-bold  text-blue-800">
            As a result of the Union government's strategy of recognition,
            resolution, recapitalisation and reforms, they have since declined
            to Rs5.60 lakh crore as of 31 December 2021, the Rajya Sabha was
            told.
          </p>
          <p>
            In a written reply, Dr Bhagwat Karad, minister of state for finance,
            says, "As per data reported by Reserve Bank of India (RBI), PSBs
            have effected a total recovery of Rs3,12,987 crore, in NPA accounts
            and written-off loans since FY19 to FY21."
          </p>
          <p className="py-4">
            Interestingly, in December 2021, Mr Karad had told the upper house
            that, from June 2014 to September 2021, gross NPAs of 13 banks,
            including IDBI Bank Ltd (which had become a private sector bank),
            increased to Rs5,40,442 crore from Rs2,24,542 crore.
          </p>
          <p className="font-bold  text-blue-800">
            This, in other words, means, in three months between September to
            December 2021, the gross NPAs of PSBs increased by Rs20,000 crore.
          </p>
          <p className="py-4">
            Shaktisinh Gohil, a member of Parliament (MP), had asked about the
            total number of private sector banks that failed after 1969 and
            which failed private sector banks were bailed out by PSBs. He had
            also asked for information for the past three years about NPAs in
            PSBs, provisions for NPAs, amount written off and recovered by these
            lenders.
          </p>
          <p>
            However, Mr Karad, the minister of state, did not share any figure
            for the number of banks failed after 1969. Instead, he reiterated
            that in a scenario where a bank is on the verge of failure and other
            options have not worked, to safeguard the interest of the depositors
            and ensure the stability of the financial system, the Reserve Bank
            of India (RBI) makes efforts for resolution of the concerned bank.
          </p>
        </div>
        <div className="w-full  py-5 md:w-[75%] lg:w-[60%] xl:w-[70%] 2xl:w-[35%] mx-auto">
          <Image src={note} layout="responsive" alt="curedebt" />
        </div>
        <div>
          <p>
            However, figures for some of these PSBs are not strictly comparable
            since some of the written off amounts belong to banks that were
            merged. On 1 April 2019, two lenders, viz., Vijaya Bank and Dena
            Bank, were merged with BoB. Next year, Oriental Bank of Commerce and
            United Bank of India were amalgamated into PNB, while Andhra Bank
            and Corporation Bank were merged with UBI.
          </p>
          <p className="py-4">
            A total of 10 PSBs were merged with effect from 1 April 2020. With
            the merger coming into effect, India has 12 PSBs, down from 27 in
            2017.
          </p>
          <p>
            In his reply, Dr Karad also reiterated that the Cabinet committee
            has not yet taken any decision for privatisation of two PSBs. In
            Budget 2022, finance minister (FM) Nirmala Sitharaman had announced
            the government's intent to privatise two PSBs.
          </p>
          <p className="py-4">
            FM Sitharaman had also given the same reply in December 2021.
            "Consideration of various issues related to disinvestment, which,
            inter alia, include the selection of the banks, is entrusted to the
            cabinet committee designated for this purpose. A decision by the
            cabinet committee concerned for privatisation of PSBs has not been
            taken in this regard," she had said in a written reply in the Lok
            Sabha.
          </p>
          <p>
            Earlier, while replying to a question asked by MP Dr Amar Patnaik,
            the minister of state had informed that the average time between the
            occurrence of fraud and detection in FY20-21 was 23 months, and the
            same in the case of large value frauds of Rs100 crore and above was
            57 months.
          </p>
          <p className="py-4">
            RBI, in its annual report for FY20-21, has stated that private
            sector banks have reported a rise of 35% in value terms in frauds
            while PSBs have reported a decline of 45%. According to data
            disclosed by the central bank, 59.2% of the total value of frauds
            were reported by public sector banks, followed by private sector
            banks at 33.5% during 2020-21.
          </p>
          <p>
            In terms of area of operations, RBI had said, frauds have been
            occurring predominantly in the loan portfolio or advances category,
            both in terms of number and value.
          </p>
        </div>
      </div>
    </div>
  );
}
