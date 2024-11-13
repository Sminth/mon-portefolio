import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Toubabi() {
  const tasks = [
    {
      text: "En tant que lead, j'ai dirigé le développement de Toubabi.com, un site web immobilier novateur. Mon rôle clé englobait la conception et l'implémentation d'une interface utilisateur interactive, améliorant l'expérience des utilisateurs dans leur recherche de biens immobiliers. J'ai également supervisé l'intégration d'outils de simulation de projet et de cartographie des prix, permettant la visualisation des prix de vente et de location de divers types de biens dans différents quartiers, ainsi que les indices DGI. Développer principalement en Laravel",
      keywords: ["Toubabi.com", "cartographie des prix", "indices DGI","Laravel"],
    }
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          FullSatck Developer <span className="text-AAsecondary">@Web App</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Aout 2022 - Janvier 2023</span>
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
