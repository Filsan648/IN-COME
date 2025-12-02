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
    { Name:"" , fonction: "", image: ""  },
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
    <div className="relative w-full mx-auto mt-28">

<div className="inline-flex items-center gap-2  ">
  <div className="w-3 h-3 bg-yellow-400 rounded-full "></div>
  <h2 className="text-5xl font-bold tracking-tight">
    <span className="text-black ">In’</span>
    <span className="text-yellow-500 ">Team</span>
  </h2>
</div>
  <p className="text-black/60 pt-3 " >
  Une équipe, un seul brief, une exigence continue.  </p>

      {/* Slider Container */}
      <div className=" mt-20 overflow-hidden ">
        <div
          className="flex gap-10 transition-transform duration-700"
          style={{ transform: `translateX(-${index * 350}px)` }} // largeur d’une carte
        >
          {Team_tab.map((team, i) => {
             const isCenter =i === index+1 ; 

          return(<div key={i} className="w-[330px] shrink-0">
              <img
                src={team.image}
                className= {` w-[330px] h-[420px]  transition duration-700 rounded-[50px] object-cover shadow-lg  ${isCenter ? "scale-100 opacity-100 grayscale-0 " : "scale-75 opacity-50 grayscale  "} `}
              />

              <h3 className="text-xl font-bold mt-4 text-center">{team.Name}</h3>
              <p className="text-sm text-gray-500 text-center">{team.fonction}</p>
            </div>)
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
