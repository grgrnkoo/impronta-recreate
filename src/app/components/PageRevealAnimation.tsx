'use client'

import { motion } from "motion/react"
import * as mainImage from '../public/images/prova_impronta2_ca9e1c9b5a.webp'

interface PageRevealProps {
    onLoad?: boolean,
}

export default function PageRevealAnimation({ onLoad = false }: PageRevealProps) {
    const bgColor = '#275b81'

    return (
        <motion.div
            className='relative h-screen w-full text-white overflow-hidden'
        >
            <motion.div
                className="absolute flex flex-col justify-end"
                initial={{
                    height: '100vh'
                }}
                animate={{
                    height: 'fit-content'
                }}
                transition={{
                    duration: 1,
                    delay: .3
                }}
            >
                <p
                    className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[280px] font-extrabold tracking-tight"
                >
                    Impronta
                </p>
            </motion.div>
            <motion.div
                className="flex items-end"
                style={{
                    backgroundColor: bgColor,
                }}
                initial={{
                    height: '100vh'
                }}
                animate={{
                    height: 0
                }}
                transition={{
                    duration: 1,
                    delay: .3
                }}
            >
            </motion.div>
            <img
                src={mainImage.default.src}
                alt="Initial image"
            />
        </motion.div >
    )
}