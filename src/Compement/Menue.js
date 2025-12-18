import logos from "../assets/LOGOS.png"
import Button from "./asset/Button"
function Menu (){

return (
 <div className="flex flex-row justify-between pt-2 pl-2 pr-2   items-center"> 
<img src={logos} className=" w-16 " />
 <div className=" flex flex-row gap-12 ">
 <nav> Acceuil</nav>
 <nav>Univer </nav>
  <nav> Service</nav>
    <nav> Price</nav>
    </div>

  <Button  text="Contact" />
 </div>
)
}
export default Menu