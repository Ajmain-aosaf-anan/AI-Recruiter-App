"use client"
import { Button } from "@/components/ui/button";
import { List, Plus } from "lucide-react";
import React, { useState } from "react";

function LatestInterviewsList() {

    const [interviewList, setInterviewList] = useState([]);

    return (
        
        <div className="my-5">
            <h2 className="font-bold text-2xl font-sans"> Previously Created Interviews </h2>

            {interviewList?.length == 0 && 
            <div className="p-5 flex flex-col gap-3 items-center bg-teal-100 mt-5">
                <List className="h-10 w-10 text-primary" />
                <h2 className="font-sans"> You don't have any interviews created at this moment! </h2>
                <Button className="font-sans"> <Plus className="mr-2"/> Create New Interview </Button>
            </div>}
        </div>
    )
}

export default LatestInterviewsList