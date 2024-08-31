"use client";
import { useEffect, useContext } from "react";
import UserContext from "@/context/UserDetailsContext";
import { experienceData } from "@/config/site";
import { Divider } from "@nextui-org/divider";

const Experience = () => {
  const user: any = useContext(UserContext);
  return (
    <main>
      <div className="">
        {(user?.experience || []).map((exp: any, index: number) => (
          <div
            key={index}
            className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-900 border border-gray-800 rounded-lg shadow-sm hover:shadow-none transition-shadow shadow-slate-600 duration-100"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {exp.company_name}
              </h3>
              <div className=" text-sm sm:text-right mt-2 sm:mt-0 text-gray-400">
                <div className="text-sm">
                  {exp.start_data + " - " + exp.end_date}
                </div>
              </div>
            </div>
            <Divider className="bg-slate-800 my-3" />

            <div className="text-sm sm:text-md mt-2 text-gray-400">
              {exp.role}
            </div>
            <ul className="mt-4 list-disc list-inside space-y-1 sm:space-y-2">
              {exp.summary.map((work: string, workIndex: number) => (
                <li key={workIndex}>{work}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Experience;
