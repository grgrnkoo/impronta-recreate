'use client'

import StarterAnimation from "./components/StarterAnimation";
import { useViewportHeight } from "./lib/hooks/useViewportHeight";
import { useTransitionTracker } from "./components/providers/TransitionProvider";
import { useEffect, useState } from "react";
import MainContent from "./components/MainContent";
import { AnimatePresence } from "motion/react";
import * as mainImage from './public/images/prova_impronta2_ca9e1c9b5a.webp'

interface transitionInterface {
  isTransition: boolean,
  previousPath: string | null
}

export default function Home() {
  const [step, setStep] = useState<1 | 2>(1)
  const [loadingScreen, setLoadingScreen] = useState<boolean>(true)
  const wordsArray = ['Living', 'Space', 'Future', 'Impronta']
  const viewportHeight = useViewportHeight()
  const animationDelay = wordsArray.length * 1.5 + .7;
  const animationDelayNoTransition = .7;
  const transition: transitionInterface = useTransitionTracker();
  const sliderDuration = 1;
  const quarterSecond = 0.25;
  const imagePath = mainImage.default.src;
  const [mainScreenLoadTime, setMainScreenLoadTime] = useState<number>(99999);

  useEffect(() => {
    if (!loadingScreen) return;

    let timeout: NodeJS.Timeout;
    const animationLength = transition.isTransition ? animationDelayNoTransition : animationDelay * 1.3;
    setMainScreenLoadTime(animationLength * 1000 + animationDelay * 1000);
    if (step === 1) {
      timeout = setTimeout(() => {
        setStep(2);
      }, animationLength * 1000);
    } else if (step === 2) {
      timeout = setTimeout(() => {
        setLoadingScreen(false);
      }, animationDelay * 1000);
    }

    return () => clearTimeout(timeout);
  }, [loadingScreen, step]);

  useEffect(() => {
    if (!loadingScreen) {
      window.scrollTo({ top: 0 });
    }
  }, [loadingScreen]);

  return (
    <div
      className="flex flex-col w-full"
    >
      <AnimatePresence>
        {loadingScreen && (
          <StarterAnimation
            step={step}
            viewportHeight={viewportHeight}
            animationDelay={animationDelay}
            animationDelayNoTransition={animationDelayNoTransition}
            transition={transition}
            wordsArray={wordsArray}
            sliderDuration={sliderDuration}
            quarterSecond={quarterSecond}
            imageSrc={imagePath}
          />
        )}
      </AnimatePresence>

      <MainContent
        imageSrc={imagePath}
        loadingScreen={loadingScreen}
        mainScreenLoadTime={mainScreenLoadTime}
      />
    </div>
  );
}
