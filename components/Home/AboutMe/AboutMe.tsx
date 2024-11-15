import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    ["JavaScript", "TypeScript", "Python", "Java", "C++ (Arduino)"],
    ["NextJs","NuxtJs","VueJs", "Flask", "Laravel" ],
    ["Flutter", "React-native",  "Tailwind Css","Shadcn UI", "Portainer"],
  ];
  return (
    <div id="sectionAPropos" data-aos="fade-up" className="snap-start flex flex-col items-center py-20 bg-AAprimary">
    <div
      className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
      md:w-[700px] lg:w-[900px]"
    >
      <div className="flex flex-row items-center ">
        <div className="flex flex-row items-center mr-4">
          <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
          <span className="text-AAsecondary font-Header text-sm sm:text-xl"> 01.</span>
          <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
            À Propos de Moi
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
      </div>

      <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2 ">
        <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
        <div className="font-Header">
  <span className="text-gray-400">
    Salut ! Je suis <span className="text-AAsecondary">Emmanuel Malan</span>, ingénieur logiciel passionné, déterminé à transformer des idées en solutions concrètes . Mon parcours dans l’univers de l’informatique a débuté en 2018, avec une immersion dans le langage Python.
  </span>
</div>
<div className="font-Header">
  <span className="text-gray-400">
    Depuis ma licence 2 en <span className="text-AAsecondary">MIAGE</span>, j&apos;ai travaillé sur une multitude de projets pour diverses entreprises, renforçant ainsi mon expertise. J&apos;aime repousser les limites et innover, restant à l&apos;affût des dernières technologies pour relever de nouveaux défis. Ma quête d&apos;apprentissage continu et mon engagement à créer un impact me poussent à toujours me surpasser.
  </span>
</div>  

          <div className="font-Header tracking-wide">
            <span className="text-gray-400  ">
              Voici quelques technologies avec lesquelles j&apos;ai récemment travaillé :
            </span>
          </div>
          <div className="font-Header tracking-wide flex flex-row space-x-16">
            <div className="flex flex-row space-x-2 items-center">
              <div className="flex flex-col space-y-4 sm:text-base text-sm">
                {technologies[0].map((tech, index) => {
                  return (
                    <div key={index} className="flex flex-row items-center space-x-2">
                      <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                      <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <div className="flex flex-col space-y-4 sm:text-base text-sm">
                {technologies[1].map((tech, index) => {
                  return (
                    <div key={index} className="flex flex-row items-center space-x-2">
                      <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                      <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <div className="flex flex-col space-y-4 sm:text-base text-sm">
                {technologies[2].map((tech, index) => {
                  return (
                    <div key={index} className="flex flex-row items-center space-x-2">
                      <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                      <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/sminth.jpeg"}
                className={"object-contain rounded-lg"}
                alt="Image Emmanuel Malan"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/sminth.jpeg"}
                className={"object-contain rounded-lg"}
                alt="Image Emmanuel Malan"
              />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
