"use client";

import { useContext, useState } from "react";

import UserContext from "@/context/UserDetailsContext";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const user: any = useContext(UserContext);
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
            type="email"
            value={email}
            variant="bordered"
            placeholder="Enter your email"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
          />
          <Button
            color="primary"
            variant="bordered"
            onClick={sayHello}
            isLoading={loading}
          >
            Say Hello
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Footer;
