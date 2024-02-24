import { useEffect, useRef, CSSProperties } from "react";

import scrollReveal from "scrollreveal";

function ScrollReveal({ children }) {
  const SectionRef = useRef(null);
  const style = CSSProperties;
  useEffect(() => {
    if (SectionRef.current) {
      scrollReveal().reveal(SectionRef.current, {
        reset: true,
        delay: 500,
      });
    }
  }, []);

  return (
    <div
      ref={SectionRef}
      style={style}
      className="container scroll-section"
      data-test="section"
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
