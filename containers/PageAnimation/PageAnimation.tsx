import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";

const variantsPop: Variants = {
    hidden: { opacity: 1, x: "-100%", y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 1, x: "100%", y: 0 },
};

const variantsPush: Variants = {
    hidden: { opacity: 1, x: "100%", y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 1, x: "-100%", y: 0 },
};

const PageAnimation = ({ router, children }) => {
    const [variants, setVariants] = useState<Variants>(variantsPush);

    return (
        <>
            <AnimatePresence
                exitBeforeEnter={false}
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <motion.main
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ type: "linear" }}
                    key={router.route}
                >
                    {children}
                </motion.main>
            </AnimatePresence>
        </>
    );
};

export default PageAnimation;
