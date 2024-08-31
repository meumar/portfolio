"use client";

import { useState, useEffect, useContext } from "react";
import UserContext from "@/context/UserDetailsContext";
import { title } from "@/components/primitives";
import { FaGithub, FaEnvelope, FaLinkedinIn, FaDiscord } from "react-icons/fa";

const imageHeight = 80;
const imageStyles =
  "p-3 rounded-full bg-gray-900 hover:bg-gray-700 transition-colors duration-300";
const iconStyles = "text-2xl";
const Header = () => {
  const [name, setName] = useState("");
  const [cursor, setCursor] = useState("_");
  const [skills, setSkills] = useState("");

  const user: any = useContext(UserContext);
  useEffect(() => {
    const typingEffect = async () => {
      if (!skills) {
        let skill = "";
        setSkills("");
        for (let i: number = 0; i < user.skills.length; i++) {
          let str = i > 0 ? " | " : "";
          str += user.skills[i];
          skill += str;
        }
        setSkills(skill);
      }
      const nameToType: string = user.name;

      for (let i: number = 0; i < nameToType.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, imageHeight));
        setName(nameToType.slice(0, i + 1));
        setCursor(i !== nameToType.length - 1 ? "|" : "");
      }
    };
    if (user?.name) {
      typingEffect();
    }
  }, [user.name]);
  const redirectToURL = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <main className="flex flex-row items-center">
      <div className="w-full text-center p-0">
        <h1 className={title({ class: "text-3xl" })}>{`I'm`} &nbsp;</h1>
        <h1 className={title({ color: "violet", class: "text-3xl" })}>
          {name}
          {cursor}
        </h1>
        <br />
        <div className="flex items-center justify-center space-x-2 mt-1">
          <h3 className="text-md sm:text-xl">{user.role}</h3>
          <span className="">|</span>
          <button
            className="text-xl cursor-pointer hover:underline hover:text-blue-700"
            onClick={() => redirectToURL(user.links.resume)}
          >
            Resume
          </button>
        </div>

        {/* <h2 className="text-base sm:text-4">
                    {skills}
                </h2> */}
        <div className="text-center w-full flex justify-center space-x-4 mt-5">
          <button
            className={imageStyles}
            onClick={() => redirectToURL(user.links.github)}
          >
            <FaGithub className={iconStyles} />
          </button>
          <button
            className={imageStyles}
            onClick={() => redirectToURL(`mailto:${user.email}`)}
          >
            <FaEnvelope className={iconStyles} />
          </button>
          <button
            className={imageStyles}
            onClick={() => redirectToURL(user.links.linkedin)}
          >
            <FaLinkedinIn className={iconStyles} />
          </button>
          <button
            className={imageStyles}
            onClick={() => redirectToURL(user.links.discord)}
          >
            <FaDiscord className={iconStyles} />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Header;
