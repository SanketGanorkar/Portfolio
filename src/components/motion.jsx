import { motion } from "framer-motion";
const khelo = () => {
  return (
    <div>
      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "180deg" }}
        exit={{
          rotate: "0deg",
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
        className="bg-black h-12 w-12 m-2"
      ></motion.div>
      <button className="bg-blue-400 font-semibold p-2 m-2 ">Play with me</button>
    </div>
  );
};

export default khelo;
