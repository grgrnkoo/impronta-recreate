'use client'

import StarterAnimation from "./components/StarterAnimation";
import { useViewportHeight } from "./lib/hooks/useViewportHeight";
import { useTransitionTracker } from "./components/providers/TransitionProvider";
import { useState } from "react";

interface transitionInterface {
    isTransition: boolean,
    previousPath?: string | null
}

export default function Home() {
  const [step, setStep] = useState<1 | 2>(2)
  const wordsArray = ['Living', 'Space', 'Future', 'Impronta']
  const viewportHeight = useViewportHeight()
  const animationDelay = wordsArray.length * 1.5 + .7;
      const animationDelayNoTransition = .7;
      // const transition: transitionInterface = useTransitionTracker();
      const transition: transitionInterface = {
          isTransition: false,
          previousPath: null
      };

  return (
    <div 
      className="flex flex-col w-full"
    >
      <StarterAnimation 
        step={step}
        viewportHeight={viewportHeight}
        animationDelay={animationDelay}
        animationDelayNoTransition={animationDelayNoTransition}
        transition={transition}
        wordsArray={wordsArray}
      />
      {/* <PageRevealAnimation onLoad={isFirstLoad} /> */}
    </div>
  );
}
