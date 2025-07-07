import hero from"../assets/hero.png"
import soution from"../assets/soution.jpg"
import agriculture from"../assets/agriculture.jpg"
import eau from"../assets/eau.jpg"
import elevage from"../assets/elevage.jpg"
import pecche from"../assets/pecche.jpg"

function Hero(){

    return(<div className="w-full text-6xl h-screen mt-10 font-sans">
        <div className="flex flex-row justify-between">
   <div className="ml-24 flex flex-row">Mnistère  </div>
       <div> </div>
      <div className="text-right justify-end mr-9 flex flex-row ">  Eau <img src={soution} className="w-20 mt-10 rounded-xl shadow-2xl " /></div>

   </div>
   <div className="flex flex-row justify-center"><h1 className="text-center ">Agriculture </h1><img src={agriculture} className="w-20 shadow-2xl  mt-10 rounded-xl" /></div>
   <div className="ml-16 flex flex-row">Élevage<img src={elevage} className="w-20 shadow-2xl  mt-10 rounded-xl" /></div>
   <div className="text-right  justify-end flex flex-row"> Ressources halieutiques <img src={eau} className="w-20 shadow-2xl  mt-10 rounded-xl " /> </div>
   <div className="ml-16 text-center flex flex-row">  Pêche<img src={pecche} className="w-20 shadow-2xl  mt-10 rounded-xl" /></div>


</div>)

}
export default Hero