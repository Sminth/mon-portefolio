import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-AAsecondary font-mono"
      >
        Salut, je m&apos;appelle
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Emmanuel Malan.
      </motion.h1>
      
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Je donne vie a vos idées.
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        {/* Je suis un <span className="text-AAsecondary">ingénieur logiciel</span>, doté de solides compétences en résolution de problèmes et spécialisé dans la création d&apos;expériences numériques exceptionnelles. Mon domaine d&apos;activité actuel est le <span className="text-AAsecondary">domaine web3</span>, où je participe activement au développement et à la conception d&apos;<span className="text-AAsecondary">applications web3 immersives</span>. Cela implique de travailler avec des <span className="text-AAsecondary">Smart Contracts</span> sur la <span className="text-AAsecondary">Blockchain</span>. */}
        En tant qu&apos; <span className="text-AAsecondary">ingénieur logiciel passionné</span>, mon expertise se concentre sur la création d&apos;applications web et mobiles innovantes, en tirant parti des <span className="text-AAsecondary">dernières technologies</span>. Mon objectif est de donner vie à des expériences numériques captivantes, transformant ainsi la manière dont les utilisateurs interagissent avec la technologie.

      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="mt-12"
      >
        <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
            Consultez mon CV !
          </button>
        </a>
      </motion.div>
      <motion.div
  initial={{ y: 10, opacity: 0 }}
  animate={{ y: [0, 10, 0], opacity: [1, 0.8, 1] }}
  transition={{
    opacity: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
    y: { delay: 10.8, duration: 0.8, yoyo: Infinity },
  }}
  className=" mt-12 text-center"
>
  <a href="#sectionAPropos" style={{ border: "1px solid rgb(100 255 218)", width: "50px", borderRadius: "50%" }} className="px-3 py-2  justify-center items-center  text-AAsecondary  text-center bg-ble-300">
    &#8595;
  </a>
</motion.div>

    </div>
  );
}
