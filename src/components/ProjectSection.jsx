"use client";
import { Chrono } from "react-chrono";
import DescriptionSection from "./DescriptionSection";
import MobileDescription from "./MobileDescription";
import { useEffect, useState } from "react";

export default function ProjectSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const items = [
    {
      title: <DescriptionSection />,
      cardTitle: "Payments tool for companies",
      cardSubtitle: "12 Mar To 13 April 2024",
      cardDetailedText: <MobileDescription />,
      media: {
        type: "IMAGE",
        source: {
          url: "https://in.ilemjapan.com/cdn/shop/files/2_10.jpg?v=1715670376",
        },
      },
    },
    {
      title: <DescriptionSection />,
      cardTitle: "Payments tool for companies",
      cardSubtitle: "12 Mar To 13 April 2024",
      cardDetailedText: <MobileDescription />,
      media: {
        type: "IMAGE",
        source: {
          url: "https://in.ilemjapan.com/cdn/shop/files/2_10.jpg?v=1715670376",
        },
      },
    },
    {
      title: <DescriptionSection />,
      cardTitle: "Payments tool for companies",
      cardSubtitle: "12 Mar To 13 April 2024",
      cardDetailedText: <MobileDescription />,
      media: {
        type: "IMAGE",
        source: {
          url: "https://in.ilemjapan.com/cdn/shop/files/2_10.jpg?v=1715670376",
        },
      },
    },
    {
      title: <DescriptionSection />,
      cardTitle: "Payments tool for companies",
      cardSubtitle: "12 Mar To 13 April 2024",
      cardDetailedText: <MobileDescription />,
      media: {
        type: "IMAGE",
        source: {
          url: "https://in.ilemjapan.com/cdn/shop/files/2_10.jpg?v=1715670376",
        },
      },
    },
  ];

  return (
    <>
      {isMounted && (
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          itemWidth={150}
        />
      )}
    </>
  );
}