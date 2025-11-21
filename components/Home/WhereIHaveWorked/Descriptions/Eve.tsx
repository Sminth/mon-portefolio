import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Eve() {
  const tasks = [
    {
      text: "Participation à la mise en place du site web de la 4 ième édition du Republic Festival : https://republicfestival.com",
      keywords: [
        "NextJs",
        "https://republicfestival.com",
        "Shadcn",
        "Redux toolkit",
      ],
    },
    {
      text: "Participation à la mise en place d'une plateforme de gestion des transactions dans le cadre de l'interopérabilité pour la banque de mauritanie (BMCI) et la banque Nationale de Mauritanie (BNM)",
      keywords: ["NextJs", "TailwindCss", "Shadcn", "Redux toolkit"],
    },
    {
      text: "Participation à la mise en place d'une plateforme administrative de gestion des chèques impayés pour la CIE : Projet AIX , j'ai eu à travailler avec NextJs et TypeScript, TailwindCss, Shadcn UI, Axios et Redux toolkit",
      keywords: [
        "TypeScript",
        "NextJs",
        "TailwindCss",
        "Shadcn UI",
        "Redux toolkit",
        "axios",
      ],
    },

    {
      text: "Développement d&apos;un clone de l'application Djamo utilisant React Native et Metro",
      keywords: ["React Native", "Metro"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Frontend Developer <span className="text-AAsecondary">@ Modern JS Frameworks</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Septembre 2023 - Décembre 2024
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() =>
              window.open("https://www.everest-consulting.org/", "_blank")
            }
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
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
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
