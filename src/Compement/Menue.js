import logos from "../assets/LOGOS.png"
function Menu (){

return (
 <div className="flex flex-row justify-between"> 
<img src={logos} className=" w-16 " />
 <div className=" flex flex-row gap-12 ">
 <nav> Acceuil</nav>
 <nav>Univer </nav>
  <nav> Service</nav>
    <nav> Price</nav>
    </div>
 <div className=" border border-black/60 rounded-full hover:bg-[#FFC50F] transition-colors duration-700 flex justify-center items-center pl-3 pr-3 h-8 ">
    <button className="  text-xl text-center ">Contact</button>
  </div>

 </div>
)
}
export default Menu