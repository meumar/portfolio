"use client";
import React from "react";
import { useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";

interface typeForm {
  name: string;
  email: string;
  subject: string;
  phone?: string;
  message: string;
}

interface eType {
  name: string;
  value: string;
}

/*global HTMLInputElement */

export default function Contact() {
  let [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<typeForm>({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (event: eType) => {
    const { name, value } = event;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    onOpen();
    setForm({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: any = {};

    if (!form.name) {
      isValid = false;
      newErrors.name = "Name is required";
    }

    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      isValid = false;
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.subject) {
      isValid = false;
      newErrors.subject = "Subject is required";
    }

    if (!form.message) {
      isValid = false;
      newErrors.message = "Message is required";
    }

    if (
      form.phone &&
      !/^(?:(?:\+?1|0)?[ -.]\d{3}\)?[-.]\d{3}[-.]\d{4}|(?:[789]\d{9}))$/.test(
        form.phone,
      )
    ) {
      isValid = false;
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);

    return isValid;
  };

  return (
    <div>
      <h1 className="text-3xl mb-4 font-thin">Contact</h1>
      <div className="flex justify-center p-5">
        <div className="w-full sm:w-2/3">
          <p>{`Let's Connect and create Something Together. Reach Out to Start a Conversation About Your Project or Idea Today!`}</p>
        </div>
      </div>
      <div className="mt-5 p-5 rounded-md">
        <div className="flex gap-10 flex-col sm:flex-row">
          <Input
            errorMessage={errors && errors.name ? errors.name : ""}
            isInvalid={errors && errors.name ? true : false}
            label="Name"
            size="sm"
            type="text"
            value={form.name}
            variant="underlined"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange({ value: event.target.value, name: "name" })
            }
          />
          <Input
            errorMessage={errors && errors.email ? errors.email : ""}
            isInvalid={errors && errors.email ? true : false}
            label="Email"
            size="sm"
            type="email"
            value={form.email}
            variant="underlined"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange({ value: event.target.value, name: "email" })
            }
          />
        </div>
        <div className="flex gap-10 mt-14 flex-col sm:flex-row">
          <Input
            errorMessage={errors && errors.subject ? errors.subject : ""}
            isInvalid={errors && errors.subject ? true : false}
            label="Subject"
            size="sm"
            type="text"
            value={form.subject}
            variant="underlined"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange({ value: event.target.value, name: "subject" })
            }
          />
          <Input
            errorMessage={errors && errors.phone ? errors.phone : ""}
            isInvalid={errors && errors.phone ? true : false}
            label="Phone"
            size="sm"
            type="tel"
            value={form.phone}
            variant="underlined"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange({ value: event.target.value, name: "phone" })
            }
          />
        </div>
        <div className="flex gap-10 mt-14">
          <Textarea
            errorMessage={errors && errors.message ? errors.message : ""}
            isInvalid={errors && errors.message ? true : false}
            label="Message"
            value={form.message}
            variant="underlined"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange({ value: event.target.value, name: "message" })
            }
          />
        </div>
        <div className="gap-10 mt-14 text-center">
          <Button
            color="primary"
            isLoading={loading}
            variant="flat"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>

      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Form submitted successfully!
              </ModalHeader>
              <ModalBody>
                <p>Thanks for reaching me out!</p>
              </ModalBody>
              <ModalFooter />
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
