"use client";
import { title } from "@/components/primitives";

import { useContext } from "react";

import UserContext from "@/context/UserDetailsContext";

const imageHeight = 80;
const Skills = () => {
  const user: any = useContext(UserContext);
  return (
    <main className="flex flex-row items-center">
      <div className="w-full text-center">
        <h1 className={title({ class: "text-2xl" })}>{`Skills`}</h1>
        <div className="text-center w-full flex justify-center gap-4 mt-5 flex-wrap">
          {(user?.languages || []).map((skill: any, index: number) => (
            <div
              className="relative group bg-slate-100 p-1 rounded-xl"
              key={index}
            >
              <img
                src={skill.image}
                alt={skill.name}
                height={30}
                width={30}
                className="w-10 h-10 object-contain shadow-sm transition-transform transform"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Skills;
