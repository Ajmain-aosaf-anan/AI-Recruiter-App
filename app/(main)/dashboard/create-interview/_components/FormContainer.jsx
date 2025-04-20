
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { InterviewType } from "@/services/Constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
  

function FormContainer( {onHandleInputChange} ){

    const [interviewType, setInterviewType] = useState([])

    useEffect(() => {
        if(interviewType.length > 0) 
        {
            onHandleInputChange('type', interviewType)
        }
    }, [interviewType, onHandleInputChange])

    return (
        <div className="p-5 bg-white rounded-xl"> 
        <div>
            <h2 className="text-sm font-sans ">Job Position</h2>
            <Input placeholder="e.g. Full Stack Developer" 
            className="mt-2" 
            onChange = {(event) => onHandleInputChange('jobPosition', 
            event.target.value)}
            />
        </div>

        <div className="mt-5">
            <h2 className="text-sm font-sans ">Job Description</h2>
            <Textarea placeholder="Enter Detailed Job Description" 
            className="mt-2 h-[200px] " 
            onChange = {(event) => onHandleInputChange('jobDescription', 
            event.target.value)}
            />
        </div>

        <div className="mt-5">
            <h2 className="text-sm font-sans ">Interview Duration</h2>
            <Select onValueChange = {(value) => onHandleInputChange('duration', value)}>
                <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="Select Duration" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="15 Minutes">15 Minutes</SelectItem>
                    <SelectItem value="20 Minutes">20 Minutes</SelectItem>
                    <SelectItem value="30 Minutes">30 Minutes</SelectItem>
                    <SelectItem value="40 Minutes">40 Minutes</SelectItem>
                    <SelectItem value="50 Minutes">50 Minutes</SelectItem>
                    <SelectItem value="60 Minutes">1 Hour</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="mt-5">
            <h2 className="text-sm font-sans ">Interview Type</h2>
            <div className="flex gap-3 flex-wrap mt-2">
                {InterviewType.map((type, index) => (
                    <div key = {index} 
                    className={'flex items-center cursor-pointer gap-2 p-1 px-2 bg-cyan-50 border border-green-300 rounded-2xl hover:bg-green-200 ${interviewType.includes(type.title) && "bg-green-200 text-primary"}'}
                        onClick = {() => setInterviewType(prev => [...prev,type.title])} >
                        <type.icon className="h-4 w-4" />
                        <span> {type.title} </span>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-7 flex justify-end">
        <Button> Generate Question <ArrowRight /> </Button>
        </div>
        </div>
    )
}

export default FormContainer;