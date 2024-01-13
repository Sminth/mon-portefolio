import React from 'react'
import Img from "../../smallComp/image/Img";
export default function About() {
  return (
    <div className="w-full h-full py-8 md:px-8 flex md:flex-row flex-col md:space-x-12 items-center space-y-4">
          {/* <div className="flex-none  w-32 lg:w-44 flex justify-center items-center">
            <Img
              src="gdscCercle.png"
              alt="About picture"
              className="opacity-80"
            />
          </div> */}
          <div className="flex flex-col space-y-8  items-center">
          <span className="font-extrabold lg:text-5xl md:text-4xl text-2xl sm:text-3xl text-gray-300">
              A quoi sert ce projet ?
            </span>
            <span className="font-sans italic sm:text-base text-sm text-gray-400 text-center">
              Ce n'est un secret pour personne : les sites veulent en savoir le plus possible
              sur leurs visiteurs, que ce soit pour leur montrer des publicités ciblées
              ou améliorer leur expérience utilisateur. Le but de ce projet est de
              vous donner une idée des types d'informations que les sites Web peuvent
              collecter et accéder à vous. Quels que soient les paramètres de confidentialité
              de votre navigateur, certaines informations vous concernant sont inévitablement
              révélé aux sites que vous visitez. Par exemple, vous commencez à partager
              votre adresse IP dès que vous vous connectez, qui peut être utilisée pour
              localiser votre emplacement approximatif.
            </span>
          </div>
        </div>
  )
}
