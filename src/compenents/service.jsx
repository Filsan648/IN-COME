import { useState } from "react"
import agriculture from "../assets/agri.jpg"
import eau from "../assets/ea.png"
import peche from "../assets/pec.png"
import elevage from "../assets/ea.png"
function Serice(){
 const services = [
    {
      title: "Agriculture",
      content: "Élaboration et exécution des politiques agricoles pour accroître la productivité. Promotion des technologies agricoles durables. Soutien aux agriculteurs (subventions, intrants, formation). Sécurité alimentaire et nutritionnelle.",
      icon: agriculture,
      color: "bg-green-600"
    },
    {
      title: "Ressources en eau",
      content: "Gestion intégrée des ressources en eau pour l'agriculture, la consommation et l'environnement. Développement de l'irrigation et des infrastructures hydrauliques. Protection des bassins versants et des zones humides.",
      icon: eau,
      color: "bg-blue-400"
    },
    {
      title: "Pêche et ressources halieutiques",
      content: "Aménagement des pêcheries continentales et maritimes. Promotion de la pêche artisanale et industrielle durable. Valorisation et transformation des produits halieutiques. Lutte contre la pêche illicite.",
      icon: peche,
      color: "bg-indigo-600"
    },
    {
      title: "Élevage",
      content: "Développement de l'élevage extensif et intensif. Lutte contre les maladies animales. Amélioration génétique et nutrition animale. Promotion des produits d'élevage (viande, lait, œufs).",
      icon: elevage,
      color: "bg-orange-600"
    }
  ];
    return(
        <div className="p-10 bg-blue-600  font-abril rounded-t-[150px] mt-24  ">
            <h1 className="text-5xl text-center  font-bold  pb-6 ml-4 mr-4 "> Service </h1>
        <div className="flex flex-row gap-11 m-4">
    
    {services.map((service)=>(
      <div className={`${service.color} rounded-3xl justify-center items-center  shadow-2xl border border-black flex flex-col gap-12`}>
 <div className="text-center p-4 text-2xl "> {service.title}</div>
 <img src={service.icon} className="  w-14   " />
 
 <div className=" p-1">   {service.content}  </div>

</div>
    ))}
        </div>
        </div>
    )
}
export default Serice