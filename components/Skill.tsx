import React from "react";
import { motion } from "framer-motion";

type Props = { directionLeft?: boolean };

function Skill({ directionLeft }: Props) {
  return (
    <div className="relative flex cursor-pointer group">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src=""
        className="object-cover h-24 transition duration-300 ease-in-out border border-red-500 rounded-full w-28 md:h-28 xl:w-32 xl:h-32 group-hover:opacity-80 group-hover:bg-red-600 md:w-28 "
      />
      <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:w-20 md:h-20 xl:w-32 xl:h-32">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;