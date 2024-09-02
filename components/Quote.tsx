"use client";

import { Card, CardBody } from "@nextui-org/card";
import { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState<string>("");

  const fetchQuote = async () => {
    const response = await fetch("/api/quote");
    const data = await response.json();
    setQuote(data.quote);
    console.log("data", data);
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main className="flex items-center justify-center">
      <div className="w-full">
        <Card className="bg-gray-900 border border-gray-800">
          <CardBody className="flex items-center justify-center text-center">
            <p className="text-base italic">{`"${quote}"`}</p>
          </CardBody>
        </Card>
      </div>
    </main>
  );
};

export default Quote;
