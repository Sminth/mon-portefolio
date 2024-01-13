import Img from "..//Image/Img";
export default function About() {
  return (
    <div
      className="w-full 2xl:px-96 xl:px-80 lg:px-64 md:px-28 px-12 
                    flex md:flex-row flex-col md:space-x-12 items-center space-y-4 pt-24 
                    opacity-70   hover:opacity-100 duration-500
                    
                     "
      // opacity-10   hover:opacity-100 duration-500
    >
      {/* <div className="flex-none  w-32 lg:w-44 flex justify-center items-center">
        <Img src="img/sminth.jpeg" alt="About picture" className="opacity-80" />
      </div> */}
      <div className="flex flex-col space-y-8  items-center">
      <span className="font-extrabold lg:text-5xl md:text-4xl text-2xl sm:text-3xl text-gray-300 text-center">
          A quoi sert ce projet ?
        </span>
        <span className="font-sans italic sm:text-base text-sm text-gray-400 text-center">
          La plupart des emplois n'exigent pas explicitement certaines vitesses de frappe, mais c'est parce que les compétences de base en frappe sont nécessaires.
          pris pour acquis. Ainsi, vous devriez{" "}
          <span className="font-bold text-gray-300">visez une vitesse de frappe d'au moins 40 WPM</span> pour maintenir un
          niveau standard d'efficacité au travail. Cependant, ce projet vise à vous aider à améliorer votre vitesse de frappe en
          suivre vos progrès à chaque tour et vous donner un score basé sur votre vitesse de frappe et votre précision.
        </span>
      </div>
    </div>
  );
}
