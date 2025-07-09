"use client";
import { useContext } from "react";
import Image from "next/image";

import { title } from "@/components/primitives";
import UserContext from "@/context/UserDetailsContext";

const Skills = () => {
  const user: any = useContext(UserContext);

  return (
    <main className="flex flex-row items-center">
      <div className="w-full text-center">
        <h1 className={title({ class: "text-2xl" })}>{`Skills`}</h1>
        <div className="text-center w-full flex justify-center gap-4 mt-5 flex-wrap">
          {(user?.languages || []).map((skill: any, index: number) => (
            <div
              key={index}
              className="relative group bg-slate-100 p-1 rounded-xl"
            >
              <Image
                alt={skill.name}
                className="w-10 h-10 object-contain shadow-sm transition-transform transform"
                height={30}
                src={skill.image}
                width={30}
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
