'use client'

import { useState } from "react";
import StarterAnimation from "./components/StarterAnimation";
import PageRevealAnimation from "./components/PageRevealAnimation";

export default function Home() {
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  return (
    <div 
      className="flex flex-col w-full"
    >
      <StarterAnimation />
      {/* <PageRevealAnimation onLoad={isFirstLoad} /> */}
    </div>
  );
}
