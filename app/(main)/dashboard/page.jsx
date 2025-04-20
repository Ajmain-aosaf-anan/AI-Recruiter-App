"use client";
import React from "react";
import WelcomeContainer from "./_components/WelcomeContainer";
import CreateOptions from "./_components/CreateOptions";
import LatestInterviewsList from "./_components/LatestInterviews";

function Dashboard() {
    return (
        <div className="w-full">
            <WelcomeContainer />
            <h2 className="my-3 font-bold text-2xl">Dashboard</h2>
            <CreateOptions />
            <LatestInterviewsList />
        </div>
    )
}

export default Dashboard;