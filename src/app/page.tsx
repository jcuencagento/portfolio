"use client";
import {useState, useEffect} from "react";

import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import Misc from "@/components/Misc";
import ProjectsComponent from "@/components/ProjectsComponent";
import Random from "@/components/Random";
import Studies from "@/components/Studies";

export default function HomePage() {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        setMobile(window.innerWidth < 620);
    }, []);

    if (mobile) {
        return (
            <div className="mt-6 grid auto-rows-auto grid-cols-2 gap-6">
                <Introduction />
                <Studies />
                <Experience />
                <ProjectsComponent />
                <Misc />
                <Random />
            </div>
        );
    }

    return (
        <div className="grid auto-rows-auto grid-cols-3 gap-6">
            <Misc />
            <Introduction />
            <Experience />
            <Studies />
            <Random />
            <ProjectsComponent />
        </div>
    );
}
