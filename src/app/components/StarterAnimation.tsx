'use client'

import { AnimatePresence, motion } from "motion/react"
import { useViewportHeight } from "../lib/hooks/useViewportHeight"
import WordCycler from "../lib/WordCycler"
import { useState, useEffect, useRef } from "react"
import * as mainImage from '../public/images/prova_impronta2_ca9e1c9b5a.webp'
import { getTextHeight } from "../lib/getTextHeight"
import { useTransitionTracker } from "./providers/TransitionProvider"

interface transitionInterface {
    isTransition: boolean,
    previousPath?: string | null
}

interface StarterInterface {
    step: number,
    viewportHeight: number,
    animationDelay: number,
    animationDelayNoTransition: number,
    transition: transitionInterface,
    wordsArray: string[]
}

export default function StarterAnimation({
    step = 1,
    viewportHeight = 800,
    animationDelay = 1,
    animationDelayNoTransition = 0.7,
    transition = {
        isTransition: false,
        previousPath: null
    },
    wordsArray = ['Living', 'Space', 'Future', 'Impronta']
}) {
    const [index, setIndex] = useState<number>(0)
    const [yTarget, setYTarget] = useState<number>(0);
    const bgColor = '#275b81'
    
    



    useEffect(() => {
        const textHeight = getTextHeight();
        setYTarget(-1 * window.innerHeight + textHeight + 64)
    }, [])

    useEffect(() => {
        if (index === wordsArray.length - 1) return; // Stop after last word

        const timeout = setTimeout(() => {
            setIndex((prev) => (prev + 1) % wordsArray.length);
        }, 1500); // 1s per word

        return () => clearTimeout(timeout);
    }, [index]);

    return (

        <div
            className='h-screen w-full text-white overflow-hidden flex'
            style={{
                backgroundColor: bgColor
            }}
        >
            {step === 2 && (
                <AnimatePresence mode="wait">
                    <motion.div
                        className="bg-white h-screen"
                        initial={{
                            width: 0
                        }}
                        animate={{
                            width: '100%'
                        }}
                        transition={{
                            duration: 5
                        }}
                    >

                    </motion.div>
                </AnimatePresence>
            )}
            {
                step === 1 && (
                    !transition.isTransition ? (
                        <div
                            className="overflow-hidden flex flex-col"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    className="w-full flex justify-between items-start pt-12 px-24 text-[10px] overflow-hidden"
                                    initial={{
                                        height: '100vh',
                                        y: 0,
                                    }}
                                    animate={{
                                        height: 0,
                                        y: '-50vh',
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: animationDelay
                                    }}
                                >
                                    <motion.p
                                        className="uppercase text-xs will-change-transform"
                                        style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                                        initial={{
                                            opacity: 0.8,
                                            y: (viewportHeight || 800) / 2
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        transition={{
                                            duration: 1,
                                            ease: [.54, 1.03, .25, .94],
                                            delay: .25
                                        }}
                                    >
                                        Est.2002
                                    </motion.p>
                                    <motion.p
                                        className="text-[10px] will-change-transform"
                                        style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                                        initial={{
                                            opacity: 0.8,
                                            y: (viewportHeight || 800) / 2
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 1,
                                            ease: [.54, 1.03, .25, .94],
                                            delay: .45
                                        }}
                                    >
                                        Loading
                                    </motion.p>
                                </motion.div>
                                <motion.div
                                    className='absolute bottom-0 px-24 w-full'
                                    initial={{
                                        y: 0,
                                    }}
                                    animate={{
                                        y: yTarget,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: animationDelay
                                    }}
                                >
                                    <WordCycler wordsArray={wordsArray} viewportHeight={viewportHeight} index={index} />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    ) : (
                        <AnimatePresence mode="wait">
                            <div
                                className="overflow-hidden flex flex-col justify-between"
                            >
                                <motion.div
                                    className="w-full flex justify-start items-end pt-12 px-24 overflow-hidden"
                                    initial={{
                                        height: '100vh',
                                        y: 0,
                                    }}
                                    animate={{
                                        height: 0,
                                        y: '-50vh',
                                    }}
                                    transition={{
                                        duration: .7,
                                        // delay: animationDelayNoTransition
                                    }}
                                >
                                </motion.div>
                                <motion.p
                                    className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[280px] font-extrabold tracking-tight absolute bottom-0 pt-12 px-24"
                                    initial={{ y: 400, rotateZ: 10 }}
                                    animate={{ y: yTarget, rotateZ: 0 }}
                                    transition={{
                                        duration: .7,
                                        ease: [.66, .04, .77, .48],
                                    }}
                                >
                                    Impronta
                                </motion.p>
                            </div>
                        </AnimatePresence>
                    )
                )
            }
            {
                step === 2 && (
                    <AnimatePresence mode="wait">
                        <motion.p
                            className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[280px] font-extrabold tracking-tight absolute px-24"
                            initial={{
                                y: yTarget,
                                color: 'white',
                                scale: 1
                            }}
                            animate={{
                                left: 0,
                                color: 'black',
                                fontSize: '32px',
                                paddingTop: '32px'
                            }}
                            transition={{
                                duration: .7,
                                ease: [.66, .04, .77, .48],
                            }}
                        >
                            Impronta
                        </motion.p>
                    </AnimatePresence>
                )
            }
            <img
                src={mainImage.default.src}
                alt="Initial image"
                className="h-screen object-cover overflow-hidden w-full"
            />
        </div>
    )
}