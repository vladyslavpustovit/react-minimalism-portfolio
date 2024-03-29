import { motion } from "framer-motion";

export const ScrollTopButton = ({ fullpageApiRef }) => {
  return (
    <motion.div
      onClick={() => {
        fullpageApiRef.current.moveTo("about");
      }}
      className="cursor-pointer absolute bottom-4 right-4 md:right-8 pointer-events-auto"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.3,
        },
      }}
    >
      <img className="w-14 focus-shadow" src="/assets/up-arrow.svg" alt='up-arrow' />
    </motion.div>
  );
};
