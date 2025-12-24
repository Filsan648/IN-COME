import design from "../assets/Service/design.png"
import connect from "../assets/Service/connect.mp4"
import podcast from "../assets/Service/podcast.png"  
import event from "../assets/Service/event.mp4"
import prod from "../assets/Service/prod.mp4"
import pr from "../assets/Service/PR.png"
import { useState } from "react"
import Button from "./asset/Button"
import Cursor from "./asset/cursor_global"
function Service(){
const [hover, sethover] = useState(false)
const [text, settext] = useState("")
const [description, setdescription] = useState("")

   const [active, setActive] = useState(null)
   const itemClass = (id) =>
  `transition-all duration-500 ease-out rounded-3xl
   ${active && active !== id ? "blur-sm scale-[0.98]" : ""}
   ${active === id ? "scale-105 z-10" : ""}`

return (
<div className="min-h-screen w-full relative">
  {/* Aurora Dream Soft Harmony */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: `
       radial-gradient(ellipse 80% 60% at 60% 20%, rgba(175, 109, 255, 0.50), transparent 65%),
        radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.45), transparent 65%),
        radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.43), transparent 62%),
        radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.48), transparent 68%),
        linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
      `,
    }}
  />
  <div className=" relative z-50 p-10   ">
    <h1 className="text-5xl w-full md:w-3/4 font-serif md:text-6xl font-extralight pb-12 leading-tight tracking-tight">
Des solutions  
<span className="text-yellow-400"> créatives </span> pour faire grandir votre  <span className="text-yellow-400">marque </span> </h1>
 <Button text="En savoir plus" />

<div className="md:flex-row flex flex-col gap-5 pt-12" >

<div className=" md:w-1/2 flex flex-col gap-4"  >


<div onMouseEnter={() => setActive("design")}
  onMouseLeave={() => setActive(null)} className="h-[800px] w-full   ">
  <img onMouseEnter={() => {sethover(true) ; settext("logos, chartes graphiques et univers créatifs qui posent les bases.");setdescription("Identité visuelle sur mesure : ")}}
  onMouseLeave={() => {sethover(false);settext("");setdescription("")}} src={design }     className={`object-cover h-[750px] w-full  ${itemClass("design")}`}       />
  <p      className="text-3xl p-3 font-medium   " > <span className="text-yellow-400 text-4xl " >In</span> design  </p>       

</div>

<div className="h-[ 450px]  w-full "  onMouseEnter={() => setActive("prod")}
  onMouseLeave={() => setActive(null)}>
<img src={pr }  onMouseEnter={() => {sethover(true) ; settext(" films, publicités, aftermovies, contenus digitaux et captations multicam.");setdescription("Audiovisuel complet :")}}
  onMouseLeave={() => {sethover(false);settext("");setdescription("")}}  className={`object-cover h-[400px] w-full  ${itemClass("prod")}`}   />




<p className="text-3xl p-3 font-medium" > <span className="text-yellow-400 text-4xl " >In</span> prod  </p>       

</div>


<div className="aspect-video  w-full  "  onMouseEnter={() => setActive("print")}
  onMouseLeave={() => setActive(null)}>
 <video onMouseEnter={() => {sethover(true) ; settext(" bâches, adhésifs, panneaux, objets personnalisés, tout en in-house.");setdescription("Impression & signalétique :")}}
  onMouseLeave={() => {sethover(false);settext("");setdescription("")}}  autoPlay
      muted
      
      loop
      playsInline   className={`object-cover h-[700px] w-full  ${itemClass("print")}`}   >
              <source src={prod} type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
                 <p className="text-3xl p-3 font-medium" > <span className="text-yellow-400 text-4xl " >In</span> print  </p>       

</div>

  

</div>







<div className=" md:w-1/2 flex flex-col gap-4"  >


<div className="h-[350px]   w-full aspect-video "   onMouseEnter={() => setActive("event")}
  onMouseLeave={() => setActive(null)} >
<video  autoPlay
      muted
      loop
      playsInline 
       onMouseEnter={() => {sethover(true) ; settext(" conception, régie, scène mobile, écrans LED et activation terrain et logistique opérationnelle ");setdescription("Événementiel clé en main :")}}
  onMouseLeave={() => {sethover(false);settext("");setdescription("")}}
   className={`object-cover h-[300px] w-full  ${itemClass("event")}`} 
      >
              <source src={event} type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
     <p className="text-3xl p-3 font-medium" > <span className="text-yellow-400 text-4xl " >In</span> event  </p>       
</div>

<div className="h-[650px]  w-full    " onMouseEnter={() => setActive("voice")}
  onMouseLeave={() => setActive(null)}>
<img onMouseEnter={() => {sethover(true) ; settext("talk-shows, interviews, podcasts et contenus médias portés par des voix locales.");setdescription("Formats incarnés : ")}}
  onMouseLeave={() => {sethover(false);settext("");setdescription("")}} src={podcast }   className={`object-cover h-[600px] w-full  ${itemClass("voice")}`} />
<p className="text-3xl p-3 font-medium" > <span className="text-yellow-400 text-4xl " >In</span> voice  </p>       

</div>


<div className="aspect-video  w-full  " onMouseEnter={() => setActive("connect")}
  onMouseLeave={() => setActive(null)}>
 <video  autoPlay
      muted
      onMouseEnter={() => {sethover(true) ; settext("stratégie réseaux sociaux, contenu créatif, calendrier éditorial et Community management.");setdescription("Communication digitale : ")}}
  onMouseLeave={() => {sethover(false);settext("");setdescription("")}}
      loop
      playsInline    className={`object-cover h-[700px] w-full  ${itemClass("connect")}`} >
              <source src={connect} type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
                 <p className="text-3xl p-3 font-medium" > <span className="text-yellow-400 text-4xl " >In</span> connect  </p>       

</div>



</div>


</div>

<Cursor isHovering={hover} text={text} title={description} />


</div>
</div>

)
}
export default Service