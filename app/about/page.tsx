import React from "react";

import CircleWithCollar from "@/components/dot";
import "@/assets/terminalStyles.css";
import Terminal from "@/components/terminal";
import { experienceData } from "@/config/site";
export default function ExperiencePage() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8 md:px-8 flex flex-row justify-between gap-5">
        <div className="w-full">
          <Terminal newText="who am i" />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 md:px-8">
        <h1 className="text-3xl mb-8 font-thin">Work Experience</h1>
        <ul className="timeline flex flex-col gap-4 sm:flex-row md:flex-row lg:flex-row">
          {experienceData.map((item) => (
            <li key={item.year} className="sm:w-full md:w-full">
              <div className="terminalHeader grid grid-flow-col justify-stretch">
                <div className="flex">
                  <CircleWithCollar color="#fe5f57" size={20} />
                  <CircleWithCollar color="#febc2e" size={20} />
                  <CircleWithCollar color="#28c840" size={20} />
                </div>
                <div>
                  <p className="text-left text-sm">{item.year}</p>
                </div>
                <div>{``}</div>
              </div>
              <div className={"timeline-item card terminal p-5"}>
                <div className="card-body flex">
                  <div className="timeline-content text-center">
                    <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                    <p className="text-gray-500">{item.company}</p>
                    <p className="text-gray-200">{item.summary}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
