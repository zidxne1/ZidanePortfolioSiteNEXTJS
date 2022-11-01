import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";
import { useMediaQuery } from "react-responsive";
type Props = { skills: SkillType[] };

export default function Skills({ skills }: Props) {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 480 });
  const isLandScape = useMediaQuery({ maxHeight: 914 });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 h-screen xl:space-y-0 mx-auto items-center justify-center "
    >
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl ml-6 lg:text-4xl">
        Skills
      </h3>

      <h3 className="absolute top-16 tracking-[3px] text-gray-500 text-sm lg:text-xl lg:top-64">
        Hover or tap on a skill for current proficiency.
      </h3>

      {!isTabletOrMobile && (
        <div className="grid grid-cols-6 gap-3 mt-12">
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}
          {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
        </div>
      )}

      {isTabletOrMobile && (
        <div className="grid grid-cols-3 gap-3 overflow-y-scroll ">
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}
          {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
        </div>
      )}

      {/* Lanscape Mode  */}
    </motion.div>
  );
}
