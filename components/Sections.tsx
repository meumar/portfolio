import React from "react";
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody } from "@heroui/card";

import Experience from "./Experience";
import Projects from "./Projects";

export default function SectionsTabs() {
  return (
    <main className="flex w-full flex-col mt-5">
      <Tabs
        aria-label="Options"
        className="self-center"
        classNames={{
          tabList:
            "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#016FEE]",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#016FEE]",
        }}
        color="primary"
        variant="underlined"
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
