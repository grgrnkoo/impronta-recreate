'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react"

interface CyclerProps {
    wordsArray: string[],
    viewportHeight: number
}

export default function WordCycler({ wordsArray, viewportHeight }: CyclerProps) {
    const [index, setIndex] = useState<number>(0)

    useEffect(() => {
        if (index === wordsArray.length - 1) return; // Stop after last word

        const timeout = setTimeout(() => {
            setIndex((prev) => (prev + 1) % wordsArray.length);
        }, 1500); // 1s per word

        return () => clearTimeout(timeout);
    }, [index]);

    return (
        <div className="h-screen flex items-end justify-start">
            <AnimatePresence mode="wait">
                <motion.p
                    key={`${wordsArray[index]}_inFunc`}
                    className="text-[300px] font-extrabold tracking-tight"
                    initial={{ y: 400, rotateZ: 5 }}
                    animate={{ y: 0, rotateZ: 0 }}
                    exit={{ y: -1 * viewportHeight, rotateZ: -10 }}
                    transition={{ duration: .6, ease: "linear" }}
                >
                    {wordsArray[index]}
                </motion.p>
            </AnimatePresence>
        </div>
    )
}