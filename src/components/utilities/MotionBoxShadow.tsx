import { JSX } from "react";
import { motion } from "motion/react";

type Props = {
  children: JSX.Element;
  className?: string;
  shadowColor?: String;
};

const MotionBoxShadow = ({
  children,
  className,
  shadowColor = "--brand-highlight",
}: Props) => {
  return (
    <motion.div
      initial={{ x: 4, y: 4 }}
      animate={{
        x: 0,
        y: 0,
        boxShadow: `10px 10px var(${shadowColor})`,
        transition: {
          delay: 0.2,
          duration: 0.4,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionBoxShadow;
