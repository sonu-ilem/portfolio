"use client";
import { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const wordsSet = [
    [
      { text: "Front" },
      { text: "End" },
      { text: "Developer ." },
    ],
    [
      { text: "Full" },
      { text: "Stack" },
      { text: "Developer ." },
    ],
    [
      { text: "MERN" },
      { text: "Stack" },
      { text: "Developer ." },
    ],
  ];

  const [currentWordsIndex, setCurrentWordsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordsIndex((prevIndex) => (prevIndex + 1) % wordsSet.length);
    }, 10000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[4rem]">
      <TypewriterEffectSmooth words={wordsSet[currentWordsIndex]} />
    </div>
  );
}
