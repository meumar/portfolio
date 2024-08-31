"use client";

import { useEffect, useContext } from "react";

import UserContext from "@/context/UserDetailsContext";

const Summary = () => {
  const user: any = useContext(UserContext);
  useEffect(() => {}, []);

  return (
    <main>
      <div className="w-full">
        <h2 className="text-base">{user.summary}</h2>
      </div>
    </main>
  );
};

export default Summary;
