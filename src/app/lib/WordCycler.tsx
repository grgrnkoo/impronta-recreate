'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, RefObject } from "react"

interface CyclerProps {
    wordsArray: string[],
    viewportHeight: number,
    index: number,

}

export default function WordCycler({ wordsArray, viewportHeight, index }: CyclerProps) {
    return (
        <div className="flex items-end md:justify-start justify-center">
            <AnimatePresence mode="wait">
                <motion.p
                    key={`${wordsArray[index]}_inFunc`}
                    className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[280px] font-extrabold tracking-tight"
                    initial={{ y: 400, rotateZ: 5 }}
                    animate={{ y: 0, rotateZ: 0 }}
                    exit={{ y: -1 * viewportHeight, rotateZ: -10 }}
                    transition={{
                        duration: .7,
                        ease: [.66, .04, .55, .82],
                    }}
                >
                    {wordsArray[index]}
                </motion.p>
            </AnimatePresence>
        </div>
    )
}