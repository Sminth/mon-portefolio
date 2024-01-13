import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function Orange() {
  const tasks = [
    {
      text: "Jury Pro : Application de Gestion d'événements permettant aux jurys de noter des candidats à différents évènements avec Flutter pour l'application mobile et Spring boot pour l'api",
      keywords: ["Flutter", "Spring boot"],
    },
    {
      text: "Contribution à la création d'un robot assistant et guide à l'Orange Digital Center, incluant la modélisation et l'impression 3D du corps, l'intégration de la reconnaissance vocale, du chatbot RASA, de la reconnaissance faciale, le développement du déplacement avec détection d'obstacles et le développement de l'application pour l interraction via une tablette avec le robot fait en flutter.",
      keywords: ["robot","impression 3D","chatbot RASA"],
    },
  
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Stage Dev <span className="text-AAsecondary">@ Fullsatck</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Décembre 2020 - Juillet 2021</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https:///www.fevertokens.io", "_blank")}
          >
            Orange Digital Academy
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
