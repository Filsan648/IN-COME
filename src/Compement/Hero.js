import image1 from "../assets/Hero/image.png";
import image from "../assets/Hero/image1.png";
import fleche from "../assets/ICONE/fleche.png";
import video from "../assets/video/ssstik.io_@cabinet_incom_1764743664878.mp4"
import video1 from "../assets/video/ssstik.io_1764743470436.mp4"
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="relative flex items-center justify-between gap-12 p-10 m-2  mt-8 rounded-3xl ">

  <div className=" space-y-6 ">
<p className=" px-2 w-max bg-black/90 backdrop-blur rounded-3xl text-white text-sm tracking-widest  shadow-lg">
  360° Creative Powerhouse
</p>
    <h1 className="text-5xl lg:w-3/4 font-serif md:text-6xl font-extralight pb-12 leading-tight tracking-tight">
<span className="text-yellow-400">In </span>Spired Partenership  <span className="text-yellow-400">In </span>'Credible Result    </h1>
<div className="mt-6 flex items-center gap-6">
</div>
  <div className="flex justify-center items-center  mt-12">
    <div className=" hidden md:block   relative -rotate-6 w-[450px] h-[500px] object-cover rounded-[40px] shadow-xl bg-yellow-600 hover:rotate-0 duration-700 hover:w-[450px] hover:h-[470px]  " >
<h1 className=" p-2 absolute top-2 text-8xl font-medium" > 5+</h1>
<p className="absolute bottom-4 text-4xl p-4  after:content-[''] after:block after:w-full after:h-[3px]
     after:bg-black after:mt-2">Annee d'experience</p>
</div> 

    <video  autoPlay
      muted
      loop
      playsInline  className=" w-[300px] h-[350px]  -rotate-12 md:w-[450px] md:h-[500px] object-cover rounded-[40px] shadow-xl hover:rotate-0 duration-700 hover:w-[450px] hover:h-[470px]  ">
              <source src={video} type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>


<div className=" hidden md:block relative rotate-12 w-[450px] h-[500px] object-cover rounded-[40px] shadow-xl bg-slate-500 hover:rotate-0 duration-700 hover:w-[450px]  " >
<h1 className=" p-2 absolute top-2 text-8xl font-medium" > 20+</h1>
<p className="absolute bottom-4 text-4xl p-4  after:content-[''] after:block after:w-full after:h-[3px]
     after:bg-black after:mt-2">Client accompagnee</p>


</div>

 <video  autoPlay
      muted
      loop
      playsInline  className=" hidden md:block -rotate-12 w-[450px] h-[500px] object-cover rounded-[40px] shadow-xl hover:rotate-0 duration-700 hover:w-[450px] hover:h-[470px]  ">
              <source src={video1} type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>


        </div>
  </div>




</div>

  );
}

export default Hero;
