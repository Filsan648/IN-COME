import { motion } from "framer-motion";
import image from "../assets/image.png";
import video from "../assets/video/ssstik.io_@cabinet_incom_1764743216750.mp4";

function About1() {
  return (
    <section className="mt-24 rounded-t-3xl p-10 bg-white flex flex-col md:flex-row items-center gap-16   ">
      
      {/* LEFT TEXT BLOCK */}
      <motion.div
        className="w-full md:w-1/2 space-y-8"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extralight leading-tight tracking-tight">
          Un <span className="text-yellow-400">seul</span> partenaire pour toutes vos
          solutions en <span className="text-yellow-400">communication.</span>
        </h2>

        <p className="text-lg md:text-xl leading-relaxed">
          Avec in’COM, vous entrez dans un écosystème créatif intégré qui réunit
          design, impression, audiovisuel, digital, événementiel, influence et conseil
          stratégique.  
          De l’idée à la réalisation, nous offrons des solutions <span className="text-yellow-400 font-bold  ">360°</span>, 100% in-house.
        </p>
      </motion.div>


      <motion.div
        className="w-full md:w-1/2 flex justify-center  "
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >


            <video     autoPlay
      muted
      loop
      playsInline controls>
               <source src={video} type="video/mp4"  />

        </video>
      </motion.div>

    </section>
  );
}

export default About1;
