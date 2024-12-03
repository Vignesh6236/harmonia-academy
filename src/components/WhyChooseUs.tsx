"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
        title: "Unleash Your Creative Potential",
        description:
            "Discover a world where your creativity takes center stage. Our tailored approach empowers you to explore, experiment, and excel, building a foundation for lasting success in your musical journey.",
    },
    {
        title: "Collaborative Community of Artists",
        description:
            "Join a thriving community of like-minded individuals who share your passion for music. Engage in collaborative projects, share your ideas, and grow together in an environment that inspires and motivates.",
    },
    {
        title: "Innovative Tools for Modern Musicians",
        description:
            "Leverage state-of-the-art tools and technologies designed to enhance your learning experience. From interactive lessons to advanced practice tools, everything you need to master your craft is at your fingertips.",
    },
    {
        title: "Tailored Learning at Your Pace",
        description:
            "Enjoy the flexibility of a curriculum that adapts to your schedule and learning style. Whether you're a beginner or an advanced musician, our program meets you where you are and helps you reach your goals.",
    },
    {
        title: "Achieve Your Musical Dreams",
        description:
            "From your first note to your finest performance, we’re here to support you every step of the way. Our comprehensive program is designed to help you turn your musical aspirations into reality.",
    },
    {
        title: "Master Every Genre, Explore Every Style",
        description:
            "From classical to contemporary, our courses cover a vast range of musical styles and genres. Expand your horizons and discover new inspirations that resonate with your unique sound.",
    },
    {
        title: "Build Skills That Last a Lifetime",
        description:
            "Our holistic approach goes beyond just technique, fostering discipline, creativity, and resilience—skills that enhance every aspect of your life and career.",
    },
];

function WhyChooseUs() {
    return (
        <div>
            <StickyScroll content={musicSchoolContent} />
        </div>
    );
}

export default WhyChooseUs;
