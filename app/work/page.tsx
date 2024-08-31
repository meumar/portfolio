import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import { Link } from "@nextui-org/link";

import { projects } from "@/config/site";

export default function Work() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <Card key={index + "_project"} className="w-75">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col text-left">
                <p className="text-md">{project.title}</p>
                <Link isExternal showAnchorIcon href={project.link} size="sm">
                  {project.link}
                </Link>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div>
                <p>{project.content}</p>
              </div>
            </CardBody>
            <Divider />
            <CardFooter>
              <div className="flex gap-2 overflow-auto">
                {project.languages.map((lang, i) => (
                  <Chip key={lang.title + "_" + i} color="default" size="sm">
                    {lang.title}
                  </Chip>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
