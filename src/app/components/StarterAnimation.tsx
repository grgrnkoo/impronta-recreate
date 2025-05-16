'use client'

import { motion } from "motion/react"
import { useViewportHeight } from "../lib/hooks/useViewportHeight"
import WordCycler from "../lib/WordCycler"

export default function StarterAnimation() {
    const bgColor = '#275b81'
    const viewportHeight = useViewportHeight()
    const wordsArray = ['Living', 'Space', 'Future', 'Impronta']

    return (
        <div
            className='relative h-screen w-full text-white'
            style={{
                backgroundColor: bgColor
            }}
        >
            <motion.div
                className="w-full flex justify-between fixed pt-12 px-24 text-sm"
            >
                <motion.p
                    className="uppercase text-xs will-change-transform"
                    initial={{
                        opacity: 0.8,
                        y: (viewportHeight || 800) / 2
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: .5,
                        ease: "circIn"
                    }}

                >
                    Est.2002
                </motion.p>
                <motion.p
                    className="text-xs will-change-transform"
                    initial={{
                        opacity: 0.8,
                        y: (viewportHeight || 800) / 2
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: .5,
                        ease: "circIn",
                        delay: .2
                    }}
                >
                    Loading
                </motion.p>
            </motion.div>
            <div
                className="px-24 h-screen w-full flex justify-end items-start flex-col"
            >
                <WordCycler wordsArray={wordsArray} viewportHeight={viewportHeight} />
            </div>
        </div>
    )
}