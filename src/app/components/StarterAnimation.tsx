'use client'

import { motion } from "motion/react"
import { useViewportHeight } from "../lib/hooks/useViewportHeight"
import WordCycler from "../lib/WordCycler"
import { useState, useEffect, useRef } from "react"
import * as mainImage from '../public/images/prova_impronta2_ca9e1c9b5a.webp'
import { useTextHeight } from "../lib/hooks/useTextHeight"

export default function StarterAnimation() {
    const [index, setIndex] = useState<number>(0)
    const [yTarget, setYTarget] = useState<number>(0);
    const bgColor = '#275b81'
    const viewportHeight = useViewportHeight()
    const wordsArray = ['Living', 'Space', 'Future', 'Impronta']

    useEffect(() => {
        const textHeight = useTextHeight();
        setYTarget(-1 * window.innerHeight + textHeight + 64)
        console.log(textHeight)
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
            className='h-screen w-full text-white overflow-hidden'
            style={{
                backgroundColor: bgColor
            }}
        >
            <div
                className="overflow-hidden flex flex-col"
            >
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
                        delay: 7
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
                        delay: 7
                    }}
                >
                    <WordCycler wordsArray={wordsArray} viewportHeight={viewportHeight} index={index} />
                </motion.div>
            </div>
            <img
                src={mainImage.default.src}
                alt="Initial image"
                className="h-screen object-cover overflow-hidden w-full"
            />
        </div>
    )
}