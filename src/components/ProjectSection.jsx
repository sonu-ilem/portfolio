'use client'
// import React from 'react'
import { Chrono } from "react-chrono";


export default function ProjectSection() {

    const items = [
        {
            title: "January 2022",
            cardTitle: "Event 1",
            cardSubtitle: "Event 1 Subtitle",
            cardDetailedText: "This is the first event on the timeline.",
            media: {
                type: "IMAGE",
                source: {
                    url:"https://media.istockphoto.com/id/1171173195/photo/portrait-of-cheerful-female-programmer-enjoying-time-with-laptop-computer-and-distance-job.jpg?s=2048x2048&w=is&k=20&c=KoHdraMkQf62Jl4axv-WFOiKqJ0PZd06COX0iaamkQU="
                }
            }
        },
        {
            title: "February 2022",
            cardTitle: "Event 2",
            cardSubtitle: "Event 2 Subtitle",
            cardDetailedText: "This is the second event on the timeline.",
            media: {
                type: "IMAGE",
                source: {
                    url:"https://cdn.pixabay.com/photo/2016/06/25/13/00/purse-1478852_1280.jpg"
                }
            }
        },
        {
            title: "March 2022",
            cardTitle: "Event 3",
            cardSubtitle: "Event 3 Subtitle",
            cardDetailedText: "This is the third event on the timeline.",
            media: {
                type: "IMAGE",
                source: {
                    url:"https://cdn.pixabay.com/photo/2016/06/25/13/00/purse-1478852_1280.jpg"
                }
            }
        }
    ];

    return (
        <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            itemWidth={150}
        />
    );
}