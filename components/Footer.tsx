"use client";

import React, { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const sayHello = async () => {
    setErrors("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors("Please enter a valid email address");

      return;
    }
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      });
      setLoading(false);
      setEmail("");
      toast.success(`Thanks for reaching out. I'll get back to you!`);
    } catch (e) {
      setLoading(false);
    }
  };

  const setData = (value: string) => {
    setErrors("");
    setEmail(value);
  };

  return (
    <main className="flex items-center justify-center bg-gray-900 border border-gray-800">
      <div className="w-full max-w-md p-5 text-center">
        <h2 className="text-2xl text-white mb-4">Have any exciting ideas?</h2>
        <h2 className="text-1xl text-white mb-4">{`let's build together`}</h2>
        <div className="flex gap-5">
          <Input
            isClearable
            errorMessage={errors ? errors : ""}
            isInvalid={errors ? true : false}
            placeholder="Enter your email"
            type="email"
            value={email}
            variant="bordered"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setData(event.target.value)
            }
            onClear={() => setEmail("")}
          />
          <Button
            color="primary"
            isLoading={loading}
            variant="bordered"
            onClick={sayHello}
          >
            Say Hello
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Footer;
