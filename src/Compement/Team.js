import { useState } from "react";
import abdallah from "../assets/Team/abdallah.png";
import Amina from "../assets/Team/amina.png";
import Farhan from "../assets/Team/Abdisamad.png";
import Abdisamad from "../assets/Team/Abdisamad.png";
import Mohamed from "../assets/Team/mohamed.png";
import said from "../assets/Team/said.png";
import yasmin from "../assets/Team/yasmin.png";
import fleche from "../assets/ICONE/fleche.png";

const Team_tab = [
   
    { Name: "Amina Houmed", fonction: "Cofondatrice & CEO", image: Amina },
    { Name: "Mohamed Gohar", fonction: "Cofondateur & COO", image: Mohamed },
    { Name: "Yasmine Said Bachir", fonction: "Chief Marketing Manager", image: yasmin },
    { Name: "Abdallah Adou", fonction: "Ingénieur Audiovisuel & Technique", image: abdallah },
    { Name: "Abdisamad Jama", fonction: "Creative Graphic Designer", image: Abdisamad },
    { Name: "Mohamed Badri", fonction: "Videographer & Motion Creator", image: Abdisamad },
    { Name: "Said Mohamud Ali", fonction: "Videographer & Storytelling Artist", image: said },
    { Name: "Farhan Mohamed", fonction: "Creative Photographer", image: Farhan },
];

function Team() {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < Team_tab.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="relative w-full mx-auto ">
 <h2 className="p-10 text-5xl md:text-6xl lg:text-7xl font-serif font-extralight leading-tight tracking-tight w-2/3">
          Un <span className="text-yellow-400">équipe</span>  un seul
          <span className="text-yellow-400">  brief</span>, une exigence continue
        </h2>

   

    
      <div className="  overflow-hidden ">
        <div
          className="flex gap-10 transition-transform duration-700 "
          style={{ transform: `translateX(-${index * 400}px)` }} // largeur d’une carte
        >
          {Team_tab.map((team, i) => {
             const isCenter =i === index+1 ; 

          return(<div key={i} className="w-[500px] h-screen relative group shrink-0 overflow-hidden rounded-[50px] shadow-lg">
  <img
    src={team.image}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    alt={team.Name}
  />

  <div className="
    absolute inset-0
    bg-black/40
    flex flex-col justify-center items-center
    text-white
    text-center
    px-6 py-4
    opacity-0
    transition-opacity duration-500
    group-hover:opacity-100
  ">
    <h3 className="text-2xl font-bold mb-2">{team.Name}</h3>
    <p className="text-sm">{team.fonction}</p>
  </div>
</div>
)
          }
            
        )}
        </div>
      </div>

      {/* Previous button */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full hover:bg-black transition"
      >
        <img src={fleche} className="w-6 rotate-180 invert" />
      </button>

      {/* Next button */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full hover:bg-black transition"
      >
        <img src={fleche} className="w-6 invert" />
      </button>
    </div>
  );
}

export default Team;
