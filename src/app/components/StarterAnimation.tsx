'use client'

import { motion } from "motion/react"
import { useViewportHeight } from "../lib/hooks/useViewportHeight"
import WordCycler from "../lib/WordCycler"
import { useState, useEffect } from "react"

export default function StarterAnimation() {
    const [index, setIndex] = useState<number>(0)
    const bgColor = '#275b81'
    const viewportHeight = useViewportHeight()
    const wordsArray = ['Living', 'Space', 'Future', 'Impronta']

    useEffect(() => {
        if (index === wordsArray.length - 1) return; // Stop after last word

        const timeout = setTimeout(() => {
            setIndex((prev) => (prev + 1) % wordsArray.length);
        }, 1500); // 1s per word

        return () => clearTimeout(timeout);
    }, [index]);

    return (
        <div
            className='relative h-screen w-full text-white overflow-hidden'
            style={{
                backgroundColor: bgColor
            }}
        >
            <motion.div
                className="w-full flex justify-between fixed pt-12 px-24 text-[10px]"
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
                        ease: [.54,1.03,.25,.94],
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
                        ease: [.54,1.03,.25,.94],
                        delay: .45
                    }}
                >
                    Loading
                </motion.p>
            </motion.div>
            <div
                className="px-24 h-screen w-full flex justify-end items-start flex-col"
            >
                <WordCycler wordsArray={wordsArray} viewportHeight={viewportHeight} index={index} />
            </div>
        </div>
    )
}