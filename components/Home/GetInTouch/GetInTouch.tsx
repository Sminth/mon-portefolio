import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function GetInTouch() {
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-base"> 04.</span>
          <span className=" font-sans text-AAsecondary text-base">Next ?</span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">Entrer en contact</span>
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
      Bien que je sois toujours ouvert à toute nouvelle opportunité, ma boîte de réception est ouverte. Que vous ayez une question ou que vous souhaitiez simplement me dis bonjour, je ferai de mon mieux pour vous répondre !
      </p>
      <div className="pt-4">
        <a href="mailto:kassi.emmanuelmalan@gmail.com" target={"_blank"} rel="noreferrer">
          <button
            className="font-mono text-sm text-AAsecondary border-AAsecondary 
                            px-8 py-4 border-[1.5px] rounded "
          >
            Dis bonjour !
          </button>
        </a>
      </div>
    </div>
  );
}
