import Image from "next/image";
import Link from "next/link";
import table from "/public/Image 1.svg";
import hand from "/public/photo.png";

export default function Home() {
  return (
    <div>
      <div className=" flex">
        <li>
          <Link href="/loan">
            <a className=" text-3xl">Loan rates</a>
          </Link>
        </li>
        <li>
          <Link href="/curedebt">
            <a className=" text-3xl">banks</a>
          </Link>
        </li>
        <li>
          <Link href="/insurance">
            <a className=" text-xl">insurance</a>
          </Link>
        </li>
        <li>
          <Link href="/impactev">
            <a className=" text-xl">impactev</a>
          </Link>
        </li>
      </div>
      <div className="w-full  py-5  2xl:w-[1536px] 2xl:mx-auto   ">
        <Image src={hand} layout="responsive" alt="homepage" />
      </div>
      <div className="w-full font-lato font-medium  lg:px-10 xl:px-12   md:w-[85%] xl:w-[1280px] mx-auto">
        <div className="flex  flex-row px-10  ">
          <p href="" className="   ">
            <i className="fa-solid fa-calendar-days px-2"></i>
            27.6.2022
          </p>
          <a href="" className=" px-5 ">
            <i className="fa-solid fa-user px-2 "></i>
            karthi
          </a>
        </div>
        <div className=" px-3">
          <div className="w-full pt-10   py-4 text-lg">
            <h1 className="w-full font-bold text-3xl text-blue-700 px-8 xl:text-5xl">
              Why are Metal Stocks Falling?
            </h1>

            <div className="w-full  px-10 py-5   text-xl  ">
              <p className="w-full pt-3 ">
                With a new day, comes another fall in metal stocks. Industrial
                metal prices are trading at multi-month lows.
              </p>
              <p className="py-1.5">
                The BSE Metal index slipped 5.6% earlier this week on 10 May
                2022 and is down 20.6% in the past month.
              </p>
              <p className="py-1.5">
                The index fell yet again yesterday before recovering at the end.
                Today, the BSE metal index is the top loser and is down a
                whopping 3.4%!
              </p>
              <p className=" py-1">
                Sharp declines in the underlying commodity and metal stocks have
                become a routine after the BSE metal index reached an all-time
                high of 23,743 on 11 April 2022.
              </p>
            </div>
            <h2 className=" text-blue-700   font-bold text-xl py-2 px-2  pt-10">
              #1 The economic slowdown in China
            </h2>
            <div className="px-0.5 text-xl  tab:px-2">
              <p className=" pt-1">
                China is the biggest consumer as well as supplier of industrial
                metals around the globe. As per official data, sweeping Covid-19
                lockdowns have taken a toll on the countrys growth.
              </p>
              <p className="py-1">
                Copper imports have fallen by 4% year-on-year (YoY) in April
                owing to dampened demand since production is not in full swing.
              </p>
              <p className=" py-1">
                Retail sales fell 3.5% in March compared with the previous year
                as the authorities introduced strict new anti-virus controls.
              </p>
              <p className=" py-1">
                Shanghai, the countrys financial hub, has been largely sealed
                off for weeks. Tesla recently reported that it might have to
                halt production in its Shanghai plant which was already being
                operated well below capacity.
              </p>
              <p className=" py-1">
                The company is facing challenges getting production lines back
                up to speed while keeping workers on-site in a
                &quot;closed-loop&quot; system. Even if they manage to get
                everything right, such firms depend on suppliers facing similar
                challenges causing lack of raw materials.
              </p>
            </div>
            <h2 className="w-full text-xl text-blue-700 font-bold pt-5">
              #2 Strengthening of the Dollar Index
            </h2>
            <div className="text-xl">
              <p className=" py-1 ">
                When it comes to international trade for raw materials, the US
                dollar is the exchange mechanism in many if not most cases.
              </p>
              <p className=" py-1">
                When the value of the dollar rises, it costs fewer dollars to
                buy commodities. At the same time, it costs a greater amount of
                other currencies for trading in commodities when the dollar is
                moving higher.
              </p>
            </div>

            <h2 className="w-full  text-xl text-blue-700 font-bold pt-5">
              #3 Supply exceeds demand
            </h2>
            <div className=" w-full text-xl ">
              <p className=" py-1">
                Classic economics teaches that prices fall when supply exceeds
                demand.
              </p>
              <p className=" py-1">
                The international copper study group recently revised the usage
                growth of refined copper down to 1.9%, indicating surplus in the
                global markets for next two years.
              </p>
              <p className=" py-1">
                This was due to a weaker global economic outlook mainly as a
                consequence of the Russia-Ukraine situation and the negative
                effect Covid-19 related lockdowns in China.
              </p>
              <p className=" py-1">
                The finance minister of Chile, the largest copper producing
                country in the world, recently stated that global growth would
                be slow whereas domestic demand is also weak.
              </p>
            </div>
          </div>
          <div className="w-full  py-16 md:w-[75%] lg:w-[60%] xl:w-[70%] 2xl:w-[70%] mx-auto">
            <Image src={table} layout="responsive" alt="homepage" />
          </div>
          <h2 className="w-full text-xl text-blue-700 font-bold px-2 pt-5">
            In conclusion...
          </h2>
          <div className="px-2 text-xl">
            <p className=" py-1">
              Prices are still holding high because of the continuing
              uncertainty over supply disruptions, decarbonisation measures
              globally, especially in China, and geopolitical risks from the
              Russia-Ukraine war, which has driven up raw material costs.
            </p>
            <p className=" py-1">
              But according to experts, the sharp correction in metals will
              continue till May expiry.
            </p>
            <p className=" py-1">
              While this consolidation negatively impacts metal stocks, it can
              help companies affected by high raw material costs revive their
              operating margins.
            </p>
            <p className=" py-1">
              The auto sector and realty sector are set to gain the most from
              this correction.
            </p>
            <p className=" py-1">
              However, the global markets are quite volatile to predict the
              extent of corrections in metals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
