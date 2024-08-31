"use client";
import React, { useState, useEffect } from "react";

import CircleWithCollar from "./dot";
import "@/assets/terminalStyles.css";

const typingSpeed = 50;
const content =
  "Hi! I am a passionate Full-Stack Developer and Technical Lead with a CS degree (RGUKT, 2017-2021), I leverage my expertise in Vue.js, Node.js, and MongoDB to build user-centric web applications that excel in both back-end architecture and intuitive interfaces. I consistently lead successful projects, fostering collaboration and exceeding expectations, as evidenced by my promotion to Technical Lead at Hallmark Global Technologies. Currently, I'm developing a cross-platform social media app (React Native) to showcase my skills in building scalable and secure backend APIs with real-time features.";

const Terminal = ({ newText }: { newText: string }) => {
  const [text, setText] = useState("");
  const [cursor, setCursor] = useState("_");
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    const typeWriter = setTimeout(() => {
      for (let i = 0; i < newText.length; i++) {
        setTimeout(() => {
          setText(newText.substring(0, i + 1));
          if (i + 1 == newText.length) {
            setTimeout(() => {
              setShowContent(true);
            }, 1000);
          }
        }, i * typingSpeed);
      }
      setCursor("");
    }, 1000);

    return () => clearTimeout(typeWriter);
  }, []);

  return (
    <div>
      <div className="terminalHeader text-left">
        <div className="flex">
          <CircleWithCollar color="#fe5f57" size={20} />
          <CircleWithCollar color="#febc2e" size={20} />
          <CircleWithCollar color="#28c840" size={20} />
        </div>
      </div>
      <div className="terminal">
        {showContent ? (
          <p className="text-left">{content}</p>
        ) : (
          <p className="text-left">
            umarsheik@Umars-Laptop ~ % {text}{" "}
            <span className="cursor">{cursor}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Terminal;
