import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Mathetes() {
  const tasks = [
    {
      text: "Contribution à la création d'une plate-forme de conformité des données personnelles pour DPSE COMPLIANCE, impliquant l'analyse des besoins, la conception des écrans utilisateur, le développement d'API, la création et la configuration des groupes utilisateurs, ainsi que les tests et la validation. Développer en Laravel et VueJs",
      keywords: ["DPSE COMPLIANCE","Laravel", "VueJs"],
    },

  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            FullSatck Developer <span className="text-AAsecondary">@ Web App</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Octobre - Décembre 2020</span>
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
