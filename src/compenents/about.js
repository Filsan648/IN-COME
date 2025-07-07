import hero from"../assets/hero.png"
import image from "../assets/IMA.png"
function About(){
const handle= ((e)=>{console.log(e)})
    return(
         <div className="mt-40 ml-4 font-serif mr-4">
             <h1 onClick={handle} className="text-4xl font-bold text-amber-600 pb-20 font-serif ">
                About Us
              </h1>
        <div className="flex flex-row gap-14 ">
            <div className="w-1/2">
            <p>
           Le ministère de l'Agriculture, de l'Eau, de la Pêche, de l'Élevage et des Ressources
 halieutiques est une institution gouvernementale chargée de la formulation, de la mise en
 œuvre et du suivi des politiques publiques liées à la gestion durable des ressources
 naturelles et alimentaires du pays.<br/> 
            </p>
            </div>
            <div  className="p-6 ">
             <img src={image} className="w-[500px] " />
             </div>
        </div>
         </div>
        )
    
}
export default About;
