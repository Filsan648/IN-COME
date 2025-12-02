import Hero from "../Compement/Hero";
import Menu from "../Compement/Menue";
import Service from "../Compement/service";
import Team from "../Compement/Team";
function Home(){
    return(
<div className="flex flex-col"> <Menu /> <Hero />    <Service /> <Team /> 



 </div>
    )
}
export default Home;