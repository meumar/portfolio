"use client";
import { Divider } from "@nextui-org/divider";

import Header from "@/components/Header";
import Summary from "@/components/Summary";
import SectionsTabs from "@/components/Sections";
import Skills from "@/components/Skills";
import Quote from "@/components/Quote";

export default function Home() {
  return (
    <section className="">
      <div className="mb-5">
        <Header />
      </div>
      <div className="mb-5">
        <Summary />
      </div>
      <div className="mb-5">
        <Quote />
      </div>
      <Divider className="bg-slate-800 mb-5" />
      <div className="mb-5">
        <Skills />
      </div>
      <Divider className="bg-slate-800" />
      <div className="mb-5">
        <SectionsTabs />
      </div>
    </section>
  );
}
