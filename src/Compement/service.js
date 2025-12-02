import image from "../assets/image.png"
import fleche from "../assets/ICONE/fleche.png";
import design from "../assets/ICONE/designe.png";
import Print from "../assets/ICONE/print.png";
import prod from "../assets/ICONE/movie.png";
import Connect from "../assets/ICONE/connect.png";
import event from "../assets/ICONE/event.png";
import voice from "../assets/ICONE/voice.png";
const service_content=[
{
    Title : "Design",
    Content:"Identité visuelle sur mesure : logos, chartes graphiques et univers créatifs qui posent les bases.",
    icone: design
},
{
    Title : "Print",
    Content:"Impression & signalétique : bâches, adhésifs, panneaux, objets personnalisés, tout en in-house.",
    icone: Print
},
{
    Title : "PROD",
    Content:"Audiovisuel complet : films, publicités, aftermovies, contenus digitaux et captations multicam..",
    icone: prod
},
{
    Title : "CONNECT",
    Content:"Communication digitale : stratégie réseaux sociaux, contenu créatif, calendrier éditorial et Community management.",
    icone: Connect
},
{
    Title : "EVENT",
    Content:"Événementiel clé en main : conception, régie, scène mobile, écrans LED et activation terrain et logistique opérationnelle ",
    icone: event
},
{
    Title : "VOICE",
    Content:"Formats incarnés : talk-shows, interviews, podcasts et contenus médias portés par des voix locales.",
    icone: voice
},
]
  





function Service(){
return (

<div className=" rounded-2xl  pl-16 pr-16 mt-20"> 

<div className="inline-flex items-center gap-2  ">
  <div className="w-3 h-3 bg-yellow-400 rounded-full "></div>
  <h2 className="text-5xl font-bold tracking-tight">
    <span className="text-black ">In’</span>
    <span className="text-yellow-500 ">service</span>
  </h2>
</div>

<div className="flex justify-between pt-3 pb-14">
<div className="w-3/3 text-black/60  text-lg leading-relaxed" >
Nous accompagnons vos projets avec créativité : design, impression, audiovisuel, communication digitale, événementiel et formats médias.</div>

<div className="w-2/3"></div>

   <div className="w-3/3 ">
          <button className="flex  justify-center items-center w-44 h-11 px-5 rounded-full bg-yellow-600 text-white cursor-pointer  ">
            <span className="text-lg font-medium tracking-wide">Get in touch</span>
           
          </button>
        </div>
</div>



<div className="grid grid-cols-3 gap-11 ">

  {service_content.map((service, index) => (<div className="w-[400px] shadow-xl  hover:text-white bg-slate-50 rounded-2xl p-8 hover:bg-black  hover:transform  hover:-rotate-6 hover:duration-700 transition-colors duration-700 group">
 
  <div> <img src={service.icone} className=" w-14 transition duration-500 group-hover:brightness-0 group-hover:invert "/> </div>
  <div className=" font-medium text-2xl pt-3 pb-3 ">{service.Title} </div> 
  <div className="   text-black/60 group-hover:text-white">{service.Content} </div>
  <button className=" pt-6 flex flex-row  gap-2 group-hover:gap-6 duration-150 ">Learn more  <img
      src={fleche}
      className="w-7 transition duration-500 group-hover:brightness-0 group-hover:invert"
    /> </button>

        </div>
      ))}


</div>









</div>

)
}
export default Service