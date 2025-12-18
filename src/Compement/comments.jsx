import { image } from "framer-motion/client";
import { comment } from "postcss";
import prod from "../assets/Service/prod.mp4"
import PNUD from "../assets/partenaire/PNUD.png"
const commets1=[
    {
    
        image:PNUD,
        indistry:"Telcommunication",
        description:"societe de telecomminucation",
        description:"societe de telecomminucation",
        commente:"Wow, this site is an ABSOLUTE GOLDMINE for design engineers.It's a huge collection of micro-interactions / animations, all with their respective source code for you to copy and paste.Love to see such an amazing display of my favorite package, framer-motion"
        
    },
     {
    
        image:PNUD,
        indistry:"Telcommunication",
        description:"societe de telecomminucation",
        commente:"Wow, this site is an ABSOLUTE GOLDMINE for design engineers.It's a huge collection of micro-interactions / animations, all with their respective source code for you to copy and paste.Love to see such an amazing display of my favorite package, framer-motion"
        
    },
     {
    
        image:PNUD,
        indistry:"Telcommunication",
        description:"societe de telecomminucation",
        commente:"Wow, this site is an ABSOLUTE GOLDMINE for design engineers.It's a huge collection of micro-interactions / animations, all with their respective source code for you to copy and paste.Love to see such an amazing display of my favorite package, framer-motion"
        
    }
]
const commets2=[
    {
    
        image:PNUD,
        indistry:"Telcommunication",
        description:"societe de telecomminucation",
        commente:"Wow, this site is an ABSOLUTE GOLDMINE for design engineers.It's a huge collection of micro-interactions / animations, all with their respective source code for you to copy and paste.Love to see such an amazing display of my favorite package, framer-motion"
        
    },
     {
    
        image:PNUD,
        indistry:"Telcommunication",
        description:"societe de telecomminucation",
        commente:"Wow, this site is an ABSOLUTE GOLDMINE for design engineers.It's a huge collection of micro-interactions / animations, all with their respective source code for you to copy and paste.Love to see such an amazing display of my favorite package, framer-motion"
        
    },
     {
    
        image:PNUD,
        indistry:"Telcommunication",
        description:"societe de telecomminucation",
        commente:"Wow, this site is an ABSOLUTE GOLDMINE for design engineers.It's a huge collection of micro-interactions / animations, all with their respective source code for you to copy and paste.Love to see such an amazing display of my favorite package, framer-motion"
        
    }
]
function Coments() {
  return (
    <div className="pt-24  p-10 rounded-b-3xl   " >
            <h2 className="text-5xl   md:text-6xl lg:text-7xl font-serif font-extralight leading-tight tracking-tight">
          Un <span className="text-yellow-400">seul</span> partenaire pour toutes vos
          solutions en <span className="text-yellow-400">communication.</span>
        </h2>

    <div className=" mt-6 h-screen md:flex-row flex-col flex gap-8">
      {/* Colonne gauche */}
      <div className="flex-1 flex flex-col gap-8 p-4 ">
        {commets1.map((comment, index) => (
          <div key={index} className="bg-white p-4 rounded-3xl shadow-white/20 shadow-xl">
            <div className="flex items-center gap-4">
              <img
                src={comment.image}
                alt="Partenaire"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">{comment.indistry}</h3>
                <p className="text-sm text-black/80">{comment.description}</p>
              </div>
            </div>
            <p className="text-sm pt-3">{comment.commente}</p>
          </div>
        ))}
      </div>

      {/* Colonne vidéo */}
      <div className="flex-1 rounded-3xl ">
        <video
          className="w-full h-full object-cover rounded-3xl"
          autoPlay
          muted
          controls
          loop
          playsInline
        >
          <source src={prod} type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      </div>

      {/* Colonne droite */}
      <div className="flex-1 flex flex-col gap-8 p-4 ">
        {commets2.map((comment, index) => (
          <div key={index} className="bg-white p-4 rounded-3xl shadow-lg">
            <div className="flex items-center gap-4">
              <img
                src={comment.image}
                alt="Partenaire"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">{comment.indistry}</h3>
                <p className="text-sm text-black/80">{comment.description}</p>
              </div>
            </div>
            <p className="text-sm pt-3">{comment.commente}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Coments;
