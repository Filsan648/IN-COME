import Hero from "../Compement/Hero";
import Menu from "../Compement/Menue";
import Service from "../Compement/service";
import Team from "../Compement/Team";
import About from "../Compement/about";
import About1 from "../Compement/about1";
import Coments from "../Compement/comments";
function Home(){
    return(
        
<div className="flex flex-col "> <Menu />
 <Hero /> <About1 />   <Service />  <Team /> <Coments />   
 </div>
    )
}
export default Home;