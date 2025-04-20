"use client";
import React, { useState } from "react";
import WelcomeContainer from "../_components/WelcomeContainer";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import FormContainer from "./_components/FormContainer";

export default function CreateInterview() {
    const router = useRouter();
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({})
    const onHandleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }))

        console.log("Form Data: ", { ...formData, [field]: value })
    }

  return (
    <div>
      <WelcomeContainer />
      <div className="mt-5 px-5 md:px-12 lg:px-22 xl:px-28">
      <div className="flex gap-2 p-2 items-center">
        <ArrowLeft onClick = {() => router.back()} className="cursor-pointer" />
        <h2 className="font-bold text-2xl font-sans"> Create New Interview </h2>
      </div>
      <Progress value={step * 33.33} className='my-5' />
      <FormContainer onHandleInputChange = {onHandleInputChange} />
    </div>
    </div>
  );
}