import { motion, useViewportScroll, useTransform } from "framer-motion";
import video1 from "../assets/video/ssstik.io_@cabinet_incom_1764743216750.mp4";

export default function HeroVideo() {
  const { scrollYProgress } = useViewportScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section className="relative w-full h-screen overflow-hidden   ">
      

      <motion.video
        autoPlay
        loop
        playsInline
        controls
        className="absolute inset-0 h-full w-full object-cover rounded-3xl "
initial={{ width: "10%" ,radius: "full" }}
        whileInView={{ width: "100%" }}
        transition={{
          duration: 4.3,
          ease: "easeInOut"
        }}
        viewport={{ once: false, amount: 0.6 }}
      >
        <source src={video1} type="video/mp4" />
      </motion.video>

     

    </section>
  );
}
