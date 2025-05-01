import { JSX, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  color?: String;
}

const InViewAppear = ({
  children,
  width = "fit-content",
  color = "--brand-highlight",
}: Props) => {
  const rise = useAnimation();
  const wipe = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      wipe.start("visible");
      rise.start("visible");
    } else {
      wipe.start("hidden");
      rise.start("hidden");
    }
  }, [inView, rise, wipe]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 70 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={rise}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={wipe}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: `var(${color})`,
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default InViewAppear;
