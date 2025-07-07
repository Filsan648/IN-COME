import { useState } from "react"
function Serice(){

    return(
        <div className="mt-10">
            <h1 className="text-4xl font-bold text-amber-600 pb-6 ml-4 mr-4 "> Service </h1>
        <div className="flex flex-row gap-11 m-4">
            
  <div className="shadow-amber-600 shadow rounded-md text-black/60 ">  <h1 className=" text-black pt-3 text-center text-xl font-bold pb-6"> Agriculture</h1> <div className="p-4">  Élaboration et exécution des politiques agricoles pour accroître la productivité.
 Promotion des technologies agricoles durables.
 Soutien aux agriculteurs (subventions, intrants, formation).
 Sécurité alimentaire et nutritionnelle 
 </div>
  </div>

 <div className="shadow-amber-600 shadow rounded-md text-black/60 "> <h1 className=" text-black pt-3 text-center text-xl font-bold pb-6"> Ressources en eau</h1> <div className="p-4">
 Gestion intégrée des ressources en eau pour l’agriculture, la consommation et
 l’environnement.
 Développement de l’irrigation et des infrastructures hydrauliques.
 Protection des bassins versants et des zones humides</div>
  </div>

   <div className="shadow-amber-600 shadow rounded-md text-black/60 ">  <h1 className=" text-black pt-3 text-center text-xl font-bold pb-6"> Pêche et ressources halieutiques</h1> <div className="p-4"> 
 ressources halieutiques
 Aménagement des pêcheries continentales et maritimes.
 Promotion de la pêche artisanale et industrielle durable.
 Valorisation et transformation des produits halieutiques.
 Lutte contre la pêche illicite
 
 
  </div>
        </div>

         <div className="shadow-amber-600 shadow rounded-md text-black/60 ">  <h1 className=" text-black pt-3 text-center text-xl font-bold pb-6"> Élevage</h1> <div className="p-4"> 
 Développement de l’élevage extensif et intensif.
 Lutte contre les maladies animales.
Amélioration génétique et nutrition animale.
 Promotion des produits d’élevage (viande, lait, œufs).
 
 
  </div>
        </div>
        </div>
        </div>
    )
}
export default Serice