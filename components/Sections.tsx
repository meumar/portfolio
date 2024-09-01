import React, { useContext } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import UserContext from "@/context/UserDetailsContext";
import Experience from "./Experience";
import Projects from "./Projects";

export default function SectionsTabs() {
  const user: any = useContext(UserContext);

  return (
    <main className="flex w-full flex-col mt-5">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="underlined"
        className="self-center"
        classNames={{
          tabList:
            "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#016FEE]",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#016FEE]",
        }}
      >
        <Tab key="experience" title="Experience">
          <Card className="bg-gray-950 border border-gray-800 p-5">
            <CardBody>
              <Experience />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="projects" title="Projects">
          <Card className="bg-gray-950 border border-gray-800 p-5">
            <CardBody>
              <Projects />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </main>
  );
}
