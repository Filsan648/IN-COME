import { image } from "framer-motion/client";
import { comment } from "postcss";
import prod from "../assets/Service/prod.mp4"
import PNUD from "../assets/partenaire/PNUD.png"
const commets1=[
   {
    
        image:PNUD,
        indistry:"Telcommunication",
        description:"societe de telecomminucation",
        video :prod,
        commente:"Wow, this site is an ABSOLUTE GOLDMINE for design engineers.It's a huge collection of micro-interactions / animations, all with their respective source code for you to copy and paste.Love to see such an amazing display of my favorite package, framer-motion"
        
    },
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

function Coments() {
  return (

<div className="min-h-screen w-full relative pt-24  p-10 rounded-b-3xl ">
  {/* Soft Pastel Dream Gradient */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: `linear-gradient(135deg, #F8BBD9 0%, #FDD5B4 25%, #FFF2CC 50%, #E1F5FE 75%, #BBDEFB 100%)`,
    }}
  />
 <div className="  " >
         {commets1.map((comment,index)=>{


           return(
              <div>


  </div>

           )


         }) }
   </div>
</div>











   
  );
}

export default Coments;
