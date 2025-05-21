'use client'

import { AnimatePresence, motion } from "motion/react"
import WordCycler from "../lib/WordCycler"
import { useState, useEffect, useRef } from "react"
import { getTextHeight } from "../lib/getTextHeight"

interface transitionInterface {
    isTransition: boolean,
    previousPath: string | null
}

interface StarterInterface {
    step: number,
    viewportHeight: number,
    animationDelay: number,
    animationDelayNoTransition: number,
    transition: transitionInterface,
    wordsArray: string[],
    sliderDuration?: number,
    quarterSecond?: number,
    imageSrc?: string
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
    wordsArray = ['Living', 'Space', 'Future', 'Impronta'],
    sliderDuration = 1,
    quarterSecond = 0.25,
    imageSrc
}: StarterInterface) {
    const [index, setIndex] = useState<number>(0)
    const [yTarget, setYTarget] = useState<number>(0);
    const bgColor = '#275b81'

    useEffect(() => {
        console.log('step', step)
    }, [step])

    useEffect(() => {
        const textHeight = getTextHeight();
        setYTarget(-1 * window.innerHeight + textHeight + 64)
    }, [])

    useEffect(() => {
        console.log('yTarget: ', yTarget);

        if (index === wordsArray.length - 1) return; // Stop after last word

        const timeout = setTimeout(() => {
            setIndex((prev) => (prev + 1) % wordsArray.length);
        }, 1500); // 1s per word

        return () => clearTimeout(timeout);

    }, [index]);

    return (

        <AnimatePresence mode="wait">
            <div
                className={`z-49 h-screen w-full text-white overflow-hidden ${step === 2 && 'flex'}`}
                style={{
                    backgroundColor: bgColor
                }}
            >
                {step === 2 && (
                    <motion.div
                        className="bg-white h-screen"
                        initial={{
                            width: 0
                        }}
                        animate={{
                            width: '80%'
                        }}
                        transition={{
                            duration: 2,
                            ease: [1, .09, .24, .72]
                        }}
                    >

                    </motion.div>
                )}
                {
                    step === 1 && (
                        <div
                            className={`overflow-hidden flex flex-col ${transition.isTransition && 'justify-between'}`}
                        >
                            <motion.div
                                className="w-full flex justify-between items-start px-24 text-[10px] overflow-hidden"
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
                                    delay: !transition.isTransition ? animationDelay : animationDelayNoTransition,
                                    ease: [1, .09, .24, .72]
                                }}
                            >
                                {
                                    !transition.isTransition && (
                                        <>
                                            <motion.p
                                                className="uppercase text-xs will-change-transform pt-12"
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
                                                    duration: sliderDuration,
                                                    ease: [.54, 1.03, .25, .94],
                                                    delay: quarterSecond
                                                }}
                                            >
                                                Est.2002
                                            </motion.p>
                                            <motion.p
                                                className="text-[10px] will-change-transform pt-12"
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
                                        </>
                                    )
                                }

                            </motion.div>
                            {
                                !transition.isTransition ? (
                                    <motion.div
                                        className='absolute bottom-0 px-24 w-full'
                                        initial={{
                                            y: 0,
                                        }}
                                        animate={{
                                            y: yTarget,
                                        }}
                                        transition={{
                                            duration: sliderDuration,
                                            delay: animationDelay,
                                            ease: [1, .50, .24, .72]
                                        }}
                                    >
                                        <WordCycler wordsArray={wordsArray} viewportHeight={viewportHeight} index={index} />
                                    </motion.div>
                                ) : (
                                    <motion.p
                                        className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[280px] font-extrabold tracking-tight absolute bottom-0 px-24"
                                        initial={{ y: 400, rotateZ: 10 }}
                                        animate={{ y: yTarget, rotateZ: 0 }}
                                        transition={{
                                            duration: .7,
                                            ease: [1, .30, .24, .72],
                                        }}
                                    >
                                        Impronta
                                    </motion.p>
                                )
                            }

                        </div>
                    )
                }
                {
                    step === 2 && (
                        <motion.p
                            className={`z-10 text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[280px] font-extrabold tracking-tight absolute px-24 bottom-0`}
                            initial={{
                                bottom: 0,
                                y: yTarget,
                                color: '#ffffff',
                                paddingTop: '0px',
                            }}
                            animate={{
                                top: 0,
                                left: 0,
                                y: 0,
                                color: '#484848',
                                fontSize: '32px',
                                paddingTop: '32px',
                            }}
                            transition={{
                                duration: 2,
                                ease: [1, 0.03, 0, 1],
                                delay: 0.1
                            }}
                        >
                            Impronta
                        </motion.p>
                    )
                }
                <img
                    src={imageSrc}
                    alt="Initial image"
                    className="h-screen object-cover overflow-hidden w-full"
                />
            </div>
        </AnimatePresence>
    )
}