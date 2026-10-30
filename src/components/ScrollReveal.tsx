"use client";

import {useEffect} from "react";

export function ScrollReveal() {
    useEffect(() => {
        const sections = document.querySelectorAll("main section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.animate(
                            [
                                {transform: "scale(0)", opacity: 0},
                                {transform: "scale(1.1)", opacity: 0.8, offset: 0.5},
                                {transform: "scale(1)", opacity: 1},
                            ],
                            {
                                duration: 1000,
                                easing: "ease-out",
                                fill: "forwards",
                            }
                        );

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px",
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return null;
}