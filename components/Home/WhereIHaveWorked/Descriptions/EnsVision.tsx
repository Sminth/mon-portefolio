import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "Développement d'une application clone de Djamo utilisant Reat Native et Metro",
      keywords: ["Reat Native", "Metro"],
    },
    {
      text: "Conception et mise en place ..... Next.js, React.Js",
      keywords: ["Next.js",'React.Js'],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Fontend Dev <span className="text-AAsecondary">@ Js framework</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">21 Aout 2023 - en cours</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.everest-consulting.org/", "_blank")}
          >
            www.everest-consulting.org
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */} 
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
