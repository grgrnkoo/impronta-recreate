import { AnimatePresence, motion } from "motion/react";

interface MainContentProps {
    imageSrc: string;
    loadingScreen: boolean;
    mainScreenLoadTime: number;
}

export default function MainContent({ imageSrc, loadingScreen, mainScreenLoadTime }: MainContentProps) {
    return (
        <motion.div className="flex w-full h-screen overflow-hidden">
            {/* <div
                className="h-fit fixed top-0 left-0 z-50 flex justify-between items-center w-full"
            >
                <motion.div
                    className="w-[75px] uppercase bg-[#2b2b2b] text-white flex items-center justify-center text-xs overflow-hidden"
                    initial={{
                        height: 0,
                    }}
                    animate={{
                        height: '75px',
                    }}
                    transition={{
                        duration: 1,
                        delay: 10,
                        ease: 'easeIn'
                    }}
                >
                    menu
                </motion.div>
                {
                    !loadingScreen && (
                        <h2
                            className={`z-10 text-[32px] font-extrabold tracking-tight absolute px-24 pt-[32px] top-0 left-0 text-[#2b2b2b]`}
                        >
                            Impronta
                        </h2>
                    )
                }
                <motion.div
                    className="w-[75px] uppercase bg-[#2b2b2b] text-white flex items-center justify-center text-xs overflow-hidden"
                    initial={{
                        height: 0,
                    }}
                    animate={{
                        height: '75px',
                    }}
                    transition={{
                        duration: 1,
                        delay: 10,
                        ease: 'easeIn'
                    }}
                >
                    menu
                </motion.div>
            </div> */}
            <div className="w-[80%] bg-[#ffffff] h-screen flex flex-col justify-center items-start">
                {/* <div
                    className="flex items-end"
                >
                    <div
                        className="bg-[#2b2b2b] text-white flex items-center justify-center text-lg overflow-hidden px-24 py-8 font-extrabold"
                    >
                        Project
                    </div>
                    <div
                        className="bg-[#2b2b2b] text-white flex items-center justify-center text-[6px] overflow-hidden uppercase px-12 py-3"
                    >
                        all projects
                    </div>
                </div> */}
            </div>
            <div className='flex-grow h-screen w-full'>
                <img
                    src={imageSrc}
                    alt="Initial image"
                    className="h-screen object-cover overflow-hidden w-full"
                />
            </div>
        </motion.div>
    )
}