
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Animation() {
   const { ref, inView } = useInView({
    threshold: 0.2,
    // rootMargin: "0px 0px -100px 0px", // trigger slightly early
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      console.log("🔥 Scroll Trigger Fired!");
    }
    console.log("wait.....")
  }, [inView]);

  return (
    <>
      <div style={{ height: "100vh" }}>Scroll down 👇</div>

      <div
        ref={ref}
        style={{
          height: inView ? "100vh" : 0,
          background: inView ? "#22c55e" : "#9ca3af",
          transition: "7.3s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {inView ? "Triggered!" : "Waiting..."}
      </div>
    </>
  );
}