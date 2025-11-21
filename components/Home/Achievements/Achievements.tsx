import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function Achievements() {
    const hackathons = [
        {
            title: "Ivoire Tech Forum 2025",
            position: "Finaliste - 2ème place",
            date: "Juillet 2025",
            project: "Plateforme centralisant les opportunités pour la jeunesse ivoirienne",
            description: "Bourses, concours, financements, programmes, emplois",
            color: "text-yellow-400",
        },
        {
            title: "Concours MOOV Application",
            position: "Finaliste",
            date: "Novembre 2024",
            project: "Système IA de recommandation de forfaits mobiles",
            description: "Analyse des habitudes pour recommander le meilleur forfait",
            color: "text-blue-400",
        },
        {
            title: "Concours MOOV Application",
            position: "Finaliste",
            date: "Juillet 2022",
            project: "Mise en place d'une agence virtuelle",
            description: "Solution digitale pour services MOOV",
            color: "text-blue-400",
        },
        {
            title: "Hackathon Credit Access",
            position: "Finaliste",
            date: "Juin 2022",
            project: "Digitalisation du service de crédit de la microfinance",
            description: "Plateforme de gestion de crédit modernisée",
            color: "text-green-400",
        },
    ];

    return (
        <div
            id="AchievementsSection"
            data-aos="fade-up"
            className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary"
        >
            {/* Title */}
            <section className="flex flex-row items-center">
                <div className="flex flex-row items-center">
                    <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"} />
                    <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 04.</span>
                </div>
                <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
                    Réalisations & Hackathons
                </span>
                <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
            </section>

            {/* Content */}
            <section className="w-full 2xl:px-72 lg:px-24 md:px-16 sm:px-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {hackathons.map((hackathon, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="relative group"
                        >
                            <div className="bg-AAtertiary rounded-lg p-6 h-full border border-gray-700 hover:border-AAsecondary transition-all duration-300">
                                {/* Badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`${hackathon.color} font-mono text-xs font-semibold`}>
                                        {hackathon.position}
                                    </span>
                                    <span className="text-gray-500 font-mono text-xs">{hackathon.date}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-gray-200 font-bold text-lg mb-3">{hackathon.title}</h3>

                                {/* Project */}
                                <p className="text-AAsecondary text-sm font-semibold mb-2">{hackathon.project}</p>

                                {/* Description */}
                                <p className="text-gray-400 text-sm">{hackathon.description}</p>

                                {/* Decorative corner */}
                                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-AAsecondary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-tr-lg"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education Highlight */}
                <div
                    data-aos="fade-up"
                    className="mt-12 bg-AAtertiary rounded-lg p-6 border border-gray-700"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h3 className="text-gray-200 font-bold text-lg mb-2">Formation</h3>
                            <p className="text-AAsecondary font-semibold">
                                Master MIAGE - Ingénieur de conception en informatique
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                Université Felix Houphouët Boigny, Abidjan
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <span className="bg-AAsecondary bg-opacity-10 text-AAsecondary px-4 py-2 rounded font-mono text-sm">
                                Mention très bien
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
