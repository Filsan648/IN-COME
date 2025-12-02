import image1 from "../assets/php.jpg";
import image2 from "../assets/1734513502507.jpg";
import fleche from "../assets/ICONE/fleche.png";
import image3 from "../assets/Capture d’écran 2025-11-30 121140.png";

function Hero() {
  return (
    <div className="relative flex gap-12  mt-14 px-20">

      
      <div className="absolute left-0 top-20 w-[420px] h-[420px] bg-yellow-300/20 blur-3xl rounded-full -z-10"></div>

      <div className="w-2/4 flex flex-col pt-4">

     
        <div className="px-4 py-1 mb-4 rounded-full bg-black text-white text-sm tracking-wide w-fit shadow-md">
          Agence créative 360°
        </div>

     
        <h1 className="text-6xl font-bold leading-tight text-black">
          Un seul partenaire pour toutes vos solutions en communication.
        </h1>


        <p className="text-black/60 mt-6 text-lg leading-relaxed">
          Avec in’COM, vous entrez dans un écosystème créatif intégré qui réunit
          design, impression, audiovisuel, digital, événementiel, influence et
          conseil stratégique. De l’idée à la réalisation, nous offrons des solutions
          360°, 100% in-house.
        </p>


        <div className="mt-6">
          <div className="flex items-center justify-between w-44 h-11 px-5 rounded-full bg-black text-white transition-all duration-500 hover:bg-neutral-900 hover:px-6 cursor-pointer group shadow-lg">
            <span className="text-lg font-medium tracking-wide">Get in touch</span>
            <img
              src={fleche}
              className="w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:scale-110 filter brightness-0 invert"
            />
          </div>
        </div>

  
        <div className="mt-10 space-y-6">

          <div className="flex items-center gap-4">
            <button className="service-btn">Design</button>
            <div className="plus-circle">+</div>
            <button className="service-btn">Event</button>
            <div className="plus-circle">+</div>
            <button className="service-btn">Print</button>
          </div>

          <div className="flex items-center gap-4">
            <div className="plus-circle">+</div>
            <button className="service-btn">Connect</button>
            <div className="plus-circle">+</div>
            <button className="service-btn">Podcast</button>
          </div>

        </div>

    
        <div className="flex gap-12 mt-12">
          <div>
            <p className="text-4xl font-bold">12+</p>
            <p className="text-black/50 text-sm">Années d'expérience</p>
          </div>
          <div>
            <p className="text-4xl font-bold">300+</p>
            <p className="text-black/50 text-sm">Clients accompagnés</p>
          </div>
          <div>
            <p className="text-4xl font-bold">600+</p>
            <p className="text-black/50 text-sm">Projets réalisés</p>
          </div>
        </div>

      

      </div>


      <div className="w-1/4 pt-11">
        <img
          src={image1}
          className="h-full w-full object-cover rounded-xl shadow-xl transition-transform duration-500 "
        />
      </div>

      <div className="flex flex-col gap-10 w-1/4">
        <img
          src={image2}
          className="w-full h-48 rounded-xl object-cover shadow-xl transition-transform duration-500 "
        />
        <img
          src={image3}
          className="w-full h-64 rounded-xl object-cover shadow-lg transition-transform duration-500 "
        />
      </div>

    </div>
  );
}

export default Hero;
