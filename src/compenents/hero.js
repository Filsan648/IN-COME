import hero from"../assets/hero.png"
import soution from"../assets/soution.jpg"
import agriculture from"../assets/agriculture.jpg"
import eau from"../assets/eau.jpg"
import elevage from"../assets/elevage.jpg"
import pecche from"../assets/pecche.jpg"
import { gsap } from "gsap";
import{ ScrollTrigger} from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)
function Hero(){
const imagesRef = useRef([]);
useEffect(() => {
  const images = imagesRef.current;

  // Attendre que toutes les images soient chargées
  const onAllImagesLoaded = () => {
    const originalSizes = images.map((img) => ({
      width: img.offsetWidth,
      height: img.offsetHeight,
    }));

    images.forEach((img, index) => {
      img.addEventListener("mouseenter", () => {
        images.forEach((otherImg, i) => {
          if (i !== index) {
            gsap.to(otherImg, {
              filter: "blur(5px)",
             
              duration: 0.3,
            });
          } else {
            gsap.to(otherImg, {
              width: "300px",
              height: "400px",
              duration: 0.3,
            });
          }
        });
      });

      img.addEventListener("mouseleave", () => {
        images.forEach((otherImg, i) => {
          const original = originalSizes[i];
          if (original) {
            gsap.to(otherImg, {
              filter: "blur(0px)",
              width: `${original.width}px`,
              height: `${original.height}px`,
              duration: 0.3,
            });
          }
        });
      });
    });
  };

  // Vérifie que toutes les images sont chargées
  let loadedCount = 0;
  images.forEach((img) => {
    if (img.complete) {
      loadedCount++;
      if (loadedCount === images.length) onAllImagesLoaded();
    } else {
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) onAllImagesLoaded();
      };
    }
  });

 
}, []);


    return(<div className="w-full text-xl h-screen mt-32 font-abril">
        <div className="flex flex-row justify-between">
   <div className="ml-24 text-[200px] font-dancing  flex flex-row">Mnistère  </div>
       <div> </div>

   </div>
    <div className="flex  mt-10  text-black/60 flex-row justify-between">
   <div className=" flex flex-col mt-24"><img  ref={(el) => (imagesRef.current[0] = el)}
 src={agriculture} className=" w-44 shadow-2xl  mt-10 " /> Agriculture  </div>
       <div>  <div className=" mt-16 items-center flex flex-col"> <img src={pecche} className="w-20 h-28 shadow-2xl  mt-10 " ref={(el) => (imagesRef.current[4] = el)} /> Pêche</div> </div>
<div className=" flex flex-col"> <img  ref={(el) => (imagesRef.current[1] = el)}
 src={elevage} className=" w-52 h-64 shadow-2xl  mt-10 " />    Élevage</div>
      <div className=" mr-9 flex flex-col "> <img  ref={(el) => (imagesRef.current[2] = el)}
 src={soution} className=" w-60 mt-10 h-72 shadow-2xl " /> Ressources halieutiques </div>

   </div>
    <div className="  flex flex-col justify-center items-center"> <img  ref={(el) => (imagesRef.current[3] = el)}
 src={eau} className=" w-60 h-72 shadow-2xl   " />  Eau  </div>
 

</div>)

}
export default Hero