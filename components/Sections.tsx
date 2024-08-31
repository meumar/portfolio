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
            <Tabs aria-label="Options" size="lg" variant="light" className="self-center"
                classNames={{
                    tabList: "bg-gray-900",
                    cursor: "",
                    tab: "bg-gray-900",
                    tabContent: "",

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
