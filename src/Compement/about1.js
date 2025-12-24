import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import image from "../assets/image.png";
import video from "../assets/video/ssstik.io_@cabinet_incom_1764743216750.mp4";
import Button from "./asset/Button";
export default function About1() {
  return (
    <section className="mt-24 rounded-b-3xl rounded-t-3xl p-10 bg-white  flex flex-col md:flex-row items-center gap-16 overflow-hidden">
      {/* LEFT TEXT BLOCK */}
      <motion.div
        className="w-full md:w-1/2 space-y-8 "
        initial={{ x: -120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <p className="text-yellow-400">
        À propos</p>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extralight leading-tight tracking-tight">
          Un <span className="text-yellow-400">seul</span> partenaire pour toutes vos
          solutions en <span className="text-yellow-400">communication.</span>
        </h2>

        <p className="text-lg md:text-xl leading-relaxed">
          Avec in’COM, vous entrez dans un écosystème créatif intégré qui réunit
          design, impression, audiovisuel, digital, événementiel, influence et conseil
          stratégique.
          De l’idée à la réalisation, nous offrons des solutions <span className="text-yellow-400 font-bold">360°</span>, 100% in-house.
        </p>
        <Button text="Notre univers" />

      </motion.div>

      {/* RIGHT VIDEO BLOCK */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center perspective-[1200px]"
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <TiltVideo src={video} />
      </motion.div>
    </section>
  );
}

/* VIDEO WITH 3D TILT ON MOUSE */
function TiltVideo({ src }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
     
      style={{ rotateX, rotateY }}
      className="w-full h-[360px] md:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl"
    >
      <motion.video
        autoPlay
        muted
        controls
        loop
        playsInline
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <source src={src} type="video/mp4" />
      </motion.video>
    </motion.div>
  );
}
