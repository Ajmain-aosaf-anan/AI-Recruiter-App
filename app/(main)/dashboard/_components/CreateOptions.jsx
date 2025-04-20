import { Phone, Video } from "lucide-react";
import React from "react";
import Link from "next/link";

function CreateOptions() {
    return (
        <div className = "grid grid-cols-2 gap-5">
            <Link href={'/dashboard/create-interview'} className = "bg-white border border-gray-200 rounded-lg p-5 flex flex-col gap-2 cursor-pointer">
                <Video className="p-2 text-primary bg-green-200 rounded-lg h-12 w-12" />
                <h2 className="font-bold font-sans"> Create New Interview</h2>
                <p className="text-gray-500">Create AI Interviews and Schedule with Candidates</p>
            </Link>
            <div className = "bg-white border border-gray-200 rounded-lg p-5">
                <Phone className="p-2 text-primary bg-green-200 rounded-lg h-12 w-12" />
                <h2 className="font-bold font-sans"> Create Phone Screening Call</h2>
                <p className="text-gray-500">Schedule Phone Screening Call with Candidates</p>
            </div>
        </div>
    )
}

export default CreateOptions;