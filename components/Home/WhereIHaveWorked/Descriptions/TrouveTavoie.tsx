import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrouveTavoie() {
  const tasks = [
    {
      text: "Participation à la mise en place d'une plateforme d'analyse et de visualisation des données pour l'association Africaine de l'eau et de l'Assainissement (AAEA) | Nuxt.Js, Vue.Js, Spring Boot, Docker Portainer, PostgreSql",
      keywords: ["Nuxt.Js", "Vue.js", "Spring Boot", "Docker Portainer"],
    },
    {
      text: "Analyse et mise en place d’un projet de Cartographie pour l’association AUCPN (Association Des Usiniers Producteurs De Caoutchouc), conçu avec Angular, Sping boot.",
      keywords: ["Angular", "Spring Boot"],
    },
    // {
    //   text: "En interface quotidienne avec les autres développeurs, apportant une expertise technologique.",
    //   keywords: [],
    // },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Développeur <span className="text-AAsecondary">@ VueJs</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Mars - August 2022</span>
          <span className="font-mono text-xs text-AAsecondary hover:cursor-pointer" style={{ fontSize: "0.6rem" }}
           // set on click to open the website
           onClick={() => window.open("#", "_blank")}
          >
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
